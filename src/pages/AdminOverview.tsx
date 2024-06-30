import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
  Td,Tfoot,Heading,HStack,Card,CardBody,CardHeader,Center,Image,
  Text,Icon,Flex} from "@chakra-ui/react"
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
  gridTemplateRows={'2fr 1fr'}
  gridTemplateColumns={{base:'1fr',lg:'280px 1fr'}}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='' area={'nav'}>
    <SideBar/>
  </GridItem>
  <GridItem pl='2' area={'main'}>
    
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
  gridTemplateColumns={{base:'1fr',lg:'70% 30%'}}
  >

  <GridItem p='2' bg='' area={'main1'}>
    <BarGraph/>
  </GridItem>

  <GridItem p='2' bg='' area={'main2'}>
    <DoughnutChart/>
  </GridItem>


    </Grid>
    
  </GridItem>
  <GridItem pl='2' my={5} area={'footer'}>

  <Box m={2} p={5} shadow='md' borderWidth='1px'>

  <Center>
        <HStack spacing={70}>
          <Card>
            <CardHeader>
              <Icon as={CgWebsite}  boxSize={8}/>
            </CardHeader>
            <CardBody>
              <Heading size="md">Total Visits</Heading>
              <Text>10.8 k</Text>
            </CardBody>
          </Card>

          <Card>
          <CardHeader>
              <Icon as={IoMdPeople}  boxSize={8}/>
            </CardHeader>
            <CardBody>
            <Heading size="md">Total Customers</Heading>
            <Text>5.8 k</Text>
            </CardBody>
          </Card>

          <Card>
          <CardHeader>
              <Icon as={FcSalesPerformance}  boxSize={8}/>
            </CardHeader>
            <CardBody>
            <Heading size="md">Total Sales</Heading>
            <Text>102,000 Rupees</Text>
            </CardBody>
          </Card>
        </HStack>
      </Center>

    <Heading as='h3' size='lg' fontWeight="500" my={4}>
      Top Products
    </Heading>
    

    <TableContainer width={{ base: "100%", lg: "80%" }} ml={{ base: '0%', lg: '10%' }} mt={10}>
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
            <Flex>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
                <Text>Munchee Cream Cracker</Text>
              </Flex>
            </Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
          <Tr>
            <Td> 
              <Flex>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
                <Text>Munchee Cream Cracker</Text>
              </Flex></Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>
              <Flex>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
                <Text>Munchee Cream Cracker</Text>
              </Flex>
            </Td>
            <Td>45</Td>
            <Td>140</Td>
            <Td>300 Rupees</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    </Box>
    
  

  </GridItem>


  
</Grid>
  )
}

export default AdminOverview
