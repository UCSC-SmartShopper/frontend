import React, { useRef } from "react";
import {
  Heading,
  Flex,
  Box,
  Center,
  Text,
  VStack,
  Select,
  Icon,
  Button,
  Image,
  Input,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { CiImageOn, CiEdit } from "react-icons/ci";
import useAdvertisements from "@/hooks/useAdvertisements";

const AdminAdvertisements: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { data: Advertisements } = useAdvertisements();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIconClick = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <>
      <VStack spacing={10} my={10} px={10} w="full">
        <Box w="full">
          <Heading size="lg" mb={6}>
            Publish New Advertisement
          </Heading>
          <Box
            p={8}
            shadow="md"
            borderWidth="1px"
            borderRadius={15}
            w="full"
            bg="white"
          >
            <Flex w="full" gap={8} align="center">
              <Box
                w="30%"
                borderRadius="10"
                borderWidth="2px"
                borderColor={"primary"}
                p={4}
                cursor="pointer"
                onClick={handleIconClick}
                _hover={{ bg: "gray.50" }}
              >
                <Center>
                  <VStack>
                    <Icon as={CiImageOn} boxSize={10} color={"primary"} />
                    <Text fontSize="lg">Upload Banner</Text>
                  </VStack>
                </Center>
                <input
                  type="file"
                  ref={inputFileRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </Box>
              <Stack spacing={4} direction="row" flex="1">
                <Box flex="1">
                  <Text fontSize="md">From:</Text>
                  <Input type="date" />
                </Box>
                <Box flex="1">
                  <Text fontSize="md">To:</Text>
                  <Input type="date" />
                </Box>
                <Box flex="1">
                  <Text fontSize="md">Priority:</Text>
                  <Select placeholder="Select priority">
                    <option value="low">Low</option>
                    <option value="medium" selected>Medium</option>
                    <option value="high">High</option>
                  </Select>
                </Box>
                <Box flex="1">
                  <Button bg="primary" size="lg">
                    Publish
                  </Button>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Box>

        <Box w="full">
          <Heading size="lg" mb={6}>
            Current Advertisements
          </Heading>
          <Stack spacing={6}>
          {(Advertisements && Array.isArray(Advertisements) ? Advertisements : []).map(
          (ad, index) => (
                <Box
                  key={index}
                  p={6}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius={15}
                  w="full"
                  bg="white"
                >
                  <Flex justify="space-between" align="center" mb={4}>
                    <Text fontSize="md">From: {ad.startDate}</Text>
                    <Text fontSize="md">To: {ad.endDate}</Text>
                    <Text fontSize="md">Priority: {ad.priority}</Text>
                  </Flex>
                  <Image
                    src="https://via.placeholder.com/150"
                    alt="Advertisement Banner"
                    borderRadius={10}
                    mb={4}
                  />
                  <Flex justify="flex-end">
                    <Button bg="primary" size="md" onClick={onOpen}>
                      <Icon as={CiEdit} />
                      <Text px={2}>Edit</Text>
                    </Button>
                  </Flex>
                </Box>
              ))}
          </Stack>
        </Box>
      </VStack>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Advertisement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Image src="https://via.placeholder.com/150" />
              <Input placeholder="From" type="date" />
              <Input placeholder="To" type="date" />
              <Select placeholder="Priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminAdvertisements;
