// ProfileDetail.tsx
import React from 'react';
import { Box, Button, Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

const ProfileDetail: React.FC = () => {
  return (
    <Box
      bg="white"
      borderRadius="10px"
      boxShadow="md"
      overflow="hidden"
    >
      <Box bg="orange.500" position="relative" p={4}>
        <Image
          src="https://via.placeholder.com/100"
          alt="Profile"
          borderRadius="full"
          boxSize="100px"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          border="4px solid white"
        />
      </Box>
      <Flex p={4} pt={16} align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">Jessica Sympson</Text>
        <Button colorScheme="orange" borderRadius="md">Edit Profile</Button>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Username:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Jessica</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Email:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">bimsarajayadewa@gmail.com</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Phone number:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">0719944045</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Country:</Text>
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
