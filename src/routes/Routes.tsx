import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/user/Home'
import UserWrapper from '../layout/user/UserWrapper'
import About from '../pages/user/About'
import ProductList from '../pages/user/ProductList'
import SingleProduct from '../pages/user/SingleProduct'
import Contact from '../pages/user/Contact'
import AdminWrapper from '../layout/admin/AdminWrapper'
import Dashboard from '../pages/admin/Dashboard'
import Category from '../pages/admin/Category'
import Products from '../pages/admin/Products'
import User from '../pages/admin/User'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import BecomeFarmer from '../pages/user/BecomeFarmer'


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <UserWrapper />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/productlist",
                element: <ProductList />
            },
            {
                path: "/singleproduct/:id",
                element: <SingleProduct />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/becomeFarmer",
                element: <BecomeFarmer />
            }
            
        ]
    },
    {
        path: "/admin/",
        element: <AdminWrapper />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "category",
                element: <Category />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "user",
                element: <User />
            }
        ]
    }
])
export default routes