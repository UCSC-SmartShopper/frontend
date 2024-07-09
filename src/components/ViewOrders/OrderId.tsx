import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Divider,
  Grid,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { PiNotepad } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import Banner from "../../assets/smart-shopper-banner.svg";
import QR from "../../assets/qr_code.png";
import OrderReceipt from "./OrderReceipt";
import DriverDetailsPopup from "./DriveDetails";

interface OrderIdProps {
  status: string;
}

const OrderId = ({ status }: OrderIdProps) => {
  const {
    isOpen: isReceiptOpen,
    onOpen: onReceiptOpen,
    onClose: onReceiptClose,
  } = useDisclosure();

  const {
    isOpen: isTrackOrderOpen,
    onOpen: onTrackOrderOpen,
    onClose: onTrackOrderClose,
  } = useDisclosure();

  const {
    isOpen: isDriverOpen,
    onOpen: onDriverOpen,
    onClose: onDriverClose,
  } = useDisclosure();

  const {
    isOpen: isAddReviewOpen,
    onOpen: onAddReviewOpen,
    onClose: onAddReviewClose,
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
                onClick={onTrackOrderOpen}
                borderRadius={10}
                _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                _active={{
                  bg: "#E46C0A",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                <MdOutlineLocationOn size={22} />
                Track Order
              </Button>
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
                Receipt
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
            p={2}
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
                Supermarkets
              </Text>
              <Text textAlign="left" paddingLeft={10}>
                Keells Supermarket, Pannipitiya
                <br />
                Spar Supermarket, Maharagama
                <br />
                Arpico Supermarket, Moragahahena
              </Text>
            </Box>
          </Flex>

          <Divider my={4} />

          <Box
            p={4}
            borderWidth="1px"
            borderRadius="15"
            borderColor="gray.300"
            mb={4}
          >
            <Flex justify="space-between" alignItems="center" mb={4} color={"primary"}>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                  Driver Details
                </Text>
              </Box>
              <Box onClick={onDriverOpen} cursor="pointer">
                <RiArrowRightSLine size={27} />
              </Box>
            </Flex>
            <Flex justifyContent="space-between" flexWrap="wrap" gap={4}>
              <Flex align="center" gap={4}>
                <Image
                  src="https://via.placeholder.com/79x86"
                  borderRadius="full"
                  boxSize="76px"
                />
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    Bimsara Jayadewa
                  </Text>
                  <Text fontSize="md" fontWeight="semibold">
                    Jayadewa gedaratama service
                  </Text>
                  <Text>Driver ID: 22345667</Text>
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                gap={2}
              >
                <Text fontSize="xl" fontWeight="semibold">
                  +94 225566789
                </Text>
                <Button
                  size="md"
                  color="primary"
                  bg="white"
                  borderWidth={2}
                  borderColor="primary"
                  borderRadius={10}
                  onClick={onAddReviewOpen}
                  _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                  _active={{
                    bg: "#E46C0A",
                    color: "#FFFFFF",
                    transform: "scale(0.98)",
                    borderColor: "#E46C0A",
                  }}
                >
                  Add Reviews
                </Button>
              </Flex>
            </Flex>
          </Box>

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
      <Modal
        isOpen={isTrackOrderOpen}
        onClose={onTrackOrderClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader>Track Order</ModalHeader>
          <ModalBody>
            <Text>Track Order Popup Content</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="blue"
              mr={3}
              onClick={onTrackOrderClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Order Receipt Modal */}
      <Modal
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
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
            Order Receipt
          </ModalHeader>
          <Image src={QR} h={150} w={150} mx="auto" />
          <ModalBody>
            <OrderReceipt />
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              w="70%"
              mb={2}
              onClick={onReceiptClose}
              variant="outline"
              color="primary"
              borderColor="primary"
              border="2px"
              borderRadius="10px"
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
            >
              Download
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Driver Details Modal */}
      <Modal
        isOpen={isDriverOpen}
        onClose={onDriverClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">Driver Details</ModalHeader>
          <ModalBody>
            <DriverDetailsPopup />
          </ModalBody>
          <ModalFooter>
            <Button
              w="70%"
              mb={2}
              onClick={onDriverClose}
              variant="outline"
              color="primary"
              borderColor="primary"
              border="2px"
              borderRadius="10px"
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
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>     
       {/* Add Review Modal */}
      <Modal
        isOpen={isAddReviewOpen}
        onClose={onAddReviewClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader>Driver Details</ModalHeader>
          <ModalBody>
            {/* Add content for the new popup here */}
            <Text>Driver Details Popup Content</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="blue"
              mr={3}
              onClick={onAddReviewClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>    
      </>
  );
};
export default OrderId;
