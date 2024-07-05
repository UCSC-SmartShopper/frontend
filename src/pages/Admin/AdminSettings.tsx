import { useState } from 'react';
import { Grid, GridItem, Flex, Box, Center, Text, VStack, Spacer, Button, Image, Input,Icon} from "@chakra-ui/react";
import AdminNavBar from "../../components/AdminNavBar";
import SideBar from "../../components/SideBar";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";


const AdminSettings = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);


  const handleToggleProfileDetails = () => {
    setShowProfileDetails(prevState => !prevState);
  };
  const handleToggleTermsDetails = () => {
    setShowTermsOfUse(prevState => !prevState);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" 
                        "nav"
                      "main"`,
          lg: `"header header"
                  "nav main"`,
        }}
        gridTemplateRows={{ base: 'auto auto auto', lg: 'auto auto' }}
        gridTemplateColumns={{ base: '1fr', lg: '280px 1fr' }}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='lightblue' area={'header'}>
          <AdminNavBar />
        </GridItem>
        <GridItem pl='2' area={'nav'}>
          <SideBar />
        </GridItem>
        <GridItem pl='2' area={'main'} my={10} mx={300}>
          <Box boxShadow='md'>
            <Box boxShadow="sm">
              <Flex px={5} py={2}>
                <Center>
                  <Text>Profile</Text>
                </Center>
                <Spacer />
                <Button onClick={handleToggleProfileDetails}>
                    <Icon as={showProfileDetails ? FaChevronUp : FaChevronDown}/>
                </Button>
              </Flex>
            </Box>
            {showProfileDetails && (
              <Box my={5} px={10} boxShadow="sm">
                <VStack>
                  <Image
                    src='https://via.placeholder.com/150'
                    alt='Product Image'
                    boxSize='70px'
                    objectFit='cover'
                    borderRadius="50%"
                    mr={4}
                  />
                  <Text fontSize="2xl">Kaveesha Hettige</Text>

                  <Box my={3}>
                    <Text fontSize='md' mb={1}>Email</Text>
                    <Input placeholder='admin@gmail.com' />
                  </Box>

                  <Box my={3}>
                    <Text fontSize='md' mb={1}>Current Password</Text>
                    <Input placeholder='*********' />
                  </Box>

                  <Box my={3}>
                    <Text fontSize='md' mb={1}>New Password</Text>
                    <Input placeholder='*********' />
                  </Box>

                  <Box my={3}>
                    <Button bg='primary' size='sm'>Save Changes</Button>
                  </Box>
                </VStack>
              </Box>
            )}
            <Box boxShadow="sm">
              <Flex px={5} py={2}>
                <Center>
                  <Text>Terms of Use</Text>
                </Center>
                <Spacer />
                <Button onClick={handleToggleTermsDetails}>
                    <Icon as={showTermsOfUse ? FaChevronUp : FaChevronDown}/>
                </Button>
              </Flex>
            </Box>

            {showTermsOfUse && (
              <Box my={5} px={10}>
                Term of Use
              </Box>
            )}
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default AdminSettings;
