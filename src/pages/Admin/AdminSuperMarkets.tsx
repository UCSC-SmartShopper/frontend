import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { FaCartFlatbed, FaLocationDot } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import { MdFeedback, MdNavigateNext } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
// import LineChart from "../../components/Charts/LineChart";

const AdminSuperMarkets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack gap={"8vh"} fontWeight="bold" my="5vh">
      <Flex w="full" gap={5}>
        {/*
          Supermarket Earnings Card
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="30%" borderRadius={15}>
          <Heading size={"lg"} my={4}>
            Super Market Earnings
          </Heading>
        </Box>

        {/*
          Supermarket Earnings Card
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="70%" borderRadius={15}>
          <Box p={5}>
            <Heading as="h3" size="lg">
              Customers
            </Heading>

            <Center>
              {/* <LineChart  /> */}
            </Center>
          </Box>
        </Box>
      </Flex>

      <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Flex justifyContent="space-between">
          <Heading as="h3" size="lg">
            Super Market Details
          </Heading>
          <Flex>
            <Box px={2}>
              <Select placeholder="Select option">
                <option value="option1">August</option>
                <option value="option2">September</option>
                <option value="option3" selected>
                  October
                </option>
              </Select>
            </Box>
            {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}
          </Flex>
        </Flex>

        <TableContainer
          width={{ base: "100%", lg: "90%" }}
          ml={{ base: "0%", lg: "5%" }}
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Manager Name</Th>
                <Th>Contact Number</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <HStack>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="Product Image"
                      boxSize="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      mr={4}
                    />
                    <Text>Keells</Text>
                  </HStack>
                </Td>
                <Td>235/1,Kanampitiya Road,Galle</Td>
                <Td>Kaveesha Hettige</Td>
                <Td>07523458901</Td>
                <Td>
                  <Button bg="primary" size="sm" onClick={onOpen}>
                    View More
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <HStack>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="Product Image"
                      boxSize="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      mr={4}
                    />
                    <Text>Keells</Text>
                  </HStack>
                </Td>
                <Td>235/1,Kanampitiya Road,Galle</Td>
                <Td>Kaveesha Hettige</Td>
                <Td>07523458901</Td>
                <Td>
                  <Button bg="primary" size="sm">
                    View More
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>
                  <HStack>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="Product Image"
                      boxSize="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      mr={4}
                    />
                    <Text>Keells</Text>
                  </HStack>
                </Td>
                <Td>235/1,Kanampitiya Road,Galle</Td>
                <Td>Kaveesha Hettige</Td>
                <Td>07523458901</Td>

                <Td>
                  <Button bg="primary" size="sm">
                    View More
                  </Button>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box borderBottomWidth={"1px"} p={2}>
              <VStack>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="50%"
                  mr={4}
                />
                <Text fontSize={"xl"}>Keells</Text>
                <Flex>
                  <Icon as={FaLocationDot} boxSize={5} color={"primary"} />
                  <Text fontSize={"sm"} ml={2}>
                    85/3,HighLevel Road,Kirulapone,Colombo 6
                  </Text>
                </Flex>

                <Box>
                  <HStack
                    fontSize={{ base: "sm", md: "md" }}
                    spacing={2}
                    color="yellow.400"
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <IoStarSharp key={i} />
                      ))}
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Flex>
                <Box>
                  <VStack>
                    <Box mb={8}>
                      <Icon as={SiCashapp} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={8}>
                      <Icon as={GrUserWorker} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={7}>
                      <Icon as={FaCartFlatbed} boxSize={5} color={"primary"} />
                    </Box>
                  </VStack>
                </Box>

                <Box ml={1}>
                  <VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Earning
                      </Text>
                      <Text fontSize={"sm"}>Rs 134 000</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Manager
                      </Text>
                      <Text fontSize={"sm"}>Kaveesha Hettige</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Order Count
                      </Text>
                      <Text fontSize={"sm"}>80</Text>
                    </VStack>
                  </VStack>
                </Box>

                <Box ml={10}>
                  <VStack>
                    <Box mb={8}>
                      <Icon as={FaUser} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={8}>
                      <Icon as={MdFeedback} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={7}>
                      <Icon as={IoStarSharp} boxSize={5} color={"primary"} />
                    </Box>
                  </VStack>
                </Box>

                <Box ml={1}>
                  <VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Customers Shopped
                      </Text>
                      <Text fontSize={"sm"}>56</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Feedbacks
                      </Text>
                      <HStack>
                        <Text fontSize={"sm"}>23</Text>
                        <Button
                          bg="white"
                          color="primary"
                          border="2px"
                          borderColor="primary"
                          size="xs"
                          ml={5}
                        >
                          View
                          <Icon as={MdNavigateNext} />
                        </Button>
                      </HStack>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Rating
                      </Text>
                      <Text fontSize={"sm"}>5/5</Text>
                    </VStack>
                  </VStack>
                </Box>
              </Flex>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default AdminSuperMarkets;
