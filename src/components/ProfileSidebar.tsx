import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ProfileDetail from "./ProfileDetail";

interface ProfileSidebarProps {
    sidebar1: string;
    sidebar2: string;
    sidebar3: string;
    sidebar4: string;
    sidebar5: string;
    sidebar6: string;
}

const ProfileSidebar = ({sidebar1, sidebar2, sidebar3, sidebar4, sidebar5, sidebar6 }: ProfileSidebarProps) => {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [sidebar1, sidebar2, sidebar3, sidebar4, sidebar5, sidebar6];

  return (
    <Flex height="100vh">
      <Box
        w="245px"
        bg="background"
        color="black"
        pt={4}
        pl={4}
        pb={4}
        display="flex"
        flexDirection="column"
      >
        <VStack align="start" spacing={2} w="full">
          {tabs.map((tab, index) => (
            <Flex
              key={index}
              w="full"
              pl={5}
              align="center"
              cursor="pointer"
              onClick={() => setActiveTab(index)}
            >
              <Box
                w="6%"
                h="full"
                bg={activeTab === index ? "primary" : "transparent"}
              />
              <Box
                w="94%"
                h="full"
                bg={activeTab === index ? "white" : "transparent"}
                _hover={{ bg: activeTab === index ? "white" : "white" }}
              >
                <Text
                  fontSize="18px"
                  p={2}
                  color="black"
                >
                  {tab}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
      <Box flex="1" p={8}>
        <ProfileDetail />
      </Box>
    </Flex>
  );
};

export default ProfileSidebar;
