import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const ShippingAddress = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Box
      w="100%"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="md" color="primary" pl={6}>
          Shipping Address
        </Heading>
        <Flex>
          {!isEditable && (
            <Button
              w={190}
              mr={4}
              mt={10}
              onClick={toggleEdit}
              variant="outline"
              color="white"
              borderColor="primary"
              border="2px"
              borderRadius="10px"
              fontSize="15px"
              fontWeight="bold"
              bg="primary"
              _hover={{ bg: "white", color: "primary" }}
              _active={{
                bg: "white",
                color: "primary",
                transform: "scale(0.98)",
                borderColor: "primary",
              }}
            >
              Edit Shipping Address
            </Button>
          )}
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Box p={5} textColor="black.100">
          <Text fontSize="18px" fontWeight="semibold">
            Address Line 1: John
          </Text>
          <Text fontSize="18px" fontWeight="semibold" mt={4}>
            Address Line 2: john.doe@example.com
          </Text>
          <Text fontSize="18px" fontWeight="semibold" mt={4}>
            District: 123-456-7890
          </Text>
          <Text fontSize="18px" fontWeight="semibold" mt={4}>
            City: United States
          </Text>
          <Text fontSize="18px" fontWeight="semibold" mt={4}>
            Phone Number: 123-456-7890
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShippingAddress;
