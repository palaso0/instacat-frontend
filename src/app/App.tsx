import React from "react";
import { HomePage, ProfilePage, SignInPage, SignUpPage } from "../pages";
import { RouterProvider } from "react-router-dom";
import { router } from "../config/reactRouter.config";
import { UserList, BoxModal, Post, FullPost } from "../components";

function App() {
  return <RouterProvider router={router} />;
  // return <FullPost />;
}

export default App;
