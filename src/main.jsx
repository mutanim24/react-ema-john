import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import cardDataLoad from './dataLoader/CartDataLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cardDataLoad,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
