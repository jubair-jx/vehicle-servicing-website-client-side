import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Home/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import Checkout from "../components/Checkout/Checkout";
import BookingServices from "../components/BookingServices/BookingServices";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookingServics",
        element: (
          <PrivateRoute>
            <BookingServices></BookingServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
