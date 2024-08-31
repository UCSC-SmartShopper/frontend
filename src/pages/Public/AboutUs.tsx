import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
  VStack,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import OrderFood from "../../assets/AboutUs/Order food-pana.svg";
import GroceryShopping from "../../assets/AboutUs/Grocery shopping-amico (1).svg";
import ActionButton from "@/components/Buttons/ActionButton";

import Keels from "../../assets/supermarket-icons/Keels.svg";
import Spar from "../../assets/supermarket-icons/Spar.svg";
import Arpico from "../../assets/supermarket-icons/Arpico.svg";
import Cargills from "../../assets/supermarket-icons/cargills.svg";
import Glomark from "../../assets/supermarket-icons/glomark.svg";
import Laughs from "../../assets/supermarket-icons/laughs.svg";
import { PhoneIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";

interface StatProps {
  number: string;
  label: string;
}

const Stat = ({ number, label }: StatProps) => (
  <Box textAlign="center">
    <Text fontSize="3xl" fontWeight="bold">
      {number}
    </Text>
    <Text>{label}</Text>
  </Box>
);

const AboutPage = () => {
  return (
    <>
      <Container maxW="container.xl" py={9} px="5vw">
        <Grid templateColumns="50% 50%" gap={2}>
          <GridItem w="100%">
            <Box mt="13vh">
              <Text fontSize="5xl" fontWeight="semibold" mb={4}>
                ABOUT US
              </Text>
              <Text mb="1vh" fontSize="lg" maxW="container.md" color="gray.600">
                Revolutionizing Shopping for a Smarter Tomorrow
              </Text>
              <Text fontSize="lg" maxW="container.md">
                Smart List Best Price Fast Deliveries
              </Text>
              <ActionButton className="mt-[5vh]" size="lg" url="/">
                Smart Shopping
              </ActionButton>
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Image src={OrderFood} alt="Order food" h="70vh" w="80vh" />
          </GridItem>
        </Grid>

        <Grid
          h="150px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={2}
          mb={20}
        >
          <GridItem
            rowSpan={1}
            colSpan={2}
            color="lightcoral"
            fontSize="18"
            pt="6vh"
            h="5px"
          >
            Problem Trying
          </GridItem>
          <GridItem
            colSpan={1}
            color="black"
            fontWeight="semibold"
            fontSize="22"
          >
            Difficulties in Multi-Store Price Comparisons and Shopping
            Efficiency
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} color="gray.500">
            The issue involves the inability to easily compare prices and
            discounts across multiple stores, time-consuming shopping from
            multiple supermarkets, and a lack of personalized shopping
            recommendations.
          </GridItem>
        </Grid>

        <SimpleGrid columns={{ base: 2, md: 4 }} gap={5} mb="10vh">
          <Stat number="15K" label="Happy Customers" />
          <Stat number="150K" label="Monthly Visitors" />
          <Stat number="15" label="Major Supermarkets" />
          <Stat number="100+" label="Categories" />
        </SimpleGrid>

        <VStack>
          <Text fontSize="3xl" fontWeight="semibold" mb={4}>
            Major Supermarkets Are Here
          </Text>
          <Text fontSize="md" fontWeight="regular" mb={4}>
            These are the brands that we have partnerships with.
          </Text>
        </VStack>
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={4}
          justifyContent="center"
          mb={20}
        >
          <Image src={Cargills} alt="Cargills" h={20} w={44} />
          <Image src={Arpico} alt="Arpico" h={20} w={44} />
          <Image src={Keels} alt="Keels" h={20} />
          <Image src={Spar} alt="Spar" h={20} w={44} />
          <Image src={Glomark} alt="Glomark" h={20} w={44} />
          <Image src={Laughs} alt="Laughs" h={20} w={44} />
        </Grid>

        <Grid templateColumns="55% 45%" gap={6}>
          <GridItem w="100%">
            <Image
              src={GroceryShopping}
              alt="Shopping illustration"
              h="60vh"
              w="60v"
            />
          </GridItem>
          <GridItem w="100%">
            <Box flex="1" p={10} pt={20}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                SHOP WITH US
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" mb={4}>
                Now Let’s Shop Smarter
              </Text>
              <Text fontSize="lg" mb={6}>
                Our platform simplifies shopping by supporting prices and
                discounts information across stores, offering a streamlined,
                real-time, and flexible shopping experience.
              </Text>
              <ActionButton className="mt-[5vh]" size="lg" url="/">
                Smart Shopper
              </ActionButton>
            </Box>
          </GridItem>
        </Grid>

        <div className="bg-gray-100 py-5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">
              Any question or remarks? Just write us an e-mail!
            </p>
            <Box className="bg-orange-200 rounded-lg p-8 flex items-center justify-between">
              <div>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  Contact Information
                </Text>
                <Flex direction="column" gap={2}>
                  <Flex align="center" gap={2}>
                    <PhoneIcon />
                    <Text>+1012 3456 789</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <EmailIcon />
                    <Text>smartshopper@gmail.com</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Icon as={InfoIcon} />
                    <Text>
                      132 Dartmouth Street Boston,
                      <br /> Massachusetts 02156 United States
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <Box>
                <Button
                  colorScheme="orange"
                  size="lg"
                  className="mt-4 md:mt-0"
                  rightIcon={<EmailIcon />}
                >
                  Send E-Mail
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
