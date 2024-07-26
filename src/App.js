import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
