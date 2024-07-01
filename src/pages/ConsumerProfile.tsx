import { Grid, GridItem } from "@chakra-ui/react";
import ProfileDetail from "../components/Consumer/ProfileDetail";

const ConsumerProfile = () => {
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg="background">
          <ProfileDetail />
        </GridItem>
        <GridItem rowSpan={2} bg="papayawhip" />

        <GridItem colSpan={1} bg="papayawhip" />
      </Grid>
    </>
  );
};

export default ConsumerProfile;
