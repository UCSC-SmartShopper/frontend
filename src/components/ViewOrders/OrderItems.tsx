import { Box, Text, Flex } from "@chakra-ui/react";
import OrderItemRow from "./OrderItem";

const OrderItems = () => {
  const items = [
    {
      image: "https://via.placeholder.com/50",
      name: "Munchee Super Cream Cracker",
      price: 145,
      supermarket: "Keells",
      supermarketLogo: "https://via.placeholder.com/50",
    },
    {
      image: "https://via.placeholder.com/50",
      name: "Gradient Graphic T-shirt",
      price: 145,
      supermarket: "Spar",
      supermarketLogo: "https://via.placeholder.com/50",
    },
  ];

  return (
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
      <Text fontSize="xl" fontWeight="bold" mb={4} color="primary">
        Order Items
      </Text>
      {items.map((item, index) => (
        <OrderItemRow
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          supermarket={item.supermarket}
          supermarketLogo={item.supermarketLogo}
        />
      ))}
      <Flex justifyContent="flex-end" mt={4}>
        <Text>
          Delivery Fee:{" "}
          <Text as="span" fontWeight="bold">
            200.00 LKR
          </Text>
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" mt={4}>
        <Text>
          Total:{" "}
          <Text as="span" fontWeight="bold">
            24 500.00 LKR
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default OrderItems;
