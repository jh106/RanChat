import "../assets/app.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav-bar">
          <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/home">home</NavLink>
          <NavLink to="/test">test</NavLink>
          <NavLink to="/wronglink">asdf</NavLink>
          </nav>
        </div>
    );
}