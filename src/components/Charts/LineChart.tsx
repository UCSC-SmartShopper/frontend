import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box ,Heading} from '@chakra-ui/react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

interface Props  {
  topic: string;
};

const data = {
  labels: Array.from({ length: 30 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'No of customers',
      data: [65, 59, 80, 81, 56, 55, 40, 23, 56, 120, 45, 78, 90, 23, 45, 10, 89, 23, 33, 100, 89, 23, 40, 76, 89, 23, 45, 90, 89, 23, 66],
      fill: false,
      backgroundColor: 'rgba(240, 128, 48, 1)',
      borderColor: 'rgba(240, 128, 48, 1)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {},
  },
};

const LineChart: React.FC<Props> = ({ topic }) => {
  return (
    <Box w="100%" maxWidth="900px" h="450px" p="10"  bg="white" boxShadow="md" borderRadius="md">
      <Heading size="lg">{topic}</Heading>
      <Line data={data} options={options} />
    </Box>
  );
};

export default LineChart;
