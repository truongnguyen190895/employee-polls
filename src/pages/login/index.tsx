import { useState } from "react";
import { v4 as uuid } from "uuid";
import BannerImage from "@/assets/images/banner.png";
import { Input, Button } from "@/components";
import { useAppDispatch } from "@/store";
import { login } from "@/store/actions/authAction";
import "./login.style.scss";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<{ userName: string; password: string }>({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    dispatch(
      login({ id: uuid(), username: user.userName, password: user.password })
    );
  };

  return (
    <div className="login-page-container">
      <h1>Employee Polls</h1>
      <div className="banner">
        <img src={BannerImage} alt="banner" width="100%" />
      </div>
      <h3>Login</h3>
      <div className="login-container">
        <div className="login-control">
          <label>User</label>
          <Input
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div className="login-control">
          <label>Password</label>
          <Input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
