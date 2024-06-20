import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
  Heading,
  Divider,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdOutlineLock, MdOutlineEmail } from "react-icons/md";

import LoginInput from "./Inputs/LoginInput";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const ProfileDetail = () => {
  const {
    register,
    formState: {},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Box
      pl={16}
      pt={12}
      pr={12}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading size="md" mb={6} color="primary">
        Profile Details
      </Heading>
      <FormControl isRequired>
        <VStack spacing={4} align="stretch">
          <HStack spacing={3}>
            <FormControl id="first-name">
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" isReadOnly={!isEditable} />
            </FormControl>
            <FormControl id="last-name">
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" isReadOnly={!isEditable} />
            </FormControl>
          </HStack>

          <HStack spacing={3} mb={3}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <LoginInput
                register={register("email")}
                type="email"
                placeholder="Email"
                icon={MdOutlineEmail}
              />
            </FormControl>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaRegAddressBook} />
                </InputLeftElement>
                <Input placeholder="Address" isReadOnly={!isEditable} />
              </InputGroup>
            </FormControl>
          </HStack>

          <Divider />

          <Heading size="s" fontWeight="medium" mt={0}>
            Password Changes
          </Heading>
          <VStack spacing={2}>
            <FormControl>
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="Current Password"
                icon={MdOutlineLock}
              />
            </FormControl>
            <FormControl>
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="New Password"
                icon={MdOutlineLock}
              />
            </FormControl>
            <FormControl>
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="Confirm New Password"
                icon={MdOutlineLock}
              />
            </FormControl>
          </VStack>
        </VStack>
      </FormControl>
      <center>
        {!isEditable ? (
          <Button
            w={140}
            onClick={toggleEdit}
            mb={20}
            mt={10}
            variant="outline"
            color="white"
            borderColor="primary"
            border="2px"
            borderRadius="10px"
            fontSize="15px"
            fontWeight="bold"
            bg="primary"
            _hover={{ bg: "white", color: "primary" }}
            _active={{
              bg: "white",
              color: "primary",
              transform: "scale(0.98)",
              borderColor: "primary",
            }}
          >
            Edit
          </Button>
        ) : (
          <HStack spacing={4} mb={20} mt={10} ml={300}>
              <Button
                w={140}
                onClick={toggleEdit}
                variant="outline"
                color="white"
                borderColor="primary"
                border="2px"
                borderRadius="10px"
                fontSize="15px"
                fontWeight="bold"
                bg="primary"
                _hover={{ bg: "white", color: "primary" }}
                _active={{
                  bg: "white",
                  color: "primary",
                  transform: "scale(0.98)",
                  borderColor: "primary",
                }}
              >
                Cancel
              </Button>
              <Button
                w={140}
                onClick={toggleEdit}
                variant="outline"
                color="white"
                borderColor="primary"
                border="2px"
                borderRadius="10px"
                fontSize="15px"
                fontWeight="bold"
                bg="primary"
                _hover={{ bg: "white", color: "primary" }}
                _active={{
                  bg: "white",
                  color: "primary",
                  transform: "scale(0.98)",
                  borderColor: "primary",
                }}
              >
                Save
              </Button>
          </HStack>
        )}
      </center>
    </Box>
  );
};

export default ProfileDetail;
