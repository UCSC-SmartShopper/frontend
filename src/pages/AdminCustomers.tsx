import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
    Td,Tfoot,Heading,HStack,Card,CardBody,Center,Image,
    Text,Icon,Flex,Select} from "@chakra-ui/react"
  import SideBar from "../components/SideBar" 
  import {IoMdPeople} from "react-icons/io";
  import LineChart from "../components/Charts/LineChart";
  import ActionButton from "../components/Buttons/ActionButton";
  import { AiOutlineRise ,AiOutlineFall} from "react-icons/ai";
 


const AdminCustomers = () => {
  return (
    <Grid
    templateAreas={{
      base: `"nav"
            "head"
             "main"
             "footer"`,
      lg: `"nav head"
           "nav main"
           "nav footer"`
    }}
  gridTemplateRows={'1fr 2fr 2fr'}
  gridTemplateColumns={{base:'1fr',lg:'280px 1fr'}}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='' area={'nav'}>
    <SideBar/>
  </GridItem>
  <GridItem pl='2' my={5} area={'head'}>

  <Box  p={5} bg="">

  <Center>
        <HStack spacing={150}>
          <Card px={3}>
            <CardBody>
              <Flex gap={20} >
              <Heading size="md">Total Customers</Heading>
              <Icon as={IoMdPeople}  boxSize={8} color="primary" bg="orange.100" borderRadius={5}/> 
              </Flex>
              <Text>10.8 k</Text>
              <Flex mt={2}>
              <Icon as={AiOutlineRise}  boxSize={5} color="green.400"  borderRadius={5}/>
                <Text fontSize="sm" color="green.400" pl={2}>8.5% Up from yesterday</Text>
               </Flex>
            </CardBody>
          </Card>

          <Card px={3}>
              <CardBody>
                <Flex gap={20}>
                <Heading size="md">Current Customers</Heading>
                <Icon as={IoMdPeople}  boxSize={8} color="red" bg="red.100" borderRadius={5}/>
                </Flex>
            <Text>5.8 k</Text>
            <Flex mt={2}>
              <Icon as={AiOutlineRise}  boxSize={5} color="green.400"  borderRadius={5}/>
                <Text fontSize="sm" color="green.400" pl={2}>8.5% Up from yesterday</Text>
               </Flex>
            </CardBody>
          </Card>

          <Card px={3}>
              <CardBody>
                <Flex gap={20}>
                <Heading size="md">New Customers</Heading>
                <Icon as={IoMdPeople}  boxSize={8} color="green" bg="green.100" borderRadius={5}/>
                </Flex>
            <Text>5.8 k</Text>
            <Flex mt={2}>
              <Icon as={AiOutlineFall}  boxSize={5} color="red.400"  borderRadius={5}/>
                <Text fontSize="sm" color="red.400" pl={2}>8.5% Down from yesterday</Text>
               </Flex>
            </CardBody>
          </Card>

        </HStack>
      </Center>
    </Box>
    
  

  </GridItem>

  <GridItem pl='2' bg={''} area={'main'}>
    <Center >
    <LineChart topic="Customer Engagement"/>
    </Center>
    </GridItem>


  <GridItem pl='2' bg={''} area={'footer'} mt={10}>

  <Box p={2} shadow='md' borderWidth='1px' m={10}>
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
      Customer Details
    </Heading>
    <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option1'>August</option>
        <option value='option2'>September</option>
        <option value='option3' selected>October</option>
    </Select>

        </Box>
    <ActionButton url="/addcustomer">Add Customer</ActionButton>

    </Flex>
    
    </Flex>

  <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }}>
      <Table size='md'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Contact Number</Th>
            <Th>Email</Th>
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
                <Text>Kaveesha Hettige</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>0766245650</Td>
            <Td>kaveesha.hettige@gmail.com</Td>
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
                <Text>Kaveesha Hettige</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>0766245650</Td>
            <Td>kaveesha.hettige@gmail.com</Td>
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
                <Text>Kaveesha Hettige</Text>
              </Flex>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>0766245650</Td>
            <Td>kaveesha.hettige@gmail.com</Td>
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

export default AdminCustomers
