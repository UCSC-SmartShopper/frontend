
import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
  ,Heading,Text,TableContainer,HStack} from "@chakra-ui/react"
import AdminNavBar from "../components/AdminNavBar"
import LineChart from "../components/Charts/LineChart"
import SideBar from "../components/SideBar"
import LoginButton from "../components/Buttons/LoginButton"
import ActionButton from "../components/Buttons/ActionButton"

const AdminCourierServices = () => {
  return (
    <>
    <Grid
  templateAreas={{
                base:`"header"
                        "nav"
                      "main"
                      "footer"`,


                lg:`"header header"
                  "nav main"
                  "nav footer"`,
                
                }}
                gridTemplateRows={{ base: 'auto auto auto', lg: 'auto 1fr 1fr' }}
                gridTemplateColumns={{ base: '1fr', lg: '280px 1fr' }}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='lightblue' area={'header'}>
    <AdminNavBar/>
  </GridItem>
  <GridItem pl='2' area={'nav'}>
    <SideBar/>
  </GridItem>
  <GridItem pl='2' area={'main'} m={5} mx={10}>
    <Grid templateAreas={{
        base: `"main1"
              "main2"`,
       lg: `"main1 main2"`,
       
    }}
    gridTemplateRows={{ base: 'auto auto', lg: '1fr' }}
            gridTemplateColumns={{ base: '70%', lg: '70% 30%' }}
            gap={0}
    >
        <GridItem pl='2' area={'main1'} pb={2}>
    <LineChart topic='Courier Company Earnings'/>
  </GridItem>
  <GridItem pl='2'  area={'main2'}>
  <Card>
  <CardBody>
    
 
    <Box mb={10}>
      <Flex>
        <Box px={3}>Company</Box>
        <Spacer/>
        <Box px={10}>No of Drivers</Box>
      </Flex>
    </Box>
    <Box mb={5}>
      <Flex>
      <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Island cabs</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>12</Box>
      </Flex>
    </Box>
    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pronto</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>35</Box>
      </Flex>
    </Box>

    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pick me</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>20</Box>
      </Flex>
    </Box>

    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pick me</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>20</Box>
      </Flex>
    </Box>

    <Box mb={5}>
    <Flex>
        <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pick me</Box>
        </HStack>
        
        <Spacer/>
        <Box px={10} py={2}>20</Box>
      </Flex>
    </Box>

    <Box>
      <Center>
      <LoginButton text="View More" image=""/>
      </Center>
   
    </Box>

  </CardBody>
</Card>
  </GridItem>

    </Grid>
    
   
  </GridItem>
  <GridItem pl='2' area={'footer'} mx={10} my={10}>

  <Box p={2} shadow='md' borderWidth='1px'>
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
      Delivery Person Details
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
            <Th>Company</Th>
            <Th>Contact Number</Th>
            <Th>Deliveries Completed</Th>
            <Th>Earning</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
            <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
          </Tr>
          <Tr>
          <Td>
          <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
          <Td>
          <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><ActionButton url="/viewmore">View More</ActionButton></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    </Box>
   
    
  </GridItem>
</Grid>
    </>
  )
}

export default AdminCourierServices
