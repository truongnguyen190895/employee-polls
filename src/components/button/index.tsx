import React from "react";
import "./button.style.scss";

interface ButtonProps {
  variant?: "primary" | "warning" | "error";
  type?: "submit";
  children?: React.ReactNode | string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  variant = "primary",
  children,
  type,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`custom-button ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
