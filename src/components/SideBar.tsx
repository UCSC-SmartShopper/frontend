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
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
}

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: MdViewSidebar, label: 'Overview', path: '/admin-Overview' },
    { icon: IoMdPeople, label: 'Customers', path: '/admin-Customers' },
    { icon: FaShop, label: 'Super Markets', path: '/admin-SuperMarkets' },
    { icon: TbTruckDelivery, label: 'Courier Services', path: '/admin-CourierServices' },
    { icon: FaCartFlatbed, label: 'Orders', path: '/admin-Orders' },
    { icon: TbTransactionDollar, label: 'Transactions', path: '/admin-Transactions' },
    { icon: RiAdvertisementFill, label: 'Advertisements', path: '/admin-Advertisements' },
    { icon: IoSettings, label: 'Settings', path: '/admin-Settings' },
    { icon: FiLogOut, label: 'Logout', path: '/' },
  ];

  const getIndexFromPath = (path: string): number => {
    return menuItems.findIndex(item => item.path === path);
  };

  const [activeItem, setActiveItem] = useState<number>(() => {
    const storedIndex = localStorage.getItem('activeItem');
    return storedIndex !== null ? parseInt(storedIndex) : 0;
  });

  useEffect(() => {
    const currentIndex = getIndexFromPath(location.pathname);
    if (currentIndex !== -1) {
      setActiveItem(currentIndex);
      localStorage.setItem('activeItem', currentIndex.toString());
    }
  }, [location.pathname]);

  const handleItemClick = (index: number, path: string) => {
    setActiveItem(index);
    localStorage.setItem('activeItem', index.toString());
    navigate(path);
  };

  return (
    <Box p={4} pos='fixed' top='10vh'>
      <VStack
        mt={5}
        alignItems="flex-start"
        color="gray.700"
        fontWeight="500"
        spacing={3}
        p={4}
        pl={0}
        pr={0}
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
