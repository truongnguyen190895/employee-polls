import { _getUsers } from "@/_DATA";
import BannerImage from "@/assets/images/banner.png";
import { Button, Input } from "@/components";
import { useAppDispatch } from "@/store";
import { login } from "@/store/actions/authAction";
import { useState } from "react";
import "./login.style.scss";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<{ userName: string; password: string }>({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    setLoading(true);
    _getUsers()
      .then((data) => {
        if (
          data[user.userName] &&
          data[user.userName].password === user.password
        ) {
          const loggedInUser = data[user.userName];
          dispatch(login(loggedInUser));
          setLoading(false);
          setError(false);
        } else {
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-page-container">
      <h1>Employee Polls</h1>
      <div className="banner">
        <img src={BannerImage} alt="banner" width="100%" />
      </div>
      <h3>{loading ? "loading..." : "Login"}</h3>
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
        {error ? (
          <small className="error-login">
            Username or password is incorrect
          </small>
        ) : null}
      </div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
