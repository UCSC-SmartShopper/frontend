import { Box, Button, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

const ShippingAddress = ({
  addressLine1= "123 Main St",
    addressLine2=  "Apt 4B",
    district= "Downtown",
    city= "Metropolis",
    phoneNumber= "123-456-7890",
}) => {
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
      p={5}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text color="primary" size="xl" fontWeight="semibold" fontSize={20} pl={5}>
          Shipping Address
        </Text>
        <Flex>
          {!isEditable && (
            <Button
              w={190}
              mr={4}
              mt={4}
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
      <Grid templateColumns="auto 1fr" gap={4} pl={10}>
        <GridItem>
          <Text fontSize="18px" fontWeight="semibold">
            Address Line 1:
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px">{addressLine1}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px" fontWeight="semibold">
            Address Line 2:
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px">{addressLine2}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px" fontWeight="semibold">
            District:
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px">{district}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px" fontWeight="semibold">
            City:
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px">{city}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px" fontWeight="semibold">
            Phone Number:
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="18px">{phoneNumber}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ShippingAddress;