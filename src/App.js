import logo from "./logo.svg";
import "./App.css";
import Homepage from "./layout/Homepage";
import Speakers from "./layout/Speakers"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/speakers",
      element: <Speakers />,
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;