import { useState } from "react";
import "./input.style.scss";

interface InputProps {
  value?: string;
  type?: "text" | "password";
  placeHolder?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  return <input className="custom-input" {...props} />;
};
