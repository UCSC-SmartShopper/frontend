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
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

import LoginInput from "./Inputs/LoginInput";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useState } from "react";
import ActionButton from "./Buttons/ActionButton";

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
              <Input
                placeholder="First name"
                bg="background"
                isReadOnly={!isEditable}
              />
            </FormControl>
            <FormControl id="last-name">
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                bg="background"
                isReadOnly={!isEditable}
              />
            </FormControl>
          </HStack>

          <HStack spacing={3} mb={3}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <LoginInput
                register={register("email")}
                type="email"
                placeholder="Email"
                icon={FaEnvelope}
              />
            </FormControl>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaAddressBook} />
                </InputLeftElement>
                <Input
                  placeholder="Address"
                  bg="background"
                  isReadOnly={!isEditable}
                />
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
                icon={FaLock}
              />
            </FormControl>
            <FormControl>
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="New Password"
                icon={FaLock}
              />
            </FormControl>
            <FormControl>
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="Confirm New Password"
                icon={FaLock}
              />
            </FormControl>
          </VStack>
        </VStack>
      </FormControl>
      <center>
        <Button
          onClick={toggleEdit}
          mb={20}
          mt={10}
          variant="outline"
          color={primaryColor}
          borderColor={primaryColor}
          border="2px"
          borderRadius="10px"
          fontSize="15px"
          fontWeight="bold"
          bg={whiteColor}
          _hover={{ bg: primaryColor, color: whiteColor }}
          _active={{
            bg: primaryColor,
            color: whiteColor,
            transform: "scale(0.98)",
            borderColor: primaryColor,
          }}
        >
          {isEditable ? "Save" : "Edit"}
        </Button>
      </center>
    </Box>
  );
};

export default ProfileDetail;
