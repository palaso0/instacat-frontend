import { createBrowserRouter } from "react-router-dom";
import { SignInPage, SignUpPage, HomePage, ProfilePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
