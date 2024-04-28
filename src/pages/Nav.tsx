import "../assets/app.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav-bar">
          <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/chat">시작하기</NavLink>
          <NavLink to="/privacy">개인정보 보호</NavLink>
          </nav>
        </div>
    );
}