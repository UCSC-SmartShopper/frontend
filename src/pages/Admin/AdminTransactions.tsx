import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
    ,Heading,Text,TableContainer,HStack,Circle,Button,useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    VStack,Icon,ListItem,List} from "@chakra-ui/react"
   import LineChart from "../../components/Charts/LineChart"
  import ActionButton from "../../components/Buttons/ActionButton" 
  import { MdPayment } from "react-icons/md";
  import { FaShoppingBag } from "react-icons/fa";
  import { GiStorkDelivery } from "react-icons/gi";
  import { FaUser } from "react-icons/fa6";
  import {topBuyers} from "@/data/topBuyers";


const AdminTransactions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex my="5vh" fontWeight={'bold'}>
    <Box px={2} >
        <Select placeholder='Select option' >
        <option value='option3' selected>3 Month</option>
        <option value='option1'>6 Month</option>
        <option value='option2'>1 Month</option>
      </Select>
    </Box>

    </Flex>
    <VStack gap={"8vh"} fontWeight="bold">
      <Flex w='full' gap={5}>
      <Box p={5} shadow="md" borderWidth="1px" w="70%" borderRadius={15}>
            <Heading size={"lg"}>
            Money Flow
          </Heading>

            <Center>
              <LineChart  width="70%"/>
              {/* <PieChart/> */}
            </Center>
          </Box>

           {/* -------  cash Card ------- */}
           <Box p={5} shadow="md" borderWidth="1px" w="30%" borderRadius={15}>
            <Heading size="md">Top Items Sold</Heading>
            {topBuyers.map((company, index) => (
              <VStack mt={5} key={index}>
                <HStack
                  w="full"
                  px="1vw"
                  h="10vh"
                  rounded={10}
                  borderWidth="1px"
                  borderColor="background"
                  shadow="md"
                >
                  <Image
                    src={company.image}
                    alt="Product Image"
                    boxSize="40px"
                    objectFit="cover"
                  />
                  <Text ml='0.3rem'>{company.name}</Text>
                  <Text ml="auto">{company.purchase}</Text>
                </HStack>
              </VStack>
            ))}
            <ActionButton inverted={true} className="!w-full mt-5">
              View All
            </ActionButton>
          </Box>
      </Flex>


    </VStack>

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
              <HStack>
              <Icon as={FaUser} boxSize={4} color='primary'/>
              <Text fontSize={'sm'}>Customer</Text>

              </HStack>
              
            </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Center borderBottomWidth={'1px'} pb={6}>

            <Flex >
            
            
              <Box mr={1} >
                
                <VStack>
                  <Box mb={8}>
                  <Icon as={MdPayment} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={7}>
                  <Icon as={GiStorkDelivery} boxSize={5} color={'primary'} />
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
                </VStack>
                
              </Box>

              <Box mr={1} ml={6}>
                
                <VStack>
                  <Box mb={7}>
                  <Icon as={FaShoppingBag} boxSize={5} color={'primary'} />
                  </Box>
                </VStack>

              </Box>
              <Box ml={1}>
              <VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>No of Items</Text>
                  <Text fontSize={'sm'}>4</Text>
                  </VStack>
                </VStack>
                
              </Box>
              
            </Flex>
            </Center>

            <Box mt={1}>
            <HStack>
              <Heading fontSize={'md'} color='primary' fontWeight={'500'}>Cargills</Heading>
              <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='30px'
                  objectFit='cover'
                  m={2}
                />
              </HStack>
              <Box>
              <List spacing={3}>
  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
              
    </HStack>
  </ListItem>

  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
    </HStack>
  </ListItem>

</List>
              </Box>

            </Box>

            <Box mt={1}>
              <HStack>
              <Heading fontSize={'md'} color='primary' fontWeight={'500'}>keells</Heading>
              <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='30px'
                  objectFit='cover'
                  m={2}
                />
              </HStack>
              
              <Box>
              <List spacing={3}>
  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
    </HStack>
  </ListItem>
  
</List>
              </Box>

            </Box>

          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color='white' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default AdminTransactions
