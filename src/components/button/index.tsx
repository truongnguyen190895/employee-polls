import React from "react";
import "./button.style.scss";

interface ButtonProps {
  variant?: "primary" | "warning" | "error";
  children?: React.ReactNode | string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
