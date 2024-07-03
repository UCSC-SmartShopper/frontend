import {
  Box,
  Flex,
  Icon,
  Text,
  Grid,
  HStack,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const ProfileDetail = ({
  Username = "123 Main St",
  Email = "Apt 4B",
  PhoneNumber = "Downtown",
  Country = "Metropolis",
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };
  return (
    <Flex justifyContent="center">
      <Box
        w="100%"
        h="35%"
        bg="white"
        borderRadius="15"
        borderWidth={1}
        borderColor="black.300"
        borderStyle="md"
        boxShadow="lg"
      >
        <Grid templateRows="1fr auto 1fr" h="100%">
          <Box
            bg="primary"
            position="relative"
            h="auto"
            w="100%"
            borderTopRadius="15"
          ></Box>
          <Flex justifyContent="center" alignItems="center">
            <HStack>
              <Icon
                as={CgProfile}
                boxSize={120}
                position="absolute"
                left="15%"
                bg="white"
                borderRadius="full"
                boxShadow="lg"
              />
              <Box fontSize="20px" fontWeight="bold">
                John Doe
              </Box>
              <Flex justifyContent="space-between" alignItems="center" mb={4}>
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
            </HStack>
          </Flex>
          <Grid templateColumns="auto 1fr" gap={4} pl={10}>
            <GridItem>
              <Text fontSize="18px" fontWeight="semibold">
                Username:
              </Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px">{Username}</Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px" fontWeight="semibold">
                Email:
              </Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px">{Email}</Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px" fontWeight="semibold">
                Phone Number:
              </Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px">{PhoneNumber}</Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px" fontWeight="semibold">
                Country:
              </Text>
            </GridItem>
            <GridItem>
              <Text fontSize="18px">{Country}</Text>
            </GridItem>
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProfileDetail;
