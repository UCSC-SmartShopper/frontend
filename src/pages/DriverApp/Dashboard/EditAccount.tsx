import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const EditAccount = () => {
  const navigate = useNavigate();
  return (
    <VStack minH="100vh" px="8vw" pt="3vh" pb="10vh" gap="4vh">
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          shadow="xl"
          borderWidth={1}
          onClick={() => navigate("/driver/account")}
          cursor="pointer"
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Profile
        </Text>
      </HStack>
      <Box borderWidth={1} p={4} background="white" w="full" borderRadius="10">
        Edit Account
      </Box>
    </VStack>
  );
};

export default EditAccount;
