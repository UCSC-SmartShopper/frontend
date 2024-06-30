import React from 'react';
import { Box,Heading,Center } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Current Customers', 'New Customers', 'Target Customers', 'Retarget Customers'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(240, 128, 48, 1)',
        'rgba(240, 128, 48, 0.8)',
        'rgba(200, 84, 0, 1)',
        'rgba(245, 151, 91, 0.8)',
        
      ],
      
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: false,
      
    },
  },
};

const DoughnutChart: React.FC = () => {
  return (
    
    <Box p={5} shadow='md' borderWidth='1px'>
      
      <Heading as='h3' size='lg' >
        Customers
      </Heading>


      <Center>
      <Box height="250px" width={"auto"}> 
      <Doughnut data={data} options={options} />
      </Box>
      </Center>
      
    </Box>
    
   
  );
};

export default DoughnutChart;
