import {Box,Heading,VStack,Text,Flex} from "@chakra-ui/react"
import { MdViewSidebar } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { TbTransactionDollar } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import React,{ useState } from "react";

const SideBar = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

  const menuItems = [
    { icon: MdViewSidebar, label: 'Overview' },
    { icon: IoMdPeople, label: 'Customers' },
    { icon: FaShop, label: 'Super Markets' },
    { icon: TbTruckDelivery, label: 'Courier Services' },
    { icon: FaCartFlatbed, label: 'Orders' },
    { icon: TbTransactionDollar, label: 'Transactions' },
    { icon: RiAdvertisementFill, label: 'Advertisements' },
    { icon: IoSettings, label: 'Settings' },
    { icon: FiLogOut, label: 'Logout' },
  ];

  return (
    <Box p={4}>
      <Heading fontSize="2xl" color="primary" mt={2}>
        My Account
      </Heading>
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
      borderRadius="md">
        
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
           _hover={{ bg: '' }}
           onClick={() => setActiveItem(index)}
         >
           <item.icon size={20} />
           <Text ml={2} fontSize='lg'>{item.label}</Text>
         </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default SideBar;

