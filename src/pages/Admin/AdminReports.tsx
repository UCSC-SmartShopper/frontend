import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
  useBreakpointValue,
  FormControl,
  FormLabel,
  
} from '@chakra-ui/react';
import jsPDF from 'jspdf';

const AdminReports: React.FC = () => {
  // State for form values and filters
  const [reportType, setReportType] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Responsive padding based on screen size
  const padding = useBreakpointValue({ base: '4', md: '6' });


    const generateReport=()=>{
        const doc = new jsPDF();
        doc.text('Hello world!', 10, 10);
        doc.save('report.pdf');
    }


  return (
    <Box p={padding} maxW="container.xl" mx="auto">
      <Heading mb={6} size={"md"}>Admin Report Generation</Heading>

      <VStack spacing={6} align="stretch">
        {/* Filter Form */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={4}>Filter Reports</Heading>
          
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel htmlFor="reportType">Report Type</FormLabel>
              <Select
                id="reportType"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="customerEngagement">Customer Engagement</option>
                <option value="supermarketsEarning">Supermarket Earning</option>
                <option value="smartShopperRevenuew">SmartShopper Revenue</option>
                <option value="courierCompanyEarning">Courier Company Earnings</option>
                <option value="sales">Sales</option>  {/* Summarizes total sales for a given period */} 
                <option value="orders">Orders</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="startDate">Start Date</FormLabel>
              <Input
                type="date"
                id="startDate"
                value={startDate?.toISOString().split('T')[0] || ''}
                onChange={(e) => setStartDate(new Date(e.target.value))}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="endDate">End Date</FormLabel>
              <Input
                type="date"
                id="endDate"
                value={endDate?.toISOString().split('T')[0] || ''}
                onChange={(e) => setEndDate(new Date(e.target.value))}
              />
            </FormControl>

            <HStack spacing={4} mt={4}>
              <Button bg="primary" color="white" onClick={generateReport}>
                Generate Report
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Report Display Area */}
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={4}>Generated Report</Heading>
         
          <Box p={4} bg="gray.100" borderRadius="md">
            <p>No report generated yet. Please apply filters and generate a report.</p>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default AdminReports;
