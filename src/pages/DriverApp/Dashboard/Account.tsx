// import useAuthStore from "@/state-management/auth/store";
import {
  Box,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { PiCaretRightThin } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { MdStarRate ,MdContactSupport } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Account = () => {
  // const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  return (
    <>
      <Box bg="white" borderWidth={1} borderRadius="lg" p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Profile
        </Text>
        <HStack spacing={4}>
          <Image
            boxSize="70px"
            borderRadius="full"
            src="https://via.placeholder.com/100"
            alt="Profile Image"
          />
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold">
              {/* {user?.name || "John Doe"} */}
              John Doe
            </Text>
            <Text color="gray.500">
              {/* {user?.email || "john.doe@example.com"} */}
              john.doe@example.com
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Box p={4}>
        <HStack justify="space-between" px={2} py={4} onClick={()=>{navigate("/driver/account/edit")}} cursor="pointer">
          <HStack gap={5}>
            <Icon as={BiSolidUserRectangle} color="primary" />
            <Text>Account</Text>
          </HStack>
          <Icon as={PiCaretRightThin} />
        </HStack>
        <HStack justify="space-between" px={2} py={4} onClick={()=>{navigate("/driver/account/vehicle")}} cursor="pointer">
          <HStack gap={5}>
            <Icon as={FaCar} color="primary" />
            <Text>Vehicle Details</Text>
          </HStack>
          <Icon as={PiCaretRightThin} />
        </HStack>
        <HStack justify="space-between" px={2} py={4} onClick={()=>{navigate("/driver/account/deliveries")}} cursor="pointer">
          <HStack gap={5}>
            <Icon as={TbTruckDelivery} color="primary" />
            <Text>Deliveries</Text>
          </HStack>
          <Icon as={PiCaretRightThin} />
        </HStack>
        <HStack justify="space-between" px={2} py={4} onClick={()=>{navigate("/driver/account/ratings")}} cursor="pointer">
          <HStack gap={5}>
            <Icon as={MdStarRate} color="primary" />
            <Text>Ratings</Text>
          </HStack>
          <Icon as={PiCaretRightThin} />
        </HStack>
        <HStack justify="space-between" px={2} py={4} onClick={()=>{navigate("/driver/account/support")}} cursor="pointer">
          <HStack gap={5}>
            <Icon as={MdContactSupport} color="primary" />
            <Text>Support</Text>
          </HStack>
          <Icon as={PiCaretRightThin} />
        </HStack>
      </Box>
      {/* <Heading>{user?.username}</Heading>
      <button onClick={logout}>Logout</button>
      <Box p={4}>
        <Icon as={MdLogout} />
      </Box> */}
    </>
  );
};

export default Account;
