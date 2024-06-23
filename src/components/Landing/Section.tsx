import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  heading: string;
  rightSide?: React.ReactNode;
}

const Section = ({ children, title, heading, rightSide }: Props) => {
  return (
    <Stack w="full" px="14vw" my="5vh">
      <HStack>
        <Box w={5} h={45} bg="primary" borderRadius="md"></Box>
        <Text fontSize="lg" fontWeight={600} color="primary">
          {heading}
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text fontSize="4xl" fontWeight={600}>
          {title}
        </Text>
        {rightSide}
      </HStack>
      {children}
    </Stack>
  );
};

export default Section;