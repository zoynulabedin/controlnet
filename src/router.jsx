import { createBrowserRouter } from "react-router-dom";

//Auth
import SignInPage from "../src/pages/Auth/signIn";
import SignUpPage from "./pages/Auth/signUp";
import Dashboard from "./pages/Dashboard/dashboard";
import HomePage from "./pages/homepage";
import Middleware from "./pages/Admin/middleware";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/middleware",
    element: <Middleware />
  }
]);

export default router;