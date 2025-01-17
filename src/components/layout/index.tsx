import { Navbar } from "../navbar";
import "./layout.style.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="main-content">{children}</div>
    </div>
  );
};
