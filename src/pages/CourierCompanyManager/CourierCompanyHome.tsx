import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaClipboardList, FaTruck, FaUser } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { DriverRequest } from "@/services/types";
import useNonVerifiedDrivers from "@/services/Driver/useNonVerifiedDrivers";

const CourierCompanyHome = () => {
  const acceptApiClient = new APIClient<{ id: number }>(
    "/accept_driver_request"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [selectedPerson, setSelectedPerson] = useState<DriverRequest>();
  const queryClient = useQueryClient();

  const driverRequests = useNonVerifiedDrivers().data?.results;

  const filteredRequests = driverRequests?.filter((request) =>
    [request.name, request.vehicleType, request.vehicleName]
      .some(field => field.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const handleViewClick = (person: DriverRequest) => {
    setSelectedPerson(person);
    onOpen();
  };

  const { mutate: acceptDriverRequest } = useMutation({
    mutationFn: () =>
      acceptApiClient.create({ id: selectedPerson?.id || -1 }).then(() => {
        onClose();
        queryClient.invalidateQueries({ queryKey: ["driver_requests"] });
      }),
  });

  const monthlyDeliveries = Array(12).fill(0);
  const options = {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };
  const chartData = [
    {
      name: "Deliveries",
      data: monthlyDeliveries,
    },
  ];

  return (
    <Box bg="gray.100">
      <Grid>
        <HStack h="90vh">
          <GridItem>
            <VStack w="22vw" py={4} gap="3vh">
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                w="90%"
              >
                <Stat>
                  <StatLabel>Current Delivery Personals</StatLabel>
                  <StatNumber>35</StatNumber>
                  <StatHelpText>8.5% Up from yesterday</StatHelpText>
                  <Icon as={FaUser} boxSize={8} color="purple.500" />
                </Stat>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                mt="7%"
                w="90%"
              >
                <Stat>
                  <StatLabel>Requests</StatLabel>
                  <StatNumber>{driverRequests?.length}</StatNumber>
                  <StatHelpText>1.3% Up from past week</StatHelpText>
                  <Icon as={FaClipboardList} boxSize={8} color="yellow.500" />
                </Stat>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                mt="7%"
                w="90%"
              >
                <Stat>
                  <StatLabel>Deliveries Today</StatLabel>
                  <StatNumber>90</StatNumber>
                  <StatHelpText>4.3% Down from yesterday</StatHelpText>
                  <Icon as={FaTruck} boxSize={8} color="green.500" />
                </Stat>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Stack
              w="76vw"
              bg="white"
              py={4}
              pl={4}
              h="80vh"
              borderWidth="1px"
              borderRadius={15}
            >
              <HStack>
                <Text fontSize="xl" fontWeight="bold" mb={4} mr="50px">
                  Delivery Personal Requests
                </Text>
                {/* --------------- Search Bar --------------- */}
                <SearchBar
                  width="50%"
                  value={searchQuery}
                  setValue={setSearchQuery}
                />
              </HStack>
              <Container maxW="1330px" mb={4} maxH="70vH" overflowY="auto">
                <VStack spacing={6}>
                  {filteredRequests?.map((person, index) => (
                    <Center
                      key={index}
                      p={2}
                      boxShadow="md"
                      borderRadius={15}
                      display="flex"
                      w="100%"
                      borderWidth={1}
                    >
                      <Avatar src={person.profilePic} size="lg" />
                      <Box ml={4} flex="1">
                        <Text fontSize="lg" fontWeight="bold">
                          {person.name}
                        </Text>
                        <Text fontSize="sm">Vehicle: {person.vehicleName}</Text>
                        <Text fontSize="sm">Type: {person.vehicleType}</Text>
                      </Box>
                      <Button
                        colorScheme="orange"
                        variant="outline"
                        onClick={() => handleViewClick(person)}
                      >
                        View
                      </Button>
                    </Center>
                  ))}
                </VStack>
              </Container>

              {selectedPerson && (
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent maxW="40vw">
                    <ModalHeader>Driver Request</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Box
                        display="flex"
                        alignItems="center"
                        mb={4}
                        borderWidth={1}
                        borderRadius={15}
                        boxShadow={"md"}
                        p={4}
                      >
                        <Avatar
                          src={selectedPerson.profilePic}
                          size="xl"
                          mr={4}
                        />
                        <Box>
                          <Text fontSize="lg" fontWeight="bold" mb={5}>
                            Driver Personal Details
                          </Text>
                          <Grid templateColumns="150px 1fr" gap={2}>
                            <Text>Name:</Text>
                            <Text>{selectedPerson.name}</Text>

                            <Text>NIC Number:</Text>
                            <Text>{selectedPerson.nic}</Text>

                            <Text>Contact No:</Text>
                            <Text>{selectedPerson.contactNo}</Text>
                          </Grid>
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        mb={4}
                        borderWidth={1}
                        borderRadius={15}
                        boxShadow={"md"}
                        p={4}
                      >
                        <Box flex="1">
                          <Text fontSize="lg" fontWeight="bold">
                            Vehicle Details
                          </Text>
                          <Grid templateColumns="150px 1fr" gap={2}>
                            <Text>Vehicle Type:</Text>
                            <Text>{selectedPerson.vehicleType}</Text>

                            <Text>Vehicle Name:</Text>
                            <Text>{selectedPerson.vehicleName}</Text>

                            <Text>Vehicle Number:</Text>
                            <Text>{selectedPerson.vehicleNumber}</Text>

                            <Text>Vehicle Color:</Text>
                            <Box
                              w={20}
                              h={8}
                              bg={selectedPerson.vehicleColor}
                            ></Box>
                          </Grid>
                        </Box>
                        <Image
                          mt={4}
                          src={selectedPerson.vehicleImage}
                          boxSize="150px"
                          ml={2}
                        />
                      </Box>
                    </ModalBody>
                    <ModalFooter justifyContent={"center"}>
                      <Button
                        type="submit"
                        width="200px"
                        bg="white"
                        color="primary"
                        mt={3}
                        mr={10}
                        border="2px"
                        borderColor="primary"
                        onClick={onClose}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        width="200px"
                        bg="primary"
                        color="white"
                        mt={3}
                        ml={2}
                        onClick={() => acceptDriverRequest()}
                      >
                        Accept
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              )}
            </Stack>
          </GridItem>
        </HStack>
        <GridItem>
          <Center>
            <Box
              w="96vw"
              bg="white"
              p={4}
              mb={4}
              h="100%"
              borderWidth="1px"
              borderRadius={15}
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Customer Engagement
              </Text>
              <Center>
                <Box w="60%" borderRadius="md" boxShadow="md">
                  <ReactApexChart
                    options={options}
                    series={chartData}
                    type="area"
                    width="100%"
                  />
                </Box>
              </Center>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CourierCompanyHome;
