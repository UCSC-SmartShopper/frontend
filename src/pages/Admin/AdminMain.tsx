import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React,{ useState } from "react";
import SideBar from "../../components/SideBar";
import AdminOverview from "./AdminOverview";
import AdminCourierServices from "./AdminCourierServices";
import AdminSuperMarkets from "./AdminSuperMarkets";
import AdminCustomers from "./AdminCustomers";
import AdminOrders from "./AdminOrders";
import AdminTransactions from "./AdminTransactions";
import AdminAdvertisements from "./AdminAdvertisements";
import AdminSettings from "./AdminSettings";

const AdminMain = () => {
  const [adminPage, setAdminPage] = useState("Overview");
  const changePage = (page: string) => {
    setAdminPage(page);
  };

  return (
    <Flex w="full">
      <Box w="16vw" top="10vh" bg="red">
        <SideBar
          adminPage={adminPage}
          setAdminPage={(page) => setAdminPage(page)}
        />
      </Box>
      <Box w="full" px="2%">
        {adminPage === "Overview" && <AdminOverview />}
        {adminPage === "Customers" && <AdminCustomers />}
        {adminPage === "Supermarkets" && <AdminSuperMarkets />}
        {adminPage === "Couriers" && <AdminCourierServices />}
        {adminPage === "Orders" && <AdminOrders />}
        {adminPage === "Transactions" && <AdminTransactions />}
        {adminPage === "Advertisements" && <AdminAdvertisements />}
        {adminPage === "Settings" && <AdminSettings />}
      </Box>
    </Flex>
  );
};

export default AdminMain;
