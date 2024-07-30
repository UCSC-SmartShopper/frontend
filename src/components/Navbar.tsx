import useAuthStore from "@/state-management/auth/store";
import useCartStore from "@/state-management/cart/store";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Banner from "../assets/smart-shopper-banner.svg";
import ActionButton from "./Buttons/ActionButton";

interface NavItem {
  text: string;
  path: string;
}

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();

  const navigate = useNavigate();
  const location = useLocation();

  const hideNavbarPaths = ["/driver"];
  const showTopNav = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const consumerNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Supermarkets", path: "/supermarkets" },
    { text: "About Us", path: "/about" },
  ];

  const courierNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Request", path: "/requests" },
    { text: "Deliveries", path: "/deliveries" },
  ];

  const navItems =
    user?.role === "Courier Company" ? courierNavItems : consumerNavItems;

  return (
    <>
      {showTopNav && (
        <Flex
          w={"100%"}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"10vh"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justifyContent="space-between"
          pos={user?.role === "admin" ? "sticky" : "relative"}
          top={0}
          zIndex={10}
        >
          <HStack gap={5}>
            <Image src={Banner} />

            {navItems.map((item) => (
              <Link to={item.path} key={item.text}>
                {" "}
                {/* Use Link component for navigation */}
                <Text fontSize="lg" fontWeight="bold">
                  {item.text}
                </Text>
              </Link>
            ))}
          </HStack>

          {user ? (
            <HStack marginX={10} gap={5}>
              <Menu>
                <MenuButton>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    boxSize={10}
                    cursor="pointer"
                  />
                </MenuButton>
                <MenuList
                  bg="orange.300"
                  color={"transparent"}
                  sx={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  borderWidth={0}
                >
                  {/* <MenuItem
                    _hover={{ bg: "orange.500" }}
                    _focus={{ bg: "orange.500" }}
                    onClick={() => navigate("/overview")}
                  >
                    Overview
                  </MenuItem> */}
                  <MenuItem
                    bg="orange.300"
                    color="white"
                    _hover={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _focus={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _active={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    onClick={() => navigate("/myOrders")}
                  >
                    Orders
                  </MenuItem>
                  {/* <MenuItem
                  bg="orange.400"
                  color="white"
                  sx={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                    _hover={{ bg: "orange.500" }}
                    _focus={{ bg: "orange.500" }}
                    onClick={() => navigate("/feedback")}
                  >
                    Feedback
                  </MenuItem> */}
                  <MenuItem
                    bg="orange.300"
                    color="white"
                    _hover={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _focus={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _active={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    bg="orange.300"
                    color="white"
                    _hover={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _focus={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    _active={{ borderRadius: 15, borderWidth: 2, borderColor: "orange.500" }}
                    onClick={logout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              <Text fontSize="lg" fontWeight="bold">
                {user.name}
              </Text>
              <Box pos={"relative"}>
                <Icon
                  as={FaCartShopping}
                  w={8}
                  h={8}
                  color="black"
                  onClick={() => navigate("/cart")}
                />
                <Text
                  as="div"
                  fontSize={"xs"}
                  px={2}
                  py={1}
                  color="white"
                  fontWeight={"bold"}
                  pos={"absolute"}
                  bottom={0}
                  right={-5}
                  bg="primary"
                  rounded={"full"}
                >
                  {items.length}
                </Text>
              </Box>
            </HStack>
          ) : (
            <HStack paddingX={0}>
              {location.pathname !== "/login" ? (
                <ActionButton url="/login">Login</ActionButton>
              ) : null}
              {location.pathname !== "/signup" ? (
                <ActionButton url="/signup">Register</ActionButton>
              ) : null}
            </HStack>
          )}
        </Flex>
      )}
    </>
  );
};

export default Navbar;
