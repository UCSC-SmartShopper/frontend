import SideBar from "@/components/SideBar";
import AdminAdvertisements from "@/pages/Admin/AdminAdvertisements";
import AdminCourierServices from "@/pages/Admin/AdminCourierServices";
import AdminCustomers from "@/pages/Admin/AdminCustomers";
import AdminOrders from "@/pages/Admin/AdminOrders";
import AdminOverview from "@/pages/Admin/AdminOverview";
import AdminSettings from "@/pages/Admin/AdminSettings";
import AdminSuperMarkets from "@/pages/Admin/AdminSuperMarkets";
import AdminTransactions from "@/pages/Admin/AdminTransactions";
import useAuthStore from "@/state-management/auth/store";
import { Flex, Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useAuthStore();

  if (user?.role !== "admin") return <Navigate to={"/login"} />;

  return (
    <Flex w="full">
      <Box w="16vw" top="10vh">
        <SideBar />
      </Box>
      <Box w="full" px="2%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminLayout;
