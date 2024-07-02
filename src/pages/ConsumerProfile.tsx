import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import ProfileDetail from "../components/ConsumerProfile/ProfileDetail";
import ShippingAddress from "../components/ConsumerProfile/ShippingAddress";
import Activities from "../components/ConsumerProfile/ActivityRow";

const ConsumerProfile = () => {
  return (
    <Box bg="background" h="100%" pt={7} pb={10} pl={20} pr={20}>
      <Box bg={"white"} pt={2} pl={5} pr={5} borderRadius={10}>
        <Grid
          // h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="65% 35%"
          gap={1}
        >
          <GridItem rowSpan={1} colSpan={1} p={3}>
            <ProfileDetail />
          </GridItem>
          <GridItem rowSpan={2} p={3}>
            <Box
              pb={5}
              borderWidth={1}
              borderRadius="10px"
              borderColor="gray.300"
              // h="100%"
            >
              <Text color="primary" size="xl" fontWeight="semibold" fontSize={20} mt={7} ml={7} mb={5}>
                Your Activities
              </Text>
              <VStack gap={0} pl={4} pr={4}>
                <Activities
                  description="Submitted report Submitted report Submitted report Submitted report"
                  date="2024-06-30"
                  time="17:00"
                />
                <Activities
                  description="Submitted report"
                  date="2024-06-30"
                  time="17:00"
                />
                <Activities
                  description="Submitted report"
                  date="2024-06-30"
                  time="17:00"
                />
                <Activities
                  description="Submitted report"
                  date="2024-06-30"
                  time="17:00"
                />
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={1} p={3}>
            <ShippingAddress />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ConsumerProfile;
