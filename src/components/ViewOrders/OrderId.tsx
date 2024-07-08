import { Box, Text, Image, Flex, Button, Divider, Grid } from "@chakra-ui/react";
import { PiNotepad } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";

interface OrderIdProps {
  status: string;
}

const OrderId = ({ status }: OrderIdProps) => {
  return (
    <Box width="100%">
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

        {/* Driver Details */}
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="15"
          borderColor="gray.300"
          mb={4}
        >
          <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
            Driver Details
          </Text>
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

        {/* Shipping Details */}
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
  );
};

export default OrderId;
