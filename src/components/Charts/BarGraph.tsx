import React from 'react';
import { Box, Heading, useTheme } from "@chakra-ui/react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph: React.FC = () => {
  const theme = useTheme();

  const data: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 80, 90, 100],
        backgroundColor: theme.colors.primary,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
    maintainAspectRatio: false, // Allow custom height and width
  };

  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      <Heading as='h3' size='lg' mb={4}>
        Monthly Sales
      </Heading>
      <Heading as='h3' size='sm' mb={4}>
        350000 LKR
      </Heading>
      <Box height="250px" width="600px"> {/* Adjust the height and width as needed */}
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
}

export default BarGraph;
