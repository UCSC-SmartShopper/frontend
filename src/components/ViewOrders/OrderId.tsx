import { Box, Text, Image, Flex, Button, Divider } from "@chakra-ui/react";
import { PiNotepad } from "react-icons/pi";

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
            <Button size="md" color="primary" variant="outline">
              Track Order
            </Button>
            <Button size="md" color="primary" variant="outline" >
              <PiNotepad />
              Receipt
            </Button>
          </Flex>
        </Flex>
        <Box
          bg={
            status === "completed"
              ? "#19FC14"
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
          <Text fontSize="lg" fontWeight="bold">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Text>
        </Box>

        <Divider my={4} />

        {/* Order Details and Supermarkets */}
        <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={4}>
          <Box
            flex="1"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
          >
            <Text fontSize="lg" fontWeight="bold" color="primary.400" mb={2}>
              Order Details
            </Text>
            <Text>
              Order Placed on: 12.04.2024
              <br />
              Payment method: Credit/Debit Card
              <br />
              Order Total: 2547.00 LKR
              <br />
              Delivery Cost: 300.00 LKR
            </Text>
          </Box>
          <Box
            flex="1"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
          >
            <Text fontSize="lg" fontWeight="bold" color="primary.400" mb={2}>
              Supermarkets
            </Text>
            <Text>
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
          borderRadius="lg"
          borderColor="gray.300"
          mb={4}
        >
          <Text fontSize="lg" fontWeight="bold" color="primary.400" mb={2}>
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
                <Text>Jayadewa gedaratama service</Text>
                <Text>Driver ID: 22345667</Text>
              </Box>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-end"
              gap={2}
            >
              <Text fontSize="xl" fontWeight="bold">
                +94 225566789
              </Text>
              <Button size="md" colorScheme="primary" variant="outline">
                Add Reviews
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Shipping Details */}
        <Box p={4} borderWidth="1px" borderRadius="lg" borderColor="gray.300">
          <Text fontSize="lg" fontWeight="bold" color="primary.400" mb={2}>
            Shipping Details
          </Text>
          <Text>
            Shipping Address: Kaluthara, Western, Srilanka, 129987
            <br />
            Contact Number: +993345887
            <br />
            Name: Chathusika Ayantha
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderId;
