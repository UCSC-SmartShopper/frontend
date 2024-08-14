import DriverLogin from "@/pages/DriverApp/LoginRegister/Login/DriverLogin";
import LoginRegister from "@/pages/DriverApp/LoginRegister/LoginRegister";
import DriverRegister from "@/pages/DriverApp/LoginRegister/Register/DriverRegister";
import Login from "@/pages/Login";
import ProductDetail from "@/pages/Consumer/ProductDetail";
import SignUp from "@/pages/SignUp";
import PublicLayout from "./Layouts/PublicLayout";
import Home from "@/pages/CourierCompanyManager/Home";
import PersonalDetails from "@/pages/CourierCompanyManager/PersonalDetails";



const PublicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "driver/login", element: <DriverLogin /> },
      { path: "driver/login_register", element: <LoginRegister /> },
      { path: "driver/register", element: <DriverRegister /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "/Home", element: <Home /> },
      { path: "/personalDetails", element: <PersonalDetails /> },
      
    
    ],
  },
];

export default PublicRoutes;
