import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/ServicesDetials/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`https://photography-server-ten.vercel.app/services/${params.id}`)
                }
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://photography-server-ten.vercel.app/updateReview/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);