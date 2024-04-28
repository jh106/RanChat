import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Root() {
	return (
		<div className="root_layout">
			<Nav />
			<Outlet />
		</div>
	);
}
