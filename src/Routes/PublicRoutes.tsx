import DriverLogin from "@/pages/DriverApp/LoginRegister/Login/DriverLogin";
import LoginRegister from "@/pages/DriverApp/LoginRegister/LoginRegister";
import DriverRegister from "@/pages/DriverApp/LoginRegister/Register/DriverRegister";
import Login from "@/pages/Login";
import ProductDetail from "@/pages/ProductDetail";
import SignUp from "@/pages/SignUp";

const PublicRoutes = [
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },

  { path: "driver/login", element: <DriverLogin /> },
  { path: "driver/login_register", element: <LoginRegister /> },
  { path: "driver/register", element: <DriverRegister /> },

  { path: "products/:id", element: <ProductDetail /> },
];

export default PublicRoutes;
