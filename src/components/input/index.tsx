import "./input.style.scss";

interface InputProps {
  value?: string;
  type?: "text" | "password";
  placeHolder?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeHolder, ...rest }: InputProps) => {
  return <input className="custom-input" placeholder={placeHolder} {...rest} />;
};
