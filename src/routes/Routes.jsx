import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
  
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<Home></Home>,
          children:[
            {
              
            }
          ]
        },
        {
          path: "/statistics",
          element:<Statistics></Statistics>,
        },
        {
          path: "/dashboard",
          element:<Dashboard></Dashboard>,
        },
      ]
    }
    
]);
  
export default router