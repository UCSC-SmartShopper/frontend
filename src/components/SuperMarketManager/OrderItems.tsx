import {
    Box,
    Text,
    Flex,
    Image,
    Button,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "@chakra-ui/react";
//   import AddProductReview from "./AddProductReview";
  
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
          <Flex
            p={4}
            key={index}
            bg="background"
            borderRadius={10}
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          >
            <Flex alignItems="center">
              <Image
                src={item.image}
                alt={item.name}
                boxSize="50px"
                borderRadius="md"
                mr={4}
              />
              <Box>
                <Text fontWeight="bold">{item.name}</Text>
                <Text color="gray.500">${item.price}</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Text>{item.supermarket}</Text>
              
            </Flex>
          </Flex>
        ))}
        <Flex justifyContent="flex-end">
            <Button colorScheme="primary" size="sm">
                Complete Order
            </Button>
        </Flex>
        {/* Add Product Review Modal */}
       
          
      </Box>
    );
  };
  
  export default OrderItems;
  