import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

interface OrderItemRowProps {
  image: string;
  name: string;
  price: number;
  supermarket: string;
  supermarketLogo: string;
}

const OrderItem = ({
  image,
  name,
  price,
  supermarket,
  supermarketLogo,
}: OrderItemRowProps) => {
  return (
    <Flex
      p={4}
      bg="background"
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Flex alignItems="center">
        <Image src={image} alt={name} boxSize="50px" borderRadius="md" mr={4} />
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text color="gray.500">${price}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Image src={supermarketLogo} alt={supermarket} boxSize="50px" />
        <Button
          size="sm"
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
  );
};

export default OrderItem;
