import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
    Td,Tfoot,Heading,Image,Text,Flex,Select} from "@chakra-ui/react"
  import SideBar from "../components/SideBar"
  import PieChart from "../components/Charts/PieChart" 
import LineChart from "../components/Charts/LineChart";
import ActionButton from "../components/Buttons/ActionButton";

const AdminSuperMarkets = () => {
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
  gridTemplateColumns={{base:'1fr',lg:'30% 70%'}}
  >

  <GridItem p='2' bg='' area={'main1'}>
    <Heading size={'lg'} my={4}>Super Market Earnings</Heading>

    <PieChart title=''/>
  </GridItem>

  <GridItem p='2' bg='' area={'main2'}>
    <LineChart topic=""/>
  </GridItem>


    </Grid>
    
  </GridItem>
  <GridItem pl='2' bg={''} area={'footer'} mt={10}>

  <Box p={2} shadow='md' borderWidth='1px' m={10}>
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
      Super Market Details
    </Heading>
    <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option1'>August</option>
        <option value='option2'>September</option>
        <option value='option3' selected>October</option>
    </Select>

        </Box>
    {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}

    </Flex>
    
    </Flex>

  <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }}>
      <Table size='md'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Manager Name</Th>
            <Th>Contact Number</Th>
            <Th>Earning</Th>
            <Th></Th>
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
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Keells</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>
            <Td>Rs. 12000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
          </Tr>
          <Tr>
            <Td> 
            <Flex>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Keells</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>
            <Td>Rs. 12000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
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
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Keells</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>
            <Td>Rs. 12000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    </Box>
   
    
  </GridItem>


  
</Grid>
  )
}

export default AdminSuperMarkets
