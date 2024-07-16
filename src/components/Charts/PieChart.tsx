import { Box } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const data={
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Keells', 'Cargills', 'Arpico', 'Glomark', 'Spar'],
      colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  }
  return (
    <Box>
      <Chart options={data.options} series={data.series} type="pie" width="100%"/>
      
    </Box>
  )
}

export default PieChart
