import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
  HStack,
  Badge,
  Stack,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Icon,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Textarea,
  RadioGroup,
  Radio,
  ModalHeader,
} from "@chakra-ui/react";
import { EditIcon, InfoIcon, SearchIcon } from "@chakra-ui/icons";
import { FaCcPaypal, FaCreditCard, FaLocationDot } from "react-icons/fa6";
import deliveryLoc from "../../src/assets/deliveryToLocation.png";
import delHome from "../../src/assets/delHome.png";
import promo from "../../src/assets/promo.png";
import { SiCashapp } from "react-icons/si";
import { MdNavigateNext, MdOutlineCardGiftcard, MdOutlinePassword } from "react-icons/md";

const Checkout = () => {
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

  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  return (
    <ChakraProvider>
      <Box maxWidth="1200px" margin="0 auto" padding="4">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Button variant="link">&lt; Back to store</Button>
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={4}>
          {/* Left Column */}
          <Box flex="2">
            <VStack align="stretch" spacing={4}>
              {/* Delivery Details */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md">Delivery details</Heading>
                </HStack>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between">
                    <Box>
                      <Text fontWeight="bold">Bandaragama Junction</Text>
                      <Text>66 Pandura Rd, Bandaragama</Text>
                    </Box>
                    <Button
                      variant="link"
                      size="sm"
                      rightIcon={<EditIcon />}
                      onClick={onOpen1}
                    >
                      Edit
                    </Button>
                  </HStack>
                  <HStack justify="space-between">
                    <Box>
                      <Text fontWeight="bold">Meet at my door</Text>
                      <Text>Add delivery instructions</Text>
                    </Box>
                    <Button
                      variant="link"
                      size="sm"
                      rightIcon={<EditIcon />}
                      onClick={onOpen2}
                    >
                      Edit
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Delivery Options */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Delivery options</Heading>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <Box
                    border="1px"
                    borderRadius="md"
                    padding="4"
                    borderColor="gray.200"
                  >
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Priority</Text>
                        <Badge colorScheme="green">Faster</Badge>
                        <Text>10-25 min • Delivered directly to you</Text>
                      </Box>
                      <Text fontWeight="bold">+LKR 129.00</Text>
                    </HStack>
                  </Box>
                  <Box
                    border="1px"
                    borderRadius="md"
                    padding="4"
                    borderColor="black"
                  >
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Standard</Text>
                        <Text>15-30 min</Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    border="1px"
                    borderRadius="md"
                    padding="4"
                    borderColor="gray.200"
                  >
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Schedule</Text>
                        <Text>Select a time</Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>

              {/* Payment */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Payment</Heading>
                <Divider my={2} />
                <HStack justify="space-between">
                  <Text>Add payment method</Text>
                  <Button variant="link" size="sm" rightIcon={<EditIcon />}>
                    Edit
                  </Button>
                </HStack>
              </Box>

              {/* Continue to payment */}
              <Button
                colorScheme="blackAlpha"
                size="lg"
                width="full"
                onClick={onOpen3}
              >
                Continue to payment
              </Button>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box flex="1">
            <VStack align="stretch" spacing={4}>
              {/* Order Summary */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md">Pizza Hut</Heading>
                  <IconButton
                    aria-label="Restaurant Info"
                    icon={<InfoIcon />}
                    size="sm"
                    variant="ghost"
                  />
                </HStack>
                <Text>66 Panadura Rd, Panadura</Text>
                <Box my={2}>
                  <Image
                    borderRadius="md"
                    src="https://via.placeholder.com/150"
                    alt="Order Item"
                  />
                  <Text mt={2}>
                    Save LKR 138.00 on this order with Uber One
                  </Text>
                  <Button size="sm" mt={2}>
                    Get yours now
                  </Button>
                </Box>
                <Button
                  colorScheme="blackAlpha"
                  size="lg"
                  width="full"
                  onClick={onOpen3}
                >
                  Continue to payment
                </Button>
              </Box>

              {/* Promotion */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Promotion</Heading>
                <Divider my={2} />
                <Button variant="link" onClick={onOpen4}>
                  Add promo code
                </Button>
              </Box>

              {/* Order Total */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Order total</Heading>
                <Divider my={2} />
                <Stack spacing={1}>
                  <HStack justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>LKR 1,680.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Delivery Fee</Text>
                    <Text>LKR 54.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Taxes & Other Fees</Text>
                    <Text>LKR 386.40</Text>
                  </HStack>
                  <Divider my={2} />
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Total</Text>
                    <Text fontWeight="bold">LKR 2,120.40</Text>
                  </HStack>
                </Stack>
              </Box>

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
                  <Input variant="filled" placeholder="Search for an address" />
                </InputGroup>
              </Box>

              <Heading fontSize={"lg"} my={2}>
                Saved Addresses
              </Heading>
              <Flex bg="gray.100" shadow={"sm"} px={2} py={2} borderRadius={5}>
                <HStack>
                  <Icon as={FaLocationDot} boxSize={5} />
                  <Text>Kiribathgoda</Text>
                </HStack>
                <Spacer />
                <Box>
                  <Icon as={EditIcon} boxSize={5} />
                </Box>
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
                Drop off options
              </Heading>
              <Text fontSize={"xs"}>Delivery to Kiribathgoda</Text>

              <Box
                p={2}
                border="2px"
                borderColor={"black"}
                borderRadius={10}
                my={2}
              >
                <Flex alignItems={"center"}>
                  <Image src={delHome} boxSize={9} />
                  <Text mx={"2%"} fontWeight={"500"} fontSize="lg">
                    Hand it to me
                  </Text>
                </Flex>

                <RadioGroup colorScheme="blackAlpha" defaultValue="door">
                  <Stack direction="column" fontWeight="500">
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet at my door</Text>
                      <Radio value="door" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet outside</Text>
                      <Radio value="outside" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet in the lobby</Text>
                      <Radio value="lobby" />
                    </Flex>
                  </Stack>
                </RadioGroup>
              </Box>

              <Flex
                alignItems={"center"}
                p={2}
                py={3}
                boxShadow={"xs"}
                borderRadius={5}
              >
                <Image src={deliveryLoc} boxSize={9} />
                <Text mx={"2%"} fontWeight={"500"} fontSize="lg">
                  Leave at location
                </Text>
              </Flex>

              <Text fontWeight={"500"} fontSize={"sm"} my={3}>
                Instructions for Delivery Person
              </Text>

              <Textarea
                // value={value}
                //onChange={handleInputChange}
                placeholder="Example : please knock instead of ringing the doorbell"
                size="sm"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button bg="#ff7708" mr={3} color="white">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* /////////modal2/////// */}

      {/* ////////modal3///////// */}

      <Modal blockScrollOnMount={false} isOpen={isOpen3} onClose={onClose3}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Add Payment Method</ModalHeader>
          <ModalBody>
            <Flex direction={"column"}>
              <Flex
                boxShadow={"xs"}
                p={2}
                my={3}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"}>
                  <Icon as={FaCcPaypal} boxSize={8} />
                  <Text mx={5}>Paypal</Text>
                </Flex>

                <Icon as={MdNavigateNext} boxSize={8} />
              </Flex>

              <Flex
                boxShadow={"xs"}
                p={2}
                my={3}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"}>
                  <Icon as={SiCashapp} boxSize={8} />
                  <Text mx={5}>Cash</Text>
                </Flex>

                <Icon as={MdNavigateNext} boxSize={8} />
              </Flex>

              <Flex
                boxShadow={"xs"}
                p={2}
                my={3}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"}>
                  <Icon as={MdOutlineCardGiftcard} boxSize={8} />
                  <Text mx={5}>Gift Card</Text>
                </Flex>

                <Icon as={MdNavigateNext} boxSize={8} />
              </Flex>

              <Flex
                boxShadow={"xs"}
                p={2}
                my={3}
                justifyContent={"space-between"}
              >
                <Flex alignItems={"center"}>
                  <Icon as={FaCreditCard} boxSize={8} />
                  <Text mx={5}>Credit or debit card</Text>
                </Flex>

                <Icon as={MdNavigateNext} boxSize={8} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* //////modal3//////// */}

      {/* ///////modal4/////// */}

      <Modal blockScrollOnMount={false} isOpen={isOpen4} onClose={onClose4}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={2}>
                Promotions
              </Heading>

              <Flex mb={3} gap='2'>
                <InputGroup>
                  <InputLeftAddon>
                    <Icon as={MdOutlinePassword} boxSize={5} />
                  </InputLeftAddon>
                  <Input variant="filled" placeholder="Enter Promo Code" />
                </InputGroup>
                
                <Button>Apply</Button>
              </Flex>

              <Text fontSize={'lg'} fontWeight={'500'}>Your available promos</Text>
              <Text fontSize={'sm'}>Limit one per day</Text>

              <Flex direction={'column'} boxShadow={'xs'}  borderRadius={5} p={2} my={3}>

                <Flex my={2} alignItems={'center'}>
                  <Text fontSize={'3xl'} fontWeight={'500'}>LKR 300 off</Text>
                  <Spacer/>
                  <Image src={promo} boxSize={20}/>
                </Flex>

                <Text maxWidth={'80%'}>
                  Use by 11:59pm on 31/12/2021
                  Use at Keels
                  1500 LKR minimum orderUse by 11:59pm on 31/12/2021
                  Use at Keels
                  1500 LKR minimum order
                </Text>

                <Flex gap={2} mt={5} mb={2}>
                  <Button>Select</Button>
                  <Button>Details</Button>
                </Flex>

              </Flex>
              
              <Button bg='black' color='white'>
                Done
              </Button>

            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>
      {/* ////////modal4////// */}
    </ChakraProvider>
  );
};

export default Checkout;
