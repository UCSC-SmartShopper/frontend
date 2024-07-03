import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
    ,Heading,Text,TableContainer,HStack,Circle} from "@chakra-ui/react"
  import AdminNavBar from "../components/AdminNavBar"
  import LineChart from "../components/Charts/LineChart"
  import SideBar from "../components/SideBar"
  import LoginButton from "../components/Buttons/LoginButton"
  import ActionButton from "../components/Buttons/ActionButton"

const AdminTransactions = () => {
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
  <GridItem pl='2' area={'main'} m={5}>
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
        <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option3' selected>3 Month</option>
        <option value='option1'>6 Month</option>
        <option value='option2'>1 Month</option>
        
    </Select>

        </Box>

        </Flex>
            
    <LineChart topic='Money Flow'/>
  </GridItem>
  <GridItem pl='2'  area={'main2'}>
  <Card>
  <CardBody>
    
 
    <Box mb={10}>
        <Heading fontSize="20px" mb={4}>Top Buyers</Heading>
      <Flex>
        <Box px={3}>Customer</Box>
        <Spacer/>
        <Box px={10}>Items Purchased</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
  <GridItem pl='2' area={'footer'}>

  <Box p={2} shadow='md' borderWidth='1px' m={10}>
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
      Transaction Details
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
            <Th>Type</Th>
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
            <Td>customer</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='red' size='10px'></Circle>
                <Text>Cancelled</Text>
                </HStack>
            </Td>
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
            <Td>Super Market</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='yellow' size='10px'></Circle>
                <Text>Delivered</Text>
                </HStack>
            </Td>
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
            <Td>customer</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='primary' size='10px'></Circle>
                <Text>Delivered</Text>
                </HStack>
            </Td>
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

export default AdminTransactions
