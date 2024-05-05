import "../assets/app.css";
import { NavLink } from "react-router-dom";

const activeStyle = {};

export default function Nav() {
	return (
		<div className="nav-bar">
			<nav className="nav">
				<NavLink to="/" style={{ textDecoration: "none" }}>
					<div className="nav_link">home</div>
				</NavLink>
				<NavLink to="/chat" style={{ textDecoration: "none" }}>
					<div className="nav_link">시작하기</div>
				</NavLink>
				<NavLink to="/privacy" style={{ textDecoration: "none" }}>
					<div className="nav_link">개인정보 보호</div>
				</NavLink>
			</nav>
		</div>
	);
}
