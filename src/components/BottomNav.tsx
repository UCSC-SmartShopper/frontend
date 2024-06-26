import {
  Box,
  Center,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  position,
} from "@chakra-ui/react";

import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const BottomNav = () => {
  const [active, setActive] = useState(0);

  const iconsList = [
    {
      icon: <IoHomeOutline fontSize={20} />,
      text: "Home",
      positionX: "0",
    },
    { icon: <CiSearch fontSize={20} />, text: "Search" },
    { icon: <AiOutlineShoppingCart fontSize={20} />, text: "Cart" },
    { icon: <CiUser fontSize={20} />, text: "Account" },
  ];

  return (
    <HStack
      h="8vh"
      w="100%"
      position="fixed"
      bottom={0}
      justifyContent="space-around"
      boxShadow={"0px -1px 5px 0px rgba(0,0,0,0.1)"}
      className="bg-white max-h-[4.4rem] px-6 rounded-t-xl"
    >
      {iconsList.map((icon, index) => (
        <VStack
          justifyContent="center"
          gap={0}
          key={index}
          h="full"
          className=" cursor-pointer relative"
          onClick={() => setActive(index)}
        >
          <Box
            className={`${
              active === index
                ? "-translate-y-10 opacity-100"
                : "translate-y-2 opacity-0"
            } duration-700 bg-primary border-4 border-transparent border-gray-900 w-16 h-16 absolute   rounded-full -z-10 `}
          ></Box>
          <Box
            className={`duration-500 ${
              active === index ? " -translate-y-10" : ""
            }`}
          >
            {icon.icon}
          </Box>
          <Text
            className={` absolute ${
              active === index
                ? "translate-y-1 duration-700 opacity-100"
                : " opacity-0 translate-y-10"
            }`}
          >
            {icon.text}
          </Text>
        </VStack>
      ))}
    </HStack>
  );
};

export default BottomNav;
