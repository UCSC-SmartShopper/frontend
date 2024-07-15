import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

const DoughnutChart: React.FC = () => {
    const data = {
        series: [20, 20, 60],
        options: {
            chart: {
                id: "basic-donut",
                width: '100%', // Ensure the chart spans the full width of its container
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%', // Adjust the size of the donut here
                    },
                },
            },
            colors: ['#ff7708', '#ff3908', '#ffe208'], 
            labels: ['Current Customers', 'New Customers', 'Target Customers'],
            width: '100%', // Set the width of the chart
            height:'100%', // Set the height of the chart   
            legend: {
                position: 'bottom', // Positioning the legend at the bottom
                fontSize: '14px', // Setting the font size of the legend
            },
        },
    };

    return (
        <Box py={10} my={10}>
            <Chart options={data.options} series={data.series} type="donut" width="100%" />
        </Box>
    );
};

export default DoughnutChart;
