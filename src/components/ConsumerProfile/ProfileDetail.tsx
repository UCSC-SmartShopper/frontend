// ProfileDetail.tsx
import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileDetail: React.FC = () => {
  return (
    <Box bg="white" borderRadius="10px" boxShadow="md" overflow="hidden" pb={4}>
      <Box bg="primary" position="relative" p={4} h="70">
        <HStack>
          <Image
            src="https://via.placeholder.com/100"
            alt="Profile"
            borderRadius="full"
            boxSize="100px"
            position="absolute"
            top="100%"
            left="12%"
            transform="translate(-50%, -50%)"
            border="4px solid white"
          />
        </HStack>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4} mr={4}>
      <Text fontSize="xl" fontWeight="bold" ml="40">
            Jessica Sympson
          </Text>
        <Button
          w="auto"
          mr={4}
          mt={4}
          // onClick={toggleEdit}
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
          Edit Profile
        </Button>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10} ml={4}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Username:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Jessica</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Email:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">bimsarajayadewa@gmail.com</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Phone number:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">0719944045</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Country:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Sri Lanka</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default ProfileDetail;
