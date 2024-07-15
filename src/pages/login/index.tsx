import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import BannerImage from "@/assets/images/banner.png";
import { Input, Button } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store";
import { login } from "@/store/actions/authAction";
import { _getUsers } from "@/_DATA";
import "./login.style.scss";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);
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

          dispatch(
            login({
              id: loggedInUser.id,
              username: loggedInUser.name,
              password: user.password,
            })
          );
          setLoading(false);
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

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
