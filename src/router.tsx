import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./pages/Root";
import Test  from "./pages/Test";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
      <Route path="/home" element={ <Home/> } />
      <Route path="/test" element={ <Test/> } />
    </Route>
  )
);

export default router;