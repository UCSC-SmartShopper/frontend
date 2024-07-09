import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
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
  const [adminPage, setAdminPage] = useState("settings");
  
  return (
    <Flex w="full">
      <Box w="16vw" top="10vh">
        <SideBar />
      </Box>
      <Box w="full" px="2%">
        {adminPage === "overview" && <AdminOverview />}
        {adminPage === "customers" && <AdminCustomers />}
        {adminPage === "supermarkets" && <AdminSuperMarkets />}
        {adminPage === "couriers" && <AdminCourierServices/>}
        {adminPage === "orders" && <AdminOrders/>}
        {adminPage ==='transactions' && <AdminTransactions/>}
        {adminPage === 'advertisements' && <AdminAdvertisements/>}
        {adminPage === 'settings' && <AdminSettings/>}


      </Box>
    </Flex>
  );
};

export default AdminMain;
