import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
    ,Heading,Text,TableContainer,
    HStack,Circle,Button,useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    VStack,Icon} from "@chakra-ui/react"
  import SideBar from "../../components/SideBar"
  import LoginButton from "../../components/Buttons/LoginButton"
import PieChart from "../../components/Charts/PieChart"
  import { MdPayment } from "react-icons/md";
  import { FaShoppingBag } from "react-icons/fa";
  import { GiStorkDelivery } from "react-icons/gi";

const AdminOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Grid
  templateAreas={{
                base:`
                        "nav"
                      "main"
                      "footer"`,


                lg:`
                  "nav main"
                  "nav footer"`,
                
                }}
                gridTemplateRows={{ base: 'auto auto auto', lg: 'auto auto' }}
                gridTemplateColumns={{ base: '1fr', lg: '280px 1fr' }}
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='lightblue' area={'header'}>
    {/* <AdminNavBar/> */}
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
            gridTemplateColumns={{ base: '70%', lg: '65% 33%' }}
            gap={5}
    >
        <GridItem area={'main1'} pb={2}>
          <Heading size='lg' my={4}>Orders by Supermarkets</Heading>
        <Box pt={10} boxShadow={'md'}>
    <PieChart title=''/>
    </Box>
    
  </GridItem>
  <GridItem pl='2'  area={'main2'} mt={12}>
  <Card py={6} mt={4}>
  <CardBody>
    
 
    <Box mb={10}>
      <Flex>
        <Box px={3}>Item</Box>
        <Spacer/>
        <Box px={10}>Items Sold</Box>
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
        
        <Box px={3} py={2}>Munchee Super Cream Cracker</Box>
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
        <Box px={3} py={2}>Anchor 1kg</Box>
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
                <Box px={3} py={2}>Sugar 500g</Box>
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

  <Box p={2} shadow='md' borderWidth='1px' >
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
    Order Details
    </Heading>
    <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option1'>August</option>
        <option value='option2'>September</option>
        <option value='option3' selected>October</option>
    </Select>

        </Box>

    </Flex>
    
    </Flex>

  <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }}>
      <Table size='md'>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Order ID</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Cost</Th>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
                <HStack>
                <Circle bg='primary' size='10px'></Circle>
                <Text>Delivered</Text>
                </HStack>
                </Td>

                   
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm' onClick={onOpen}>View More</Button></Td>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
                <HStack>
                <Circle bg='red' size='10px'></Circle>
                <Text>Cancelled</Text>
                </HStack>
                </Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm'>View More</Button></Td>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
            <HStack>
                <Circle bg='yellow' size='10px'></Circle>
                <Text>Collected</Text>
                </HStack>
            </Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm'>View More</Button></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    </Box>
   
    
  </GridItem>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box borderBottomWidth={'1px'} p={2} >
            <VStack>
            <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='100px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
              <Text fontSize={'xl'}>Kaveesha Hettige</Text>
              <Text fontSize={'sm'}>kaveesha.hettige@gmail.com</Text>
            </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Center borderBottomWidth={'1px'}>

            <HStack >
            
            
              <Box mr={1} >
                
                <VStack>
                  <Box mb={8}>
                  <Icon as={MdPayment} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={7}>
                  <Icon as={GiStorkDelivery} boxSize={5} color={'primary'} />
                  </Box>
                  <Box mb={7}>
                  <Icon as={FaShoppingBag} boxSize={5} color={'primary'} />
                  </Box>

                </VStack>

              </Box>
              <Box ml={1}>
              <VStack>
                  
              <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Price</Text>
                  <Text fontSize={'sm'}>Rs 4000</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Delivery Type</Text>
                  <Text fontSize={'sm'}>Collected</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>No of Items</Text>
                  <Text fontSize={'sm'}>4</Text>
                  </VStack>
                </VStack>
                
              </Box>
              
            </HStack>
            </Center>

          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color='white' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Grid>
    </>
  )
}

export default AdminOrders
