import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { logout } from "@/store/actions/authAction";
import "./navbar.style.scss";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-bar-container">
      <div className="navigator">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/leader-board"
        >
          Leader board
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/new"
        >
          New
        </NavLink>
      </div>
      <div className="user-detail">
        <div className="avatar">
          <img src={user?.avatar} alt="avatar" width="100%" />
        </div>
        <div>{user?.username}</div>
        <div className="log-out" onClick={handleLogout}>
          Log out
        </div>
      </div>
    </div>
  );
};
