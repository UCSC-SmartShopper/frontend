import {
    Box,
    Text,
    Image,
    Flex,
    Button,
    Divider,
    Grid,
    useDisclosure,
  } from "@chakra-ui/react";
  import { PiNotepad } from "react-icons/pi";
  import { MdOutlineLocationOn } from "react-icons/md";
  import { RiArrowRightSLine } from "react-icons/ri";
//   import Banner from "../../assets/smart-shopper-banner.svg";
//   import QR from "../../assets/qr_code.png";
//   import OrderReceipt from "./OrderReceipt";
//   import DriverDetailsPopup from "./DriveDetails";
//   import AddDriverReview from "./AddDriverReview";
//   import TrackOrder from "./TrackOrder";
  
  interface OrderIdProps {
    status: string;
  }
  
  const OrderId = ({ status }: OrderIdProps) => {
    const {
      isOpen: isReceiptOpen,
      onOpen: onReceiptOpen,
      onClose: onReceiptClose,
    } = useDisclosure();
  
    
  
    return (
      <>
        <Box width="100%" mb={10}>
          <Box
            bg="white"
            boxShadow="md"
            borderRadius="24"
            pt={7}
            pb={10}
            pl={20}
            pr={20}
            width="100%"
            maxWidth="1200px"
            mx="auto"
          >
            <Flex justify="space-between" align="center" flexWrap="wrap" mb={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Order ID: 223345678
              </Text>
              <Flex align="center" gap={4}>
                <Button
                  size="md"
                  color="primary"
                  bg="white"
                  borderWidth={2}
                  borderColor="primary"
                  onClick={onReceiptOpen}
                  borderRadius={10}
                  _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                  _active={{
                    bg: "#E46C0A",
                    color: "#FFFFFF",
                    transform: "scale(0.98)",
                    borderColor: "#E46C0A",
                  }}
                >
                  <PiNotepad size={21} />
                  Print
                </Button>
              </Flex>
            </Flex>
            <Box
              bg={
                status === "completed"
                  ? "#5BFF89"
                  : status === "ready"
                  ? "yellow.200"
                  : status === "active"
                  ? "blue.200"
                  : "red.200"
              }
              borderRadius="full"
              textAlign="center"
              p={1}
              maxWidth="200px"
            >
              <Text fontSize="md" fontWeight="bold">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Text>
            </Box>
  
            <Divider my={4} />
  
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={4}>
              <Box
                flex="1"
                p={4}
                borderWidth="1px"
                borderRadius="15"
                borderColor="gray.300"
              >
                <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                  Order Details
                </Text>
                <Grid templateColumns="1fr 2fr" gap={2}>
                  <Text>Order Placed on</Text>
                  <Text>: 12.04.2024</Text>
                  <Text>Payment method</Text>
                  <Text>: Credit/Debit Card</Text>
                  <Text>Order Total</Text>
                  <Text>: 2547.00 LKR</Text>
                  <Text>Delivery Cost</Text>
                  <Text>: 300.00 LKR</Text>
                </Grid>
              </Box>
              <Box
                flex="1"
                p={4}
                borderWidth="1px"
                borderRadius="15"
                borderColor="gray.300"
              >
                <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                  Driver Details
                </Text>
                <Grid templateColumns="1fr 2fr" gap={2}>
                  <Text>Driver name</Text>
                  <Text>: 12.04.2024</Text>
                  <Text>Contact Number</Text>
                  <Text>: Credit/Debit Card</Text>
                  <Text>Vehicle Type</Text>
                  <Text>: 2547.00 LKR</Text>
                  <Text>Vehicle Number</Text>
                  <Text>: 300.00 LKR</Text>
                </Grid>
              </Box>
            </Flex>
  
            <Divider my={4} />
  
            
  
            <Box p={4} borderWidth="1px" borderRadius="15" borderColor="gray.300">
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Shipping Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={2}>
                <Text>Shipping Address</Text>
                <Text>: Kaluthara, Western, Srilanka, 129987</Text>
                <Text>Contact Number</Text>
                <Text>: +993345887</Text>
                <Text>Name</Text>
                <Text>: Chathusika Ayantha</Text>
              </Grid>
            </Box>
          </Box>
        </Box>
  
        {/* Track Order Modal */}
        {/* <Modal
          isOpen={isTrackOrderOpen}
          onClose={onTrackOrderClose}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="24px" bg={"white"}>
            <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
              Order Tracking
            </ModalHeader>
            <ModalBody p={0}>
              <TrackOrder />
            </ModalBody>
            <ModalFooter>
              <Flex width="100%" justifyContent="center">
                <Button
                  width="70%"
                  bg="primary"
                  color="white"
                  _hover={{ bg: "orange.600" }}
                  _active={{ bg: "orange.700" }}
                  borderRadius="12px"
                  onClick={onTrackOrderClose}
                >
                  Done
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
  
        {/* Order Receipt Modal */}
        {/* <Modal
          isOpen={isReceiptOpen}
          onClose={onReceiptClose}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="15px">
            <Center>
              <Image src={Banner} h={53} w={170} />
            </Center>
            <Divider mb={1} />
            <ModalHeader textAlign="center" fontWeight="bold" fontSize="30">
              Order Receipt
            </ModalHeader>
            <Image src={QR} h={150} w={150} mx="auto" />
            <ModalBody>
              <OrderReceipt />
            </ModalBody>
            <ModalFooter gap={3}>
              <Flex width="100%" justifyContent="center">
                <Button
                  w="70%"
                  mb={2}
                  onClick={onReceiptClose}
                  variant="outline"
                  borderColor="primary"
                  border="2px"
                  borderRadius="10px"
                  fontSize="15px"
                  fontWeight="bold"
                  color="white"
                  bg="primary"
                  _hover={{ bg: "orange.600" }}
                  _active={{ bg: "orange.700" }}
                >
                  Download
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
        {/* Driver Details Modal */}
        {/* <Modal
          isOpen={isDriverOpen}
          onClose={onDriverClose}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="15px" >
            <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
              Driver Details
            </ModalHeader>
            <ModalBody>
              <DriverDetailsPopup />
            </ModalBody>
            <ModalFooter>
              <Flex width="100%" justifyContent="center" mt={-3}>
                <Button
                  width="60%"
                  bg="white"
                  color="primary"
                  borderColor={"primary"}
                  borderWidth={1}
                  _hover={{ bg: "primary", color: "white" }}
                  _active={{ bg: "primary", color: "white"}}
                  borderRadius="12px"
                  onClick={onDriverClose}
                >
                  Cancel
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
        {/* Add Driver Review Modal */}
        {/* <Modal
          isOpen={isAddReviewOpen}
          onClose={onAddReviewClose}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="15px">
            <ModalHeader
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              color="orange.500"
            >
              Add Product Review
            </ModalHeader>
            <ModalBody>
              <AddDriverReview driverImage="https://via.placeholder.com/50" driverName="Bimsara Anjana Jayadewa" courierCompany="Uber pvt limited." driverID={123456} driverNumber="+94719944045"/>
            </ModalBody>
            <ModalFooter>
              <Flex width="100%" justifyContent="center" columnGap={5} >
                <Button
                  variant="outline"
                  colorScheme="orange"
                  px={5}
                  mr={3}
                  onClick={onAddReviewClose}
                >
                  Cancel
                </Button>
                <Button colorScheme="orange" px={5} onClick={onAddReviewClose}>
                  Publish
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </>
    );
  };
  export default OrderId;
  