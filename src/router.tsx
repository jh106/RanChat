import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);

export default router;
