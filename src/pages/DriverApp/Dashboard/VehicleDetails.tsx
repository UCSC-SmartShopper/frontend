import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const navigate = useNavigate();
  return (
    <VStack h="23vh" px="8vw" pt="3vh" pb="93vh" borderWidth={2}>
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          onClick={() => navigate("/driver/account")}
          cursor="pointer"
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Vehicle Details
        </Text>
      </HStack>
    </VStack>
  );
};

export default VehicleDetails;
