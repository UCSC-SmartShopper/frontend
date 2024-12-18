import useAuthStore from "@/state-management/auth/store";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { BiSolidReport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping, FaCartFlatbed, FaShop } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { IoHome, IoSettings } from "react-icons/io5";
import { MdOutlineQrCodeScanner, MdViewSidebar } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdMonetizationOn } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path?: string;
}

const SideBar = () => {
  const user = useAuthStore((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const adminMenuItems: MenuItem[] = [
    { icon: MdViewSidebar, label: "Overview", path: "/overview" },
    { icon: IoMdPeople, label: "Customers", path: "/customers" },
    { icon: FaShop, label: "Super Markets", path: "/supermarkets" },
    {
      icon: TbTruckDelivery,
      label: "Courier Services",
      path: "/courier-services",
    },
    { icon: FaCartFlatbed, label: "Orders", path: "/admin-orders" },
    // { icon: TbTransactionDollar, label: "Transactions", path: "/transactions" },
    {
      icon: RiAdvertisementFill,
      label: "Advertisements",
      path: "/advertisements",
    },
    { icon: BiSolidReport, label: "Reports", path: "/reports" },
    { icon: IoSettings, label: "Settings", path: "/settings" },

    { icon: FiLogOut, label: "Logout", path: "/logout" },
  ];

  const supermarketManagerMenuItems: MenuItem[] = [
    { icon: IoHome, label: "Dashboard", path: "/dashboard" },
    { icon: FaBagShopping, label: "Orders", path: "/orders" },
    { icon: IoMdPeople, label: "Products", path: "/products" },
    { icon: MdOutlineQrCodeScanner, label: "Scan", path: "/scan" },
    { icon: MdMonetizationOn, label: "Earnings", path: "/monthly-earnings" },
    { icon: CgProfile, label: "Profile", path: "/profile-Settings" },
    { icon: FiLogOut, label: "Logout", path: "/logout" },
  ];

  const menuItems =
    user?.role === "Admin" ? adminMenuItems : supermarketManagerMenuItems;

  return (
    <VStack
      w="14vw"
      h="90vh"
      pos="fixed"
      color="gray.800"
      fontWeight="500"
      spacing={3}
      pl={1}
      shadow="lg"
    >
      <Heading fontSize="2xl" color="primary" mt={2} p={2}>
        My Account
      </Heading>

      {menuItems.map((item, index) => (
        <Flex
          key={index}
          align="center"
          p={2}
          w="full"
          cursor="pointer"
          bg={pathname.startsWith(item.path || "") ? "rgba(255, 119, 8, 0.2)" : ""}
          borderLeft={pathname.startsWith(item.path || "") ? "5px solid" : ""}
          borderColor={pathname.startsWith(item.path || "") ? "primary" : ""}
          _hover={{ bg: "gray.100" }}
          onClick={() => {
            if (item.label === "Logout") {
              logout();
              navigate("/login");
            } else {
              navigate(`${item.path}`);
            }
          }}
          mt={item.path === "/logout" ? "auto" : 0}
          mb={item.path === "/logout" ? 4 : 0}
        >
          <item.icon size={20} />
          <Text ml={2} fontSize="lg">
            {item.label}
          </Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default SideBar;
