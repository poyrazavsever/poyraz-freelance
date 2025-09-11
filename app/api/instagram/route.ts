// app/api/instagram/route.ts
import { NextResponse } from "next/server";

const IG_ENDPOINT = "https://graph.instagram.com/me/media";

export const revalidate = 3600; // 1 saat cache

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const after = searchParams.get("after") ?? undefined;

    const accessToken = process.env.INSTAGRAM_USER_ACCESS_TOKEN;
    const fields =
      process.env.INSTAGRAM_FIELDS ??
      "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink";
    const limit = process.env.INSTAGRAM_LIMIT ?? "12";

    if (!accessToken) {
      return NextResponse.json(
        { error: "INSTAGRAM_USER_ACCESS_TOKEN not set" },
        { status: 500 }
      );
    }

    const url = new URL(IG_ENDPOINT);
    url.searchParams.set("fields", fields);
    url.searchParams.set("access_token", accessToken);
    url.searchParams.set("limit", limit);
    if (after) url.searchParams.set("after", after);

    const igRes = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!igRes.ok) {
      const errText = await igRes.text();
      return NextResponse.json({ error: errText }, { status: igRes.status });
    }

    const data = await igRes.json();

    // CAROUSEL_ALBUM çocukları
    const items = Array.isArray(data.data) ? data.data : [];
    const withChildren = await Promise.all(
      items.map(async (item: any) => {
        if (item.media_type === "CAROUSEL_ALBUM") {
          try {
            const childRes = await fetch(
              `https://graph.instagram.com/${item.id}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${accessToken}`
            );
            if (childRes.ok) {
              const childData = await childRes.json();
              return { ...item, children: childData.data ?? [] };
            }
          } catch {
            // yoksay
          }
        }
        return item;
      })
    );

    return NextResponse.json({
      data: withChildren,
      paging: data.paging ?? null,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "unknown" },
      { status: 500 }
    );
  }
}
