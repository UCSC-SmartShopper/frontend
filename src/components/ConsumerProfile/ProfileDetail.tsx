import { Box, Flex, Icon, Text, Grid, HStack } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const ProfileDetail = () => {
  return (
    <Flex justifyContent="center">
      <Box w="100%" h="35%" bg="white" borderRadius="15" borderWidth={1} borderColor="black.300" borderStyle="md" boxShadow="lg">
        <Grid templateRows="1fr auto 1fr" h="100%" >
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
            </HStack>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Box p={5} textColor="black.100">
              <Text fontSize="18px" fontWeight="semibold">
                Username: John
              </Text>

              <Text fontSize="18px" fontWeight="semibold" mt={4}>
                Email: john.doe@example.com
              </Text>

              <Text fontSize="18px" fontWeight="semibold" mt={4}>
                Phone Number: 123-456-7890
              </Text>

              <Text fontSize="18px" fontWeight="semibold" mt={4}>
                Country: United States
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProfileDetail;
