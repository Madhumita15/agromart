import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import UserWrapper from "../layout/user/UserWrapper";
import About from "../pages/user/About";
import ProductList from "../pages/user/ProductList";
import Contact from "../pages/user/Contact";
import AdminWrapper from "../layout/admin/AdminWrapper";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BecomeFarmer from "../pages/user/BecomeFarmer";
import ProductById from "../pages/user/ProductById";
import Cart from "../pages/user/Cart";
import WishList from "../pages/user/WishList";
import AdminProductManagement from "../pages/admin/AdminProductManagement";
import FarmerRequest from "../pages/admin/FarmerRequest";
import UserManagement from "../pages/admin/UserManagement";
import CategoryManagement from "../pages/admin/CategoryManagement";
import AgentProductManagement from "../pages/admin/AgentProductManagement";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/productlist",
        element: <ProductList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/becomeFarmer",
        element: <BecomeFarmer />,
      },
      {
        path: "/productById/:id",
        element: <ProductById />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminWrapper />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "adminProductManagement",
        element: <AdminProductManagement />,
      },
      {
        path: "farmerRequest",
        element: <FarmerRequest />,
      },
      {
        path: "userManagement",
        element: <UserManagement />,
      },
      {
        path: "categoryManagement",
        element: <CategoryManagement />,
      },
      {
        path: "agentProductManagement",
        element: <AgentProductManagement />,
      },
    ],
  },
]);
export default routes;
