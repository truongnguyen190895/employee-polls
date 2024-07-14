import { useState } from "react";
import BannerImage from "@/assets/images/banner.png";
import { Input, Button } from "@/components";
import "./login.style.scss";

const LoginPage = () => {
  const [userName, setUserName] = useState<string>("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  return (
    <div className="login-page-container">
      <h1>Employee Polls</h1>
      <div className="banner">
        <img src={BannerImage} alt="banner" width="100%" />
      </div>
      <p>Login</p>
      <div className="login-container">
        <div className="login-control">
          <label>User</label>
          <Input value={userName} onChange={handleChangeUserName} />
        </div>
        <div className="login-control">
          <label>Password</label>
          <Input
            type="password"
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default LoginPage;
