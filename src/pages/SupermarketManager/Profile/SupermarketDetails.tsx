import {
    Alert,
    AlertDescription,
    AlertIcon,
    Box,
    Grid,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import useSupermarket from "@/hooks/useSupermarket";
  
  interface SupermarketDetailsProps {
    id: any;
  }
  
  const SupermarketDetails = ({ id }: SupermarketDetailsProps) => {
    const { data: supermarket } = useSupermarket(id);
  
    return (
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius={10}
        width="full"
        overflow="hidden"
        h="fit-content"
      >
        <Heading fontSize="2xl" p={5}>
          Supermarket Details
        </Heading>
  
        <Box px={5} w="full">
          <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={2}>
            <Text>Supermarket Name</Text>
            <Text>: {supermarket?.name}</Text>
            <Text>Contact Number</Text>
            <Text>: {supermarket?.contactNo}</Text>
            <Text>Address</Text>
            <Text>: {supermarket?.address}</Text>
          </Grid>
        </Box>
  
        <Box p={5} w="full">
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58726988.13620551!2d1.814277899999986!3d6.902205499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e1!3m2!1sen!2slk!4v1724074546478!5m2!1sen!2slk"
            width="100%"
            height="200"
            loading="lazy"
            border="none"
            borderRadius={5}
          />
        </Box>
  
        <Alert status="warning" m={5} w="fit-content" borderRadius={5}>
          <AlertIcon />
          You can't change the supermarket details. If you want to change the
          details, please contact the admin.
        </Alert>
      </Box>
    );
  };
  
  export default SupermarketDetails;
  