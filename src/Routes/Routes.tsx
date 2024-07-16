import App from "@/App";
import ShippingAddress from "@/components/Consumer/ShippingAddress";
import Reviews from "@/components/Feedback";
import AdminMain from "@/pages/Admin/AdminMain";
import CartDetails from "@/pages/CartDetails";
import ConsumerProfile from "@/pages/ConsumerProfile";
import DriverLogin from "@/pages/DriverApp/LoginRegister/Login/DriverLogin";
import LoginRegister from "@/pages/DriverApp/LoginRegister/LoginRegister";
import DriverRegister from "@/pages/DriverApp/LoginRegister/Register/DriverRegister";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import PaymentSuccessful from "@/pages/PaymentSuccessful";
import ProductDetail from "@/pages/ProductDetail";
import SignUp from "@/pages/SignUp";
import Test from "@/pages/Test";
import { Footer } from "flowbite-react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },

      { path: "cart", element: <CartDetails /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "ConsumerProfile", element: <ConsumerProfile /> },

      { path: "ShippingAddress", element: <ShippingAddress /> },
      { path: "reviews", element: <Reviews /> },
      { path: "paymentSuccessful", element: <PaymentSuccessful /> },

      { path: "Footer", element: <Footer /> },
      { path: "test", element: <Test /> },

      { path: "driver", element: <LoginRegister /> },
      { path: "driver/login_register", element: <LoginRegister /> },
      { path: "driver/login", element: <DriverLogin /> },
      { path: "driver/register", element: <DriverRegister /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
  {
    element: <AdminRoutes />,
    children: [
      {
        path: "admin",
        element: <App />,
        children: [{ path: "", element: <AdminMain /> }],
      },
    ],
  },
]);

export default router;
