import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import Chat from "./pages/Chat";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/chat",
				element: <Chat />,
			},
			{
				path: "/privacy",
				element: <Privacy />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);

export default router;
