import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";

import CreamCracker from "../assets/creamcracker.svg";

import KeelsLogo from "../assets/kells.svg";
import DeleteImage from "../assets/delete.svg";
import MapImage from "../assets/Full Map.svg";
import SparImage from "../assets/spar.svg";
import CollarImage from "../assets/collor.svg";

const CardComparison = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" h="100%">
      <GridItem h="100%">
        <Center h="100%">
          <Box
            ml={20}
            mr={5}
            p={4}
            border="2px solid"
            borderColor="primary"
            borderRadius="md"
            bg="background"
            display="flex"
            alignItems="center"
            w="100%"
          >
            <VStack align="start" pl={7}>
              <Grid gridTemplateColumns="2fr 1fr" width="100%">
                <GridItem>
                  <Heading
                    as="h4"
                    size="md"
                    mt={2}
                    color="gray"
                    fontSize="30px"
                  >
                    Your Shopping Cart
                  </Heading>
                  <br />
                  <Text color="gray">
                    <b>Not ready to checkout? Continue shopping</b>
                  </Text>
                </GridItem>
                <GridItem justifySelf="end" alignSelf="start" mt={2}>
                  <Image src={CollarImage} />
                </GridItem>
              </Grid>
              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={2} ml={4}>
                        <Image src={SparImage} mt={2} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mb={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={4} ml={4}>
                        <Image src={KeelsLogo} mt={4} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mt={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={4} ml={4}>
                        <Image src={KeelsLogo} mt={4} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mt={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Center>
                <Button
                  type="submit"
                  width="lg"
                  bg="primary"
                  color="white"
                  mt={6}
                  ml="8"
                  mb={4}
                >
                  View More
                </Button>
              </Center>

              <Box>
                <Image src={MapImage} mt={2} />
              </Box>
            </VStack>
          </Box>
        </Center>

        <Box bg="white" display="flex" alignItems="center" w="100%">
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius={15}
            ml={20}
            mr={5}
            mb={5}
            pl={2}
            pb={4}
            bg="white"
            display="flex"
            alignItems="center"
            w="100%"
          >
            <Grid
              gridTemplateColumns="1fr 1fr"
              h="100%"
              width="100%"
              ml={3}
              mt={2}
              mb={2}
              mr={2}
            >
              <GridItem h="100%">
                <Text color="gray">Total Distance</Text>
                <Text>
                  <b>Sub Total</b>
                </Text>
                <Text color="gray">Deliveries</Text>
              </GridItem>
              <GridItem>
                <Text color="gray">2 Km</Text>
                <Text>
                  {" "}
                  <b> 450 Lkr</b>
                </Text>
                <Text color="gray">Calculated at the next step</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" w="100%">
          <Button
            width={200}
            type="submit"
            borderWidth="1px"
            borderRadius={15}
            borderColor="primary"
            bg="white"
            color="primary"
            shadow="md"
            mr="6"
            mb={10}
            mt={6}
          >
            Back
          </Button>
        </Box>
      </GridItem>

      <GridItem h="100%">
        <Center h="100%">
          <Box
            ml={5}
            mr={20}
            mt={0}
            p={4}
            border="2px solid"
            borderColor="primary"
            borderRadius="md"
            bg="lightOrange"
            display="flex"
            alignItems="center"
            w="100%"
          >
            <VStack align="start" pl={7}>
              <Grid gridTemplateColumns="2fr 1fr" width="100%">
                <GridItem>
                  <Heading as="h4" size="md" mt={2} fontSize="30px">
                    Optimized Shopping Cart
                  </Heading>
                  <br />
                  <Text>
                    <b>Not ready to checkout? Continue shopping</b>
                  </Text>
                </GridItem>
                <GridItem justifySelf="end" alignSelf="start" mt={2}>
                  <Image src={CollarImage} />
                </GridItem>
              </Grid>
              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={2} ml={4}>
                        <Image src={SparImage} mt={2} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mb={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={4} ml={4}>
                        <Image src={KeelsLogo} mt={4} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mt={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

              <Box>
                <Grid gridTemplateColumns="2fr 5fr 1fr">
                  <GridItem>
                    <HStack mt={5} spacing={0}>
                      <Image src={CreamCracker} mt={0} />
                    </HStack>
                  </GridItem>

                  <GridItem>
                    <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                      <b>Cream cracker 500g</b>
                    </Text>
                    <Grid gridTemplateColumns="1fr 1fr">
                      <GridItem mt={4} ml={4}>
                        <Image src={KeelsLogo} mt={4} />
                        <Text>quantity : 1</Text>
                        <Text fontSize="20px">
                          <b>: 150 LKR</b>
                        </Text>
                      </GridItem>
                      <GridItem mt={8}>
                        <Text>Distance : 2 Km</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem mt={40} ml={10}>
                    <Image src={DeleteImage} mt={0} />
                  </GridItem>
                </Grid>
              </Box>

              <Center>
                <Button
                  type="submit"
                  width="lg"
                  bg="primary"
                  color="white"
                  mt={6}
                  ml="8"
                  mb={4}
                >
                  View More
                </Button>
              </Center>

              <Box>
                <Image src={MapImage} mt={2} />
              </Box>
            </VStack>
          </Box>
        </Center>

        <Box bg="white" display="flex" alignItems="center" w="100%">
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius={15}
            bg="lightOrange"
            ml={5}
            mr={20}
            mb={5}
            pl={2}
            pb={4}
            display="flex"
            alignItems="center"
            w="100%"
          >
            <Grid
              gridTemplateColumns="1fr 1fr"
              h="100%"
              width="100%"
              ml={3}
              mt={2}
              mb={2}
              mr={2}
            >
              <GridItem h="100%">
                <Text color="gray">Total Distance</Text>
                <Text>
                  <b>Sub Total</b>
                </Text>
                <Text color="gray">Deliveries</Text>
              </GridItem>
              <GridItem>
                <Text color="gray">2 Km</Text>
                <Text>
                  {" "}
                  <b> 450 Lkr</b>
                </Text>
                <Text color="gray">Calculated at the next step</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
        <Box display="flex" w="100%">
          <Button
            width={200}
            type="submit"
            borderWidth="1px"
            borderRadius={15}
            borderColor="primary"
            bg="primary"
            color="white"
            shadow="md"
            ml="6"
            mb={40}
            mt={6}
          >
            Continue
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CardComparison;
