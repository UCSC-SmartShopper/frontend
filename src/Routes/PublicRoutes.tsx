import DriverLogin from "@/pages/DriverApp/LoginRegister/Login/DriverLogin";
import LoginRegister from "@/pages/DriverApp/LoginRegister/LoginRegister";
import DriverRegister from "@/pages/DriverApp/LoginRegister/Register/DriverRegister";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Supermarkets from "@/pages/Supermarkets";
import PublicLayout from "./Layouts/PublicLayout";
// import Supermarkets from "@/pages/Supermarkets";
import QrScanner from "@/components/Qr/QrScanner";
import Test from "@/pages/Test";
import path from "path";


const PublicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "driver/login", element: <DriverLogin /> },
      { path: "driver/login_register", element: <LoginRegister /> },
      { path: "driver/register", element: <DriverRegister /> },
      {path : "supermarket", element: <Supermarkets/>},
      {path : "qr", element: <QrScanner />},
      {path : "test", element: <Test />}
    
    ],
  },
];

export default PublicRoutes;
