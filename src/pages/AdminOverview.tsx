import { GridItem,Grid,Show,Flex,Spacer } from "@chakra-ui/react"
import SideBar from "../components/SideBar"
import BarGraph from "../components/Charts/BarGraph"

const AdminOverview = () => {
  return (
    <Grid
  templateAreas={`"nav main"
                  "nav footer"`}
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
  <Show above='base'>
  <GridItem pl='2' area={'main'}>
    <Flex p={10}>
    <BarGraph/>
    <Spacer/>
    <BarGraph/>

    </Flex>
    
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>

  </Show>
  
</Grid>
  )
}

export default AdminOverview
