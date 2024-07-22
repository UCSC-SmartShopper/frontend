import { Box, Tab, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr , Table , Badge, Flex, Center, Text } from "@chakra-ui/react";

// import { Table } from "flowbite-react";
// import Badge from "flowbite-react";



// json for product list
const productList = [
 { id: 1, name: "Product 1", price: 100 , status: "active"},
 { id: 2, name: "Product 2", price: 200 , status: "inactive"},
 { id: 3, name: "Product 3", price: 300 , status: "active"},
 { id: 4, name: "Product 4", price: 400 , status: "inactive"},
 { id: 5, name: "Product 5", price: 500 , status: "active"},
  { id: 6, name: "Product 6", price: 600 , status: "inactive"},
  { id: 7, name: "Product 7", price: 700 , status: "active"},
  { id: 8, name: "Product 8", price: 800 , status: "inactive"},
  { id: 9, name: "Product 9", price: 900 , status: "active"},
  { id: 10, name: "Product 10", price: 1000 , status: "inactive"},
];

const ProductList = () => {
  return (
    <>
   
    <Box className="product-card border m-5" borderColor={"gray-300"} border={'rounded'} maxW={{ base: "100%" }} p={{ base: 2, md: 4 }} m={0} borderRadius={10}>
      <Text fontSize='xl' mb={4}>Product List</Text>
      <TableContainer>
  <Table size={'sm'}>
    <Thead>
      <Tr>
        <Th>Item NAme</Th>
        <Th>Qty</Th>
        <Th >Status</Th>
      </Tr>
    </Thead>
    {/* add map */}
    <Tbody>
      {productList.map((product) => (
        <Tr key={product.id}>
          <Td>{product.name}</Td>
          <Td>{product.price}</Td>
          <Td >
            <Badge color={'white'} background={product.status === "active" ? "green" : "red"} minW={'6rem'}>
              <Flex justify={'center'}>

            {product.status === "active" ? "done" : "pending"}
            </Flex>
            </Badge>
          </Td>
        </Tr>
      ))}
    </Tbody>
    
  </Table>
</TableContainer>
      
    </Box>
    </>
  );
};

export default ProductList;
