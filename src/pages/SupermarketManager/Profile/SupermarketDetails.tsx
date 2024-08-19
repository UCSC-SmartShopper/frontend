import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
// import {  } from 'flowbite-react';
import React from "react";

interface SupermarketDetailsProps {}

const SupermarketDetails = () => {
  return (
    <>
      <Box
        mt={5}
        h={"fit-content"}
        border={"1px"}
        borderColor={"gray.200"}
        borderRadius={10}
        width={"full"}
      >
        <Heading fontSize="2xl" p={5}>
          Supermarket Details
        </Heading>

        <Box px={5} w={"full"}>
          <Grid templateColumns="1fr 2fr" gap={1}>
            <Text>Supermarket Name</Text>
            <Text>: Nethmi Kaveesha</Text>
            <Text>Contact Number</Text>
            <Text>: 071122244</Text>
            <Text>Address</Text>
            <Text>: Bike</Text>
          </Grid>
        </Box>
        <Box p={5} w={"full"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58726988.13620551!2d1.814277899999986!3d6.902205499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e1!3m2!1sen!2slk!4v1724074546478!5m2!1sen!2slk"
            width="600"
            height="200"
            loading="lazy"
          ></iframe>
        </Box>
        <Alert status="warning" m={5} w={'fit-content'} borderRadius={5}>
          <AlertIcon />
          You can't change the supermarket details. If you want to change the
          details please contact the admin
          
        </Alert>
      </Box>
    </>
  );
};

export default SupermarketDetails;
