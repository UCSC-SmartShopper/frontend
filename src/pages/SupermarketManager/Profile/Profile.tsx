import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SupermarketDetails from "./SupermarketDetails";
import IconButton from "@/components/Buttons/TextButton";
import { BiEditAlt } from "react-icons/bi";
import useAuthStore from "@/state-management/auth/store";

const Profile = () => {
  const user = useAuthStore().user;
  console.log(user);

  return (
    <>
      <Box>
        <Box m={5} p={5} borderWidth={1} borderRadius="10px" boxShadow="lg">
          <Flex align={"center"} justify={"center"} flexDirection={"column"}>
            <Heading fontSize="2xl" color="primary" mb={2}>
              Profile Settings
            </Heading>
            <Divider />
            <Grid templateColumns={"4fr 3fr"} w={"full"} gap={5}>
              <Box
                mt={5}
                w={"full"}
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius={10}
              >
                <Box display={"flex"} justifyContent={"right"} px={5} pt={5} gap={5}>
                  <Button
                    bg={"primary"}
                    size="sm"
                    color={"white"}
                    _hover={{ bg: "primary" }}
                  >
                    Edit Profile
                  </Button>
                  <Button
                    bg={"primary"}
                    size="sm"
                    color={"white"}
                    _hover={{ bg: "primary" }}
                  >
                    change Password
                  </Button>
                </Box>
                <Box
                  mt={5}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box>
                    {/* if image not available show default image */}
                    
                    <Avatar
                      size={"2xl"}
                      name={user?.name}
                      src={user?.profilePic}
                    />

                  </Box>
                </Box>
                <Box p={5} w={"full"}>
                  {/* <Heading fontSize="2xl" mb={1}>
                    ID: {user?.id}
                  </Heading> */}
                  <Box mb={1} w={"full"}>
                    <Text>Name</Text>
                    <Input placeholder="medium size" size="md" value={user?.name}/>
                  </Box>
                  <Box mb={1}>
                    <Text>E Mail</Text>
                    <Input placeholder="medium size" size="md" value={user?.email}/>
                  </Box>
                  <Box mb={1}>
                    <Text>Phone Number</Text>
                    <Input placeholder="medium size" size="md" value={user?.number}/>
                  </Box>
                </Box>
              </Box>
              <SupermarketDetails />
            </Grid>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
