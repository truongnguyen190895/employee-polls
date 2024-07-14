import { NavLink } from "react-router-dom";
import "./navbar.style.scss";

export const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <div className="navigator">
        <NavLink to="/" className={(isActive) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/leader-board">Leaderboard</NavLink>
        <NavLink to="/new">New</NavLink>
      </div>
      <div className="user-detail">
        <div className="avatar">Avatar</div>
        <div className="log-out">Log out</div>
      </div>
    </div>
  );
};
