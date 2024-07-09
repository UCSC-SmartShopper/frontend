import { Box, Flex, Image, Text, Grid, Center } from "@chakra-ui/react";

const DriverDetailsPopup = () => {
  return (
    <Flex direction="column" fontWeight="md">
      <Center>
        <Image
          mb={4}
          borderRadius="12px"
          src="https://via.placeholder.com/159x160"
          alt="Driver's Photo"
        />
      </Center>
      <Box
        flex="1"
        p={4}
        mb={4}
        borderWidth="1px"
        borderRadius="15px"
        borderColor="gray.300"
      >
        <Grid templateColumns="1fr 2fr" gap={1} alignItems="center">
          <Text textAlign="left">Name</Text>
          <Text>: Kaveesha Hettige</Text>
          <Text textAlign="left">Contact Number</Text>
          <Text>: 0719944045</Text>
          <Text textAlign="left">Courier Company</Text>
          <Text>: Air Lanka</Text>
          <Text textAlign="left">Vehicle Type</Text>
          <Text>: Motor Cycle</Text>
          <Text textAlign="left">Vehicle Name</Text>
          <Text>: TVS csdc</Text>
          <Text textAlign="left">Vehicle Number</Text>
          <Text>: VQ 3344</Text>
        </Grid>
      </Box>
    </Flex>
  );
};

export default DriverDetailsPopup;
