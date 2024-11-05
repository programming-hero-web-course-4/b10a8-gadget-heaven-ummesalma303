import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import Category from "../components/Category";
import Categories from "../components/Categories";
import ProductDetails from "../pages/ProductDetails";
  
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('../category.json'),
          children:[
            {
              path: '/',
              element: <Categories></Categories>,
              loader:()=>fetch('../allData.json')
              
            },
            {
              path: '/categories/:categories',
              element: <Categories></Categories>,
              loader:()=>fetch('../allData.json')
              
            },
          ]
        },
        {
          path:'/details/:id',
          element:<ProductDetails></ProductDetails>,
          loader:()=>fetch('../allData.json')
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