import Test from "@/pages/Test";
import loadable from "@loadable/component";

const DriverLogin = loadable(
  () => import("@/pages/DriverApp/LoginRegister/Login/DriverLogin")
);
const LoginRegister = loadable(
  () => import("@/pages/DriverApp/LoginRegister/LoginRegister")
);
const DriverRegister = loadable(
  () => import("@/pages/DriverApp/LoginRegister/Register/DriverRegister")
);
const Login = loadable(() => import("@/pages/Login"));
const SignUp = loadable(() => import("@/pages/SignUp"));
const Supermarkets = loadable(() => import("@/pages/Supermarkets"));
const PublicLayout = loadable(() => import("./Layouts/PublicLayout"));

const PublicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "driver/login", element: <DriverLogin /> },
      { path: "driver/login_register", element: <LoginRegister /> },
      { path: "driver/register", element: <DriverRegister /> },
      { path: "supermarket", element: <Supermarkets /> },

      {path: "/test", element: <Test />},
    ],
  },
];

export default PublicRoutes;
