import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import DashBoard from './components/DashBoard.jsx';
import DynamicForm from './components/DynamicForm.jsx';
import fields from './assets/fields';
import Products from './Pages/Products.jsx';
import Cart from './Pages/Cart.jsx';
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children:[
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
 
  {
    path: "/dynamicform",
    element: <DynamicForm fields={fields} />,
   
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
