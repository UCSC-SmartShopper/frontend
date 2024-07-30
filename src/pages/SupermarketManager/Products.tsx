import MainContainer from "@/components/MainContainer";
import ProductsTable from "@/components/ProductsTable";
import { Text , Box } from "@chakra-ui/react";

const ProductDetails = () => {
    return (
        <>
            <Box p={3} bg={"white"} borderRadius={20} overflow="hidden"
        boxShadow="md"
        borderWidth={2}>
                <Text fontSize="2xl" fontWeight="semibold" mb={4}>
                    Product Details 
                </Text>
                <ProductsTable />
            </Box>
            
        </>
    );
};

export default ProductDetails;