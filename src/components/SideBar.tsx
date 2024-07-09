import React, { useState } from "react";
import { Box, Heading, VStack, Text, Flex } from "@chakra-ui/react";
import { MdViewSidebar } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { TbTransactionDollar } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
}
interface SideBarProps {
  setAdminPage: React.Dispatch<React.SetStateAction<string>>;
}
const SideBar: React.FC<SideBarProps> = ({ setAdminPage }) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const menuItems: MenuItem[] = [
    { icon: MdViewSidebar, label: 'Overview', path: 'overview' },
    { icon: IoMdPeople, label: 'Customers', path: 'customers' },
    { icon: FaShop, label: 'Super Markets', path: 'supermarkets' },
    { icon: TbTruckDelivery, label: 'Courier Services', path: 'couriers' },
    { icon: FaCartFlatbed, label: 'Orders', path: 'orders'},
    { icon: TbTransactionDollar, label: 'Transactions', path: 'transactions' },
    { icon: RiAdvertisementFill, label: 'Advertisements', path: 'advertisements' },
    { icon: IoSettings, label: 'Settings', path: 'settings' },
    { icon: FiLogOut, label: 'Logout', path: '/' },
  ];

  const handleItemClick = (index: number, path: string) => {
    setActiveItem(index);
    setAdminPage(path);
  };

  return (
    <Box p={4}>
      <VStack
        mt={5}
        alignItems="flex-start"
        color="gray.700"
        fontWeight="500"
        spacing={3}
        shadow="lg"
        bg="gray.50"
        borderRadius="md"
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
            bg={activeItem === index ? 'white' : ''}
            borderLeft={activeItem === index ? '5px solid' : ''}
            borderColor={activeItem === index ? 'primary' : ''}
            borderRadius="md"
            _hover={{ bg: 'gray.100' }}
            onClick={() => handleItemClick(index, item.path)}
          >
            <item.icon size={20} />
            <Text ml={2} fontSize="lg">{item.label}</Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default SideBar;
