import {} from "@/store";
import BannerImage from "@/assets/images/banner.png";
import "./login.style.scss";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <h1>Employee Polls</h1>
      <div className="banner">
        <img src={BannerImage} alt="banner" width="100%" />
      </div>
      <p>Login</p>
      <div className="login-container"></div>
    </div>
  );
};

export default LoginPage;
