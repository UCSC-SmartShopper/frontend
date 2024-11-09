import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaClipboardList, FaTruck, FaUser } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface DriverRequest {
  id: number;
  name: string;
  nic: string;
  email: string;
  contactNo: string;

  courierCompany: string;
  vehicleName: string;
  vehicleNumber: string;
  vehicleType: string;
  vehicleColor: string;

  profilePic: string;
  vehicleImage: string;
}

const CourierCompanyHome = () => {
  const apiClient = new APIClient<DriverRequest>("/driver_requests");

  const driverRequests = useQuery({
    queryKey: ["driver_requests"],
    queryFn: () => apiClient.getAll({}),
  }).data?.results;

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
    <Box bg="gray.100" minH="90vh">
      <Grid>
        <HStack h="90vh">
          <GridItem>
            <VStack  w="22vw" py={4} gap="1vh">
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
              h="100%"
              borderWidth="1px"
              borderRadius={15}
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Customer Engagement
              </Text>
              <Center>
                <Box
                  w="60%"
                  borderRadius="md"
                  boxShadow="md"
                >
                  <ReactApexChart
                    options={options}
                    series={chartData}
                    type="area"
                    width="100%"
                  />
                </Box>
              </Center>
            </Stack>
          </GridItem>
        </HStack>
      </Grid>
    </Box>
  );
};

export default CourierCompanyHome;
