import useAuthStore from "@/state-management/auth/store";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const { user } = useAuthStore();

  if (user?.role !== "admin") return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default AdminRoutes;
