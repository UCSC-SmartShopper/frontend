import {
  Box,
  Flex,
  Text,
  Image,
  Center,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

const OrderTrackingPopup = () => {
  return (
    <Flex
        mt={5}
      direction="column"
      alignItems="center"
      padding={5}
      bg="white"
      borderRadius="24px"
      boxShadow="0px 0px 58px 4px rgba(0, 0, 0, 0.25)"
    //   maxWidth="400px"
      margin="0"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Order Tracking
      </Text>
      <Box
        width="100%"
        mb={4}
        p={4}
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="15px"
      >
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Driver Tracking
        </Text>
        <VStack align="start" spacing={4}>
          {[
            {
              status: "Order Placed",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
            {
              status: "Picked from Supermarket 1",
              location: "Keels Super, Matara",
              time: "11:45 PM",
            },
            {
              status: "Picked from Supermarket 2",
              location: "Spar Supermarket, Galle",
              time: "11:45 PM",
            },
            {
              status: "Way to home",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
            {
              status: "Delivered",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
          ].map((item, index) => (
            <HStack key={index} spacing={4} align="start">
              <Center
                width="40px"
                height="40px"
                bg="orange.500"
                borderRadius="full"
                color="white"
                fontWeight="bold"
              >
                <Image src="https://via.placeholder.com/40" alt="status-icon" />
              </Center>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{item.status}</Text>
                <Text>{item.location}</Text>
              </VStack>
              <Text marginLeft="auto">{item.time}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      <Box
        width="100%"
        mb={4}
        p={4}
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="15px"
      >
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Supermarket Order Packing
        </Text>
        <VStack align="start" spacing={4}>
          {[
            {
              name: "Keels Super",
              location: "Battaramulla Rd, Galle",
              status: "Packed",
              statusColor: "orange.500",
            },
            {
              name: "Spar Super Market",
              location: "Battaramulla Rd, Galle",
              status: "Packed",
              statusColor: "orange.500",
            },
            {
              name: "Arpico Supermarket",
              location: "Battaramulla Rd, Galle",
              status: "Not Packed",
              statusColor: "red.500",
            },
          ].map((item, index) => (
            <HStack
              key={index}
              width="100%"
              p={2}
              borderWidth="1px"
              borderColor={item.statusColor}
              borderRadius="12px"
              align="center"
              justify="space-between"
            >
              <HStack spacing={4} align="center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt={`${item.name}-logo`}
                  boxSize="40px"
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.location}</Text>
                </VStack>
              </HStack>
              <Text color={item.statusColor} fontWeight="bold">
                {item.status}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default OrderTrackingPopup;
