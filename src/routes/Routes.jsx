import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/News/News/News";
import Register from "../Pages/LogIn/Register/Register";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import LogInLayOut from "../layouts/LogInLayOut";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LogInLayOut></LogInLayOut>,
        children: [

            {
                path: "/",
                element: <Navigate to='categories/0'></Navigate>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'categories',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]

    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element:<h1>404 not found</h1>
    }
])

export default router;


