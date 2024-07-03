import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
  Td,Tfoot,Heading,HStack,Card,CardBody,Center,Image,
  Text,Icon,Flex,Button} from "@chakra-ui/react"
import SideBar from "../components/SideBar"
import BarGraph from "../components/Charts/BarGraph"
import DoughnutChart from "../components/Charts/DoughnutChart"  
import { CgWebsite } from "react-icons/cg";
import {IoMdPeople} from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";

const AdminOverview = () => {
  return (
    <Grid
    templateAreas={{
      base: `"nav"
             "main"
             "footer"`,
      lg: `"nav main"
           "nav footer"`
    }}
    gridTemplateRows={{ base: 'auto auto auto', lg: 'auto 1fr' }}
    gridTemplateColumns={{ base: '1fr', lg: '280px 1fr' }}
  h='200px'
  gap='1em'
  color='blackAlpha.700'
  fontWeight='bold'
  
>
  <GridItem pl='2' bg='' area={'nav'}>
    <SideBar/>
  </GridItem>
  <GridItem pl='2' area={'main'} mx={10}>
    
    {/* <Flex p={10} >
    <BarGraph/>
    <Spacer/>
    <BarGraph/>
    </Flex> */}
    
    <Grid templateAreas={{
      base: `"main1"
             "main2"`,
      md: `"main1"
             "main2"`,     
      lg: `"main1 main2"`
    }}
  gridTemplateColumns={{base:'1fr',lg:'60% 40%'}}
  >

  <GridItem p='2' bg='' area={'main1'}>
    
    <Box p={5} shadow='md' borderWidth='1px'>
      <Heading as='h3' size='lg' mb={4}>
        Monthly Sales
      </Heading>
      <Heading as='h3' size='sm' mb={4}>
        Total Revenue - 350000 LKR
      </Heading>
      <BarGraph/>
    </Box>
  </GridItem>

  <GridItem p='2'  area={'main2'}>
  <Box p={5} shadow='md' borderWidth='1px'>
      
      <Heading as='h3' size='lg' >
        Customers
      </Heading>


      <Center>
    <DoughnutChart/>
    </Center>

    </Box>
    
  </GridItem>


    </Grid>
    
  </GridItem>
  <GridItem pl='2' my={5} area={'footer'} mx={10}>

    <Box mb={10}>

    <Center>
        <HStack spacing={70}>

          <Card>
            <CardBody>
                <Flex gap={10}>
              <Heading size="md">Total Visits</Heading>
              <Icon as={CgWebsite}  boxSize={10} color="purple" bg="purple.100" borderRadius={5} p={2}/> 
              </Flex>
              <Text>5.8 k</Text>
              <Box mt={2}>
                <Text></Text>
               </Box>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
                <Flex gap={10}>
              <Heading size="md">Total Customers</Heading>
              <Icon as={IoMdPeople}  boxSize={10} color="primary" bg="orange.100" borderRadius={5} p={2}/> 
              </Flex>
              <Text>10.8 k</Text>
              <Box mt={2}>
                <Text></Text>
               </Box>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
                <Flex gap={10}>
              <Heading size="md">Total Sales</Heading>
              <Icon as={FcSalesPerformance}  boxSize={10} bg="yellow.100" borderRadius={5} p={2}/> 
              </Flex>
              <Text>102,000 Rupees</Text>
              <Box mt={2}>
                <Text></Text>
               </Box>
            </CardBody>
          </Card>
          
        </HStack>
      </Center>

    </Box>

  <Box m={2} p={5} shadow='md' borderWidth='1px'>

    <Heading as='h3' size='lg' my={4}>
      Top Products
    </Heading>
    

    <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }} mt={10}>
      <Table size='lg'>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Inventory</Th>
            <Th>Sales</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
            <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                  mr={2}
                />
                <Text>Munchee Cream Cracker</Text>
              </HStack>
            </Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
          <Tr>
            <Td> 
              <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                  mr={2}
                />
                <Text>Munchee Cream Cracker</Text>
              </HStack></Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>
              <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                  mr={2}
                />
                <Text>Munchee Cream Cracker</Text>
              </HStack>
            </Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    <Center>
    <Box display='flex' justifyContent='flex-end' mr='60px' my={2}>
    <Button bg='primary' size='sm'>
    See More
  </Button>
    
    </Box>

    </Center>
    
    </Box>

    
    
  

  </GridItem>


  
</Grid>
  )
}

export default AdminOverview
