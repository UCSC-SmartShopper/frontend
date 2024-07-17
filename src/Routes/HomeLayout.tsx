import AdminMain from "@/pages/Admin/AdminMain";
import Landing from "@/pages/Landing";
import useAuthStore from "@/state-management/auth/store";

const HomeLayout = () => {
  const { user } = useAuthStore();
  console.log(user);

  if (user?.role === "admin") return <AdminMain />;
  return <Landing />;
};

export default HomeLayout;
