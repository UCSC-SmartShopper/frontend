import delHome from "@/assets/delHome.png";
import pickupImg from "@/assets/Grocery shopping-rafiki.svg";
import CheckoutAccordion from "@/components/CheckoutAccordion";
import useConsumer from "@/hooks/useConsumer";
import { getPrice, getSuperMarketIdList } from "@/lib/utils";
import useCartCheckout, {
  CheckoutRequest,
} from "@/services/Cart/useCartCheckout";
import useCartItems from "@/services/Cart/useCartItems";
import useDeliveryCost from "@/services/Location/useDeliveryCost";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import useAuthStore from "@/state-management/auth/store";
import { EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import useCreateUserPreference from "@/services/UserPreference/useCreateUserPreference";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const user = useAuthStore((state) => state.user);
  const consumer = useConsumer(user?.consumerId || 0);
  const address = consumer.data?.addresses[0];
  const { data: cartItems } = useCartItems();
  const navigate = useNavigate();

  const cartCheckout = useCartCheckout();

  const supermarketIdList = getSuperMarketIdList(cartItems?.results);
  const supermarketLocationList = useSupermarket(supermarketIdList).map(
    (supermarket) => supermarket.data?.location || ""
  );

  const [checkoutRequest, setCheckoutRequest] = useState<CheckoutRequest>({
    consumerId: user?.consumerId || -1,
    shippingLocation: address?.location || "Bandaragama",
    shippingAddress: address?.address || "66 Pandura Rd, Bandaragama",
    shippingMethod: "Home Delivery",
  });

  useEffect(() => {
    setCheckoutRequest({
      shippingMethod: "Home Delivery",
      shippingLocation: address?.location || "Bandaragama",
      shippingAddress: address?.address || "66 Pandura Rd, Bandaragama",
      consumerId: user?.consumerId || 0,
    });
  }, [address, cartItems, user]);

  const deliveryCost = useDeliveryCost(
    supermarketLocationList,
    address?.location || ""
  );

  const deliveryFee =
    checkoutRequest?.shippingMethod === "Home Delivery"
      ? deliveryCost.data || 250
      : 0;
  const createPreference=useCreateUserPreference();

  const handleCheckout = () => {
    cartCheckout.mutate(checkoutRequest);
    cart?.results.map((item) => {
      createPreference.mutate({
        userId: user?.id||0,
        preferenceType: "Purchases",
        referenceId: item.productId,
      });
      console.log(item.productId);
    });

  };
  if (cartCheckout.isSuccess) {
    navigate("/orders/" + cartCheckout.data);
  }

  // --------------------------------------- Calculate Subtotal ---------------------------------------
  let subTotal =
    cartItems?.results.reduce(
      (acc, item) => acc + (item.supermarketItem?.price || 1) * item.quantity,
      0
    ) || 0;

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  return (
    <>
      <Box maxWidth="1200px" margin="0 auto" padding="4">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Button variant="link" size="xxl" color={"black"}>
            <IoIosArrowBack onClick={() => window.history.back()} />
          </Button>
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={4}>
          {/* Left Column */}
          <Box flex="2">
            <VStack align="stretch" spacing={4}>
              {/* Shipping  Method */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md" color="primary">
                    Shipping Method
                  </Heading>
                </HStack>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between">
                    <Box>
                      <HStack>
                        <FaRegUser />
                        <VStack ml={3} alignItems={"unset"} spacing={0}>
                          <Text fontWeight="bold">
                            {checkoutRequest.shippingMethod}
                          </Text>
                          <Text>Change Shipping Method</Text>
                        </VStack>
                      </HStack>
                    </Box>
                    <Button
                      variant="outline"
                      colorScheme="white"
                      color="primary"
                      borderColor="primary"
                      border="1px"
                      borderRadius="12px"
                      fontSize="15px"
                      fontWeight="bold"
                      bg="white"
                      _hover={{ bg: "primary", color: "white" }}
                      _active={{
                        bg: "primary",
                        color: "white",
                        transform: "scale(0.98)",
                        borderColor: "primary",
                      }}
                      size="sm"
                      rightIcon={<EditIcon />}
                      onClick={onOpen2}
                    >
                      Edit
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Delivery Details */}
              {checkoutRequest.shippingMethod === "Home Delivery" && (
                <Box border="1px" borderRadius="md" padding="4">
                  <Heading size="md" color="primary">
                    Delivery details
                  </Heading>
                  <Divider my={2} />
                  <HStack justify="space-between">
                    <Box>
                      <HStack>
                        <MdOutlineLocationOn />
                        <VStack ml={3} alignItems={"unset"} spacing={0}>
                          <Text textAlign={"right"}>
                            {checkoutRequest.shippingAddress}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                    <Button
                      size="sm"
                      rightIcon={<EditIcon />}
                      variant="outline"
                      colorScheme="white"
                      color="primary"
                      borderColor="primary"
                      border="1px"
                      borderRadius="12px"
                      fontSize="15px"
                      fontWeight="bold"
                      bg="white"
                      _hover={{ bg: "primary", color: "white" }}
                      _active={{
                        bg: "primary",
                        color: "white",
                        transform: "scale(0.98)",
                        borderColor: "primary",
                      }}
                      onClick={onOpen1}
                    >
                      Edit
                    </Button>
                  </HStack>
                </Box>
              )}

              {/* ---------------------------------- Continue to payment ---------------------------------- */}
              <Button
                bg="secondary"
                color="white"
                size="lg"
                width="full"
                _hover={{ bg: "primary", color: "white" }}
                onClick={handleCheckout}
              >
                Continue to payment
              </Button>

              {/* Note */}
              <Text fontSize="sm">
                If you're not around when the delivery person arrives, they'll
                leave your order at the door. By placing your order, you agree
                to take full responsibility for it once it's delivered. Orders
                containing alcohol or other restricted items may not be eligible
                for leave at door and will be returned to the store if you are
                not available.
              </Text>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box flex="1">
            <VStack align="stretch" spacing={4}>
              {/* Order Summary */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md" color="primary" mb={5}>
                  Supermarket List
                </Heading>
                <CheckoutAccordion />
              </Box>

              {/* Order Total */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md" color="primary">
                  Order total
                </Heading>
                <Divider my={2} />
                <Stack spacing={1}>
                  <HStack justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>LKR {getPrice(subTotal)}</Text>
                  </HStack>
                  {checkoutRequest.shippingMethod === "Home Delivery" && (
                    <HStack justify="space-between">
                      <Text>Delivery Fee</Text>
                      <Text>LKR {getPrice(deliveryFee)}</Text>
                    </HStack>
                  )}
                  <Divider my={2} />
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Total</Text>
                    <Text fontWeight="bold">
                      LKR {getPrice(subTotal + deliveryFee)}
                    </Text>
                  </HStack>
                </Stack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
      {/* /////////modal1 */}

      <Modal blockScrollOnMount={false} isOpen={isOpen1} onClose={onClose1}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} my={6}>
              <Heading fontSize={"lg"} my={2}>
                Addresses
              </Heading>

              <Box mb={3}>
                <InputGroup>
                  <InputLeftAddon>
                    <Icon as={SearchIcon} boxSize={5} />
                  </InputLeftAddon>
                  <Input
                    variant="filled"
                    placeholder="Search for an address"
                    value={checkoutRequest.shippingAddress}
                    onChange={(e) =>
                      setCheckoutRequest({
                        ...checkoutRequest,
                        shippingAddress: e.target.value,
                      })
                    }
                  />
                </InputGroup>
              </Box>

              <Heading fontSize={"lg"} my={2}>
                Saved Addresses
              </Heading>
              <Flex
                bg="gray.100"
                shadow={"sm"}
                px={2}
                py={2}
                borderRadius={5}
                cursor={"pointer"}
                onClick={() =>
                  setCheckoutRequest({
                    ...checkoutRequest,
                    shippingAddress: "66 Pandura Rd, Bandaragama",
                  })
                }
              >
                <HStack>
                  <Icon as={FaLocationDot} boxSize={5} />
                  <Text>Bandaragama</Text>
                </HStack>
                <Spacer />
                {/* <Box>
                  <Icon as={EditIcon} boxSize={5} />
                </Box> */}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* /////////modal1/////// */}

      {/* /////////modal2 */}

      <Modal blockScrollOnMount={false} isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={2}>
                Shipping Method
              </Heading>

              <Box
                p={2}
                border="2px"
                borderColor={"black"}
                borderRadius={10}
                my={2}
              >
                <RadioGroup
                  colorScheme="blackAlpha"
                  defaultValue="door"
                  onChange={(value) => {
                    setCheckoutRequest({
                      ...checkoutRequest,
                      shippingMethod: value,
                    });
                  }}
                  value={checkoutRequest.shippingMethod}
                >
                  <Stack direction="column" fontWeight="500">
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                      cursor={"pointer"}
                      onClick={() => {
                        setCheckoutRequest({
                          ...checkoutRequest,
                          shippingMethod: "Home Delivery",
                        });
                      }}
                    >
                      <HStack>
                        <Image src={delHome} boxSize={9} />
                        <Text>Home Delivery</Text>
                      </HStack>
                      <Radio value="Home Delivery" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                      cursor={"pointer"}
                      onClick={() => {
                        setCheckoutRequest({
                          ...checkoutRequest,
                          shippingMethod: "Store Pickup",
                        });
                      }}
                    >
                      <HStack>
                        <Image src={pickupImg} boxSize={9} />
                        <Text>Store Pickup</Text>
                      </HStack>
                      <Radio value="Store Pickup" />
                    </Flex>
                  </Stack>
                </RadioGroup>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* /////////modal2/////// */}
    </>
  );
};

export default Checkout;
