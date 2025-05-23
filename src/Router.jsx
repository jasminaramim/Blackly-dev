import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Homepage/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;