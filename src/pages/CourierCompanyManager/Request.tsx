import {
  Avatar,
  HStack,
  Text,
  Container,
  Heading,
  Box,
  Button,
  VStack,
  
} from "@chakra-ui/react";

import MiddleContainer from "../../components/Containers/MiddleContainer";

const Request = () => {
  // Create an array with 5 elements to render the same container 5 times
  const deliveryPersonnel = new Array(4).fill({
    name: "Bimsara Jayadewa",
    vehicle: "TVS ntorq 125",
    type: "Motor Cycle",
    avatar: "https://via.placeholder.com/150", // Replace with actual image URL if available
  });

  return (
    <MiddleContainer>
      <Heading as="h4" size="md" mt={7} pl={7}>
        Delivery Personal Requests
      </Heading>
      <Container maxW="1330px" mt={4}>
        <VStack spacing={6}>
          {deliveryPersonnel.map((person, index) => (
            <Box
              key={index}
              p={4}
              boxShadow="md"
              borderRadius="md"
              bg="white"
              display="flex"
              alignItems="center"
              w="100%"
            >
              <Avatar src={person.avatar} size="lg" />
              <Box ml={4} flex="1">
                <Text fontSize="lg" fontWeight="bold">
                  {person.name}
                </Text>
                <Text fontSize="sm">Vehicle: {person.vehicle}</Text>
                <Text fontSize="sm">Type: {person.type}</Text>
              </Box>
              <Button colorScheme="orange" variant="outline">
                View
              </Button>
            </Box>
          ))}
        </VStack>
      </Container>
    </MiddleContainer>
  );
};

export default Request;
