import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
  Td,Tfoot,Heading,HStack,Card,CardBody,Center,Image,
  Text,Icon,Flex,Button} from "@chakra-ui/react"
import BarGraph from "../../components/Charts/BarGraph"
import DoughnutChart from "../../components/Charts/DoughnutChart"  
import { CgWebsite } from "react-icons/cg";
import {IoMdPeople} from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineRise ,AiOutlineFall} from "react-icons/ai";

const AdminOverview = () => {
  const cutomerCards=[
    {
      title:'Total Visits',
      icon:CgWebsite,
      color:'purple',
      background:'purple.100',
      value:'5.8 k',
      percentage:'8.5% Up from yesterday',
      rdicon:AiOutlineRise,
      rdiconColor:'green.400'
    },
    {
      title:'Total Customers',
      icon:IoMdPeople,
      color:'primary',
      background:'orange.100',
      value:'10.8 k',
      percentage:'8.5% Down from yesterday',
      rdicon:AiOutlineFall,
      rdiconColor:'red.400'
    },
    {
      title:'Total Sales',
      icon:FcSalesPerformance,
      color:"yellow",
      background:'yellow.100',
      value:'102,000 Rupees',
      percentage:'8.5% Up from yesterday',
      rdicon:AiOutlineRise,
      rdiconColor:'green.400'
    },
  ]
  return (
    <Grid
    templateAreas={{
      base: `
             "main"
             "footer"`,
      lg: `" main"
           " footer"`
    }}
    gridTemplateRows={{ base: 'auto', lg: 'auto' }}
    gridTemplateColumns={{ base: '1fr', lg: 'aut0' }}
  gap='1em'
  color='blackAlpha.700'
  fontWeight='bold'
  
>
  
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
        <HStack justifyContent='space-between' w='full' px={2}>

        {cutomerCards.map((card, index) => (
          <Card key={index}>
            <CardBody>
                <Flex gap={10}>
              <Heading size="lg">{card.title}</Heading>
              <Icon as={card.icon}  boxSize={10} color={card.color} bg={card.background} borderRadius={5} p={2}/> 
              </Flex>
              <Text fontSize="lg">{card.value}</Text>
              <Flex mt={2}>
              <Icon as={card.rdicon}  boxSize={5} color={card.rdiconColor}  borderRadius={5}/>
                <Text fontSize="sm" color={card.rdiconColor} pl={2}>{card.percentage}</Text>
               </Flex>
              <Box mt={2}>
                <Text></Text>
               </Box>
            </CardBody>
          </Card>

        ))}
          
        </HStack>
      </Center>

    </Box>

  <Box m={2} p={5} shadow='md' borderWidth='1px' my={5}>

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
