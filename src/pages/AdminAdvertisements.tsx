import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
    ,Heading,Text,TableContainer,HStack,Circle} from "@chakra-ui/react"
  import AdminNavBar from "../components/AdminNavBar"
  import LineChart from "../components/Charts/LineChart"
  import SideBar from "../components/SideBar"
  import LoginButton from "../components/Buttons/LoginButton"
  import ActionButton from "../components/Buttons/ActionButton"

const AdminAdvertisements = () => {
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
  <GridItem  area={'main'} m={5} mx={10}>
    <Card>
        <CardBody>
            1st card
        </CardBody>
    </Card>
   
  </GridItem>
  <GridItem  area={'footer'} mx={10}>
  <Card>
        <CardBody>
            2nd card
        </CardBody>
    </Card>
    
  </GridItem>
</Grid>
    </>
    
  )
}

export default AdminAdvertisements
