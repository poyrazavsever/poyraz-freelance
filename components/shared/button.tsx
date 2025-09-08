import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  target?: "_blank" | "_self";
  animated?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  href,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  target = "_self",
  animated = true,
  type = "button",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 dark:focus:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden cursor-pointer";

  // Size variants
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 rounded",
    md: "px-4 py-2 text-sm gap-2 rounded-md",
    lg: "px-6 py-3 text-base gap-2.5 rounded-lg",
  };

  // Variant styles
  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary/90 text-dark-bg dark:text-dark-bg border-0",
    secondary:
      "bg-secondary dark:bg-secondary/20 text-dark-bg dark:text-dark-bg hover:bg-primary/20 dark:hover:bg-primary/30 border border-primary/20 dark:border-primary/30",
    outline:
      "bg-transparent text-dark-bg dark:text-dark-bg border border-primary/30 dark:border-primary/40 hover:bg-primary/10 dark:hover:bg-primary/20",
    ghost:
      "bg-transparent text-dark-bg/80 dark:text-dark-bg/80 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-dark-bg dark:hover:text-dark-bg transition-all",
    gradient:
      "bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/90 text-dark-bg dark:text-dark-bg hover:from-primary/90 hover:to-primary/70 dark:hover:from-primary/90 dark:hover:to-primary/80",
  };

  // Icon size based on button size
  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  // Combine styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // Loading spinner component
  const LoadingSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`border-2 border-current border-t-transparent rounded-full ${iconSizes[size]}`}
    />
  );

  // Button content
  const ButtonContent = () => (
    <>
      {/* Hover'da arkadan geçen beyaz efekt */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <div
        className={`relative z-10 flex items-center ${
          sizeStyles[size].includes("gap-1.5")
            ? "gap-1.5"
            : sizeStyles[size].includes("gap-2.5")
            ? "gap-2.5"
            : "gap-2"
        }`}
      >
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === "left" && (
          <Icon icon={icon} className={iconSizes[size]} />
        )}
        {!loading && <span>{children}</span>}
        {!loading && icon && iconPosition === "right" && (
          <Icon icon={icon} className={iconSizes[size]} />
        )}
      </div>
    </>
  );

  // Animation wrapper
  const AnimatedWrapper = ({
    children: content,
  }: {
    children: React.ReactNode;
  }) => {
    if (!animated) return <>{content}</>;

    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-block">
        {content}
      </motion.div>
    );
  };

  // If href is provided, render as Link
  if (href) {
    return (
      <AnimatedWrapper>
        <Link
          href={href}
          target={target}
          className={buttonStyles}
          onClick={disabled ? undefined : onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ButtonContent />
        </Link>
      </AnimatedWrapper>
    );
  }

  // Otherwise render as button
  return (
    <AnimatedWrapper>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ButtonContent />
      </button>
    </AnimatedWrapper>
  );
};

// Pre-defined button variants for common use cases
export const PrimaryButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="primary" />;

export const SecondaryButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="secondary" />;

export const OutlineButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="outline" />;

export const GhostButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button {...props} variant="ghost" />
);

export const GradientButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="gradient" />;

// Icon button variants
export const IconButton: React.FC<ButtonProps & { iconOnly?: boolean }> = ({
  iconOnly = false,
  children,
  ...props
}) => {
  if (iconOnly) {
    return (
      <Button {...props} className={`aspect-square ${props.className || ""}`}>
        {children || ""}
      </Button>
    );
  }
  return <Button {...props}>{children}</Button>;
};

export default Button;
