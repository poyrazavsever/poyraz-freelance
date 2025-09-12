"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";
import { freelancePackages, freelanceTable } from "@/data/freelancePackages";

const PackagesSite = () => {
  const [selectedCategory, setSelectedCategory] = useState("kurumsal");

  const currentCategory = freelancePackages.find(
    (cat) => cat.category_slug === selectedCategory
  );

  const currentTable =
    freelanceTable[selectedCategory as keyof typeof freelanceTable];

  const renderCellValue = (valueType: string, value: any) => {
    switch (valueType) {
      case "boolean":
        return value ? (
          <Icon
            icon="hugeicons:checkmark-circle-02"
            className="text-green-500 text-xl"
          />
        ) : (
          <Icon
            icon="hugeicons:cancel-circle"
            className="text-red-500 text-xl"
          />
        );
      case "badge":
        const badgeColors = {
          Advanced:
            "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
          Intermediate:
            "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
          Basic:
            "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
          "WCAG 2.1 AA checklist":
            "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
          "Basic rules":
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
        };
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              badgeColors[value as keyof typeof badgeColors] ||
              "bg-gray-100 text-gray-800"
            }`}
          >
            {value}
          </span>
        );
      case "list":
        return (
          <ul className="text-sm space-y-1">
            {value.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <Icon
                  icon="hugeicons:checkmark-circle-02"
                  className="text-green-500 text-xs"
                />
                {item}
              </li>
            ))}
          </ul>
        );
      case "choice":
        return (
          <div className="text-sm">
            <div className="font-medium">{value.default}</div>
            {value.options && (
              <div className="text-xs text-neutral-500 mt-1">
                {value.options.join(" / ")}
              </div>
            )}
          </div>
        );
      default:
        return <span className="text-sm">{value}</span>;
    }
  };

  return (
    <section className="py-24 sm:py-0 bg-white dark:bg-dark-bg min-h-screen flex items-start justify-start">
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-7xl">
          {/* Category Tabs */}
          <div className="mb-12">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                Choose Your Service Category
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Select a category to view detailed packages and pricing
              </p>
            </div>

            {/* Service Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {freelancePackages.map((category) => {
                const isSelected = selectedCategory === category.category_slug;
                const icons = {
                  kurumsal: "hugeicons:building-01",
                  uiux: "hugeicons:paint-brush-02",
                  eticaret: "hugeicons:shopping-cart-01",
                };

                return (
                  <div
                    key={category.category_slug}
                    onClick={() => setSelectedCategory(category.category_slug)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                      isSelected
                        ? "border-primary bg-primary/5 dark:bg-primary/10 shadow-lg"
                        : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        }`}
                      >
                        <Icon
                          icon={
                            icons[category.category_slug as keyof typeof icons]
                          }
                          className="text-2xl"
                        />
                      </div>
                      <h4
                        className={`text-lg font-semibold mb-2 ${
                          isSelected
                            ? "text-primary"
                            : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {category.category}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {currentCategory && (
            <>
              {/* Pricing Cards */}
              <div className="max-w-6xl mb-16">
                <div className="border-l-4 border-primary pl-6 py-4 mb-8">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {currentCategory.category} Packages
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Choose the perfect package for your project needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentCategory.packages
                    .sort((a, b) => {
                      // Sort to put Basic first, Pro in middle, Standard last
                      if (a.name === "Basic") return -1;
                      if (b.name === "Basic") return 1;
                      if (a.tier.includes("Pro") || a.tier.includes("Legend"))
                        return -1;
                      if (b.tier.includes("Pro") || b.tier.includes("Legend"))
                        return 1;
                      return 0;
                    })
                    .map((pkg, index) => {
                      const isPopular =
                        pkg.tier.includes("Pro") || pkg.tier.includes("Legend");

                      return (
                        <div
                          key={pkg.id}
                          className={`relative bg-white dark:bg-neutral-900 rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                            isPopular
                              ? "border-primary shadow-lg transform scale-105 lg:order-2"
                              : pkg.name === "Basic"
                              ? "border-neutral-200 dark:border-neutral-700 hover:border-primary/50 lg:order-1"
                              : "border-neutral-200 dark:border-neutral-700 hover:border-primary/50 lg:order-3"
                          }`}
                        >
                          {isPopular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                                Most Popular
                              </span>
                            </div>
                          )}

                          <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                              {pkg.name}
                            </h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                              {pkg.tier}
                            </p>
                            <div className="mb-4">
                              <span className="text-4xl font-bold text-primary">
                                {pkg.price}
                              </span>
                              <span className="text-neutral-500 dark:text-neutral-400 ml-2">
                                {pkg.price_unit}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {pkg.subtitle}
                            </p>
                          </div>

                          <div className="mb-6">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-neutral-600 dark:text-neutral-400">
                                Included Pages:
                              </span>
                              <span className="font-medium text-neutral-900 dark:text-white">
                                {pkg.base_pages_included}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-neutral-600 dark:text-neutral-400">
                                Extra Page:
                              </span>
                              <span className="font-medium text-neutral-900 dark:text-white">
                                {pkg.extra_page_price} TL
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm mb-4">
                              <span className="text-neutral-600 dark:text-neutral-400">
                                Revisions:
                              </span>
                              <span className="font-medium text-neutral-900 dark:text-white">
                                {pkg.revisions_included}
                              </span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
                              What's Included:
                            </h4>
                            <ul className="space-y-2">
                              {pkg.features.slice(0, 6).map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Icon
                                    icon="hugeicons:checkmark-circle-02"
                                    className="text-green-500 text-base mt-0.5 flex-shrink-0"
                                  />
                                  <span className="text-neutral-600 dark:text-neutral-400">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                              {pkg.features.length > 6 && (
                                <li className="text-sm text-neutral-500 dark:text-neutral-400">
                                  +{pkg.features.length - 6} more features...
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="mb-6 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-neutral-600 dark:text-neutral-400">
                                Delivery:
                              </span>
                              <span className="font-medium text-neutral-900 dark:text-white">
                                {pkg.delivery.default_days} days
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-neutral-600 dark:text-neutral-400">
                                Support:
                              </span>
                              <span className="font-medium text-neutral-900 dark:text-white">
                                {pkg.support.months} months
                              </span>
                            </div>
                          </div>

                          <Button
                            variant={isPopular ? "primary" : "outline"}
                            size="md"
                            className="w-full"
                            href="/contact"
                            icon="hugeicons:arrow-right-02"
                            iconPosition="right"
                          >
                            {pkg.cta}
                          </Button>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Add-ons Section */}
              {currentCategory.addons && currentCategory.addons.length > 0 && (
                <div className="max-w-4xl mb-16">
                  <div className="border-l-4 border-primary pl-6 py-4 mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      Available Add-ons
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Enhance your package with additional features
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentCategory.addons.map((addon, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-neutral-10 dark:bg-neutral-800/10 rounded-lg border border-neutral-400 dark:border-neutral-800"
                      >
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {addon.name}
                        </span>
                        <span className="text-primary font-semibold">
                          {addon.price} {addon.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Table */}
              {currentTable && (
                <div className="max-w-6xl mb-16">
                  <div className="border-l-4 border-primary pl-6 py-4 mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      {currentTable.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Detailed comparison of all features and specifications
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-neutral-50 dark:bg-neutral-800">
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white border-r border-neutral-200 dark:border-neutral-700">
                            Features
                          </th>
                          {currentTable.columns.map((col) => (
                            <th
                              key={col.id}
                              className="text-center p-4 font-semibold text-neutral-900 dark:text-white border-r border-neutral-200 dark:border-neutral-700 min-w-[200px]"
                            >
                              <div>{col.label}</div>
                              <div className="text-sm font-normal text-primary mt-1">
                                {col.priceLabel}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentTable.rows.map((row, index) => (
                          <tr
                            key={row.key}
                            className={
                              index % 2 === 0
                                ? "bg-white dark:bg-neutral-900"
                                : "bg-neutral-10 dark:bg-neutral-800/10"
                            }
                          >
                            <td className="p-4 font-medium text-neutral-900 dark:text-white border-r border-neutral-200 dark:border-neutral-700">
                              {row.label}
                              {(row as any).tooltip && (
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                  {(row as any).tooltip}
                                </div>
                              )}
                            </td>
                            {currentTable.columns.map((col) => (
                              <td
                                key={col.id}
                                className="p-4 text-center border-r border-neutral-200 dark:border-neutral-700"
                              >
                                {row.key === "cta" ? (
                                  <Button
                                    variant={
                                      col.label === "Pro"
                                        ? "primary"
                                        : "outline"
                                    }
                                    size="md"
                                    href="/contact"
                                    className="w-full"
                                  >
                                    {(row.values as any)[col.id]}
                                  </Button>
                                ) : (
                                  renderCellValue(
                                    row.valueType,
                                    (row.values as any)[col.id]
                                  )
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Bottom CTA */}
          <div className="max-w-4xl py-16">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 border border-primary/20 dark:border-primary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Need a Custom Solution?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Every project is unique. If none of these packages fit your
                  exact needs, let's discuss a custom solution tailored
                  specifically for your requirements and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="md"
                    icon="hugeicons:mail-01"
                    iconPosition="left"
                    href="/contact"
                  >
                    Get Custom Quote
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon="hugeicons:calendar-03"
                    iconPosition="left"
                    href="/contact"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSite;
