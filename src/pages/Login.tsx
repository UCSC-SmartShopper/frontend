import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

import GroceryImage from "../assets/login/grocery-shopping-amico.svg";
import FacebookIcon from "../assets/social-media-icons/facebook.svg";
import GoogleIcon from "../assets/social-media-icons/google.svg";

import LoginButton from "../components/Buttons/LoginButton";
import LoginInput from "../components/Inputs/LoginInput";
import MiddleContainer from "../components/Containers/MiddleContainer";
import SubmitButton from "../components/Buttons/SubmitButton";

const Login = () => {
  return (
    <MiddleContainer>
      <Grid gridTemplateColumns="1fr 1fr" h="100%">
        <GridItem h="100%">
          <Center h="100%">
            <Image src={GroceryImage} />
          </Center>
        </GridItem>

        <GridItem px={55} py={10}>
          <VStack alignItems="flex-start">
            <Text fontSize="lg" fontWeight="bold">
              {" "}
              Welcome to
            </Text>
            <Box display="inline" fontSize="2xl" fontWeight="bold">
              <Text as="span">Smart</Text>
              <Text color="primary" as="span">
                Shopper
              </Text>
            </Box>
          </VStack>

          <form>
            <LoginInput
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
              label="Email"
            />
            <LoginInput
              type="password"
              placeholder="Password"
              icon={FaLock}
              label="Password"
            />

            {/* <Button
              type="submit"
              width="full"
              bg="secondary"
              mt={3}
              color="white"
            >
              Login
            </Button> */}
            <SubmitButton className="my-3">Login</SubmitButton>
          </form>

          <Text mt={3}>
            Don't have an account?{" "}
            <Button variant="link" color="primary">
              Register
            </Button>
          </Text>

          <Flex align="center" mt={3}>
            <Box flex="1" h="1px" bg="gray.300"></Box>
            <Box px={2}>or</Box>
            <Box flex="1" h="1px" bg="gray.300"></Box>
          </Flex>

          <HStack marginTop={2}>
            <LoginButton text="Login with Google" image={GoogleIcon} />
            <LoginButton text="Login with Facebook" image={FacebookIcon} />
          </HStack>
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default Login;
