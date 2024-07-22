import { Box, Grid, GridItem } from "@chakra-ui/react";

const data = [
    { name: 'Order Id', value: '222265477833455' },
    { name: 'Order placed On', value: '12.04.2024' },
    { name: 'Customer', value: 'Kaveesha Hettige' },
    { name: 'Contact Now', value: '0441774579' },
    { name: 'order Cost', value: '23456.00 LKR' },
];

const DetailsBox = () => {
    return (
        <>
        <Box  className="product-card border m-5" borderColor={"gray-300"} border={'rounded'} maxW={{ base: "100%" }} p={{ base: 2, md: 4 }} m={0} mb={4} borderRadius={10}>
        <Grid templateColumns='2fr 3fr' gap={3}>
            {data.map((item, index) => (
                <>
                    <GridItem key={`name-${index}`} fontWeight={'bold'}>{item.name}</GridItem>
                    <GridItem key={`value-${index}`}>: {item.value}</GridItem>
                </>
            ))}
        </Grid>
        </Box>
        </>
    );
};

export default DetailsBox;
