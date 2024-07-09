import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import SideBar from "../../components/SideBar";
import AdminOverview from "./AdminOverview";
import AdminCourierServices from "./AdminCourierServices";
import AdminSuperMarkets from "./AdminSuperMarkets";
import AdminCustomers from "./AdminCustomers";
import AdminOrders from "./AdminOrders";
import AdminTransactions from "./AdminTransactions";
import AdminAdvertisements from "./AdminAdvertisements";
import AdminSettings from "./AdminSettings";

const AdminMain: React.FC = () => {
  const [adminPage, setAdminPage] = useState<string>("overview");

  return (
    <HStack w="full">
      <Box w="20vw" pos="fixed" top="10vh">
        <SideBar setAdminPage={setAdminPage} />
      </Box>
      <Box w="full" ml="20vw">
        {adminPage === "overview" && <AdminOverview />}
        {adminPage === "customers" && <AdminCustomers />}
        {adminPage === "supermarkets" && <AdminSuperMarkets />}
        {adminPage === "couriers" && <AdminCourierServices />}
        {adminPage === "orders" && <AdminOrders />}
        {adminPage === "transactions" && <AdminTransactions />}
        {adminPage === "advertisements" && <AdminAdvertisements />}
        {adminPage === "settings" && <AdminSettings />}
      </Box>
    </HStack>
  );
};

export default AdminMain;
