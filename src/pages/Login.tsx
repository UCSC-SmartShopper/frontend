import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

import GroceryImage from "../assets/signup-login/grocery-shopping-amico.svg";
import FacebookIcon from "../assets/social-media-icons/facebook.svg";
import GoogleIcon from "../assets/social-media-icons/google.svg";

import LoginButton from "../components/Buttons/LoginButton";
import SubmitButton from "../components/Buttons/SubmitButton";
import MiddleContainer from "../components/Containers/MiddleContainer";
import LoginInput from "../components/Inputs/LoginInput";

import APIClient from "@/services/api-client";
import useAuthStore, {
  Credentials,
  LoginResponse,
} from "@/state-management/auth/store";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import LinkButton from "../components/Buttons/LinkButton";
import ErrorText from "../components/Errors/ErrorText";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
// import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email_or_number: z
    .string()
    .regex(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$|^0\d{9}$/,
      "Enter valid email address or phone number"
    ),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Validate the user and save the user
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (data: FormData) => {
    const credentials: Credentials = {
      email_or_number: data.email_or_number,
      password: data.password,
    };
    const apiClient = new APIClient<LoginResponse>("/login");

    apiClient
      .login(credentials)
      .then((res) => {
        if (res.user) {
          queryClient.resetQueries();
          toast.success("Login successful");
          login(res);
          navigate("/");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <MiddleContainer>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "5fr 6fr",
          xl: "1fr 1fr",
        }}
        h="100%"
      >
        <GridItem h={{ base: "35vh", md: "100%" }}>
          <Center h="100%" p="2vw">
            <Image src={GroceryImage} w={{ base: "60vw", md: "25vw" }} />
          </Center>
        </GridItem>

        <GridItem px="2vw">
          <Stack
            h={{ base: "auto", md: "full" }}
            w={{ base: "80vw", md: "full" }}
            justifyContent="center"
            mx="auto"
          >
            <VStack alignItems={{ base: "center", md: "flex-start" }}>
              <Text fontSize="lg" fontWeight="bold">
                Welcome to
              </Text>
              <Box display="inline" fontSize="2xl" fontWeight="bold">
                <Text as="span">Smart</Text>
                <Text color="primary" as="span">
                  Shopper
                </Text>
              </Box>
            </VStack>

            <form onSubmit={handleSubmit(handleLogin)}>
              <LoginInput
                register={register("email_or_number")}
                type="text"
                placeholder="Email or Phone Number"
                icon={FaUser}
                // label="Email"
              />
              {errors.email_or_number && (
                <ErrorText>{errors.email_or_number.message}</ErrorText>
              )}
              <LoginInput
                register={register("password")}
                type="password"
                placeholder="Password"
                icon={FaLock}
                // label="Password"
              />
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}

              <LinkButton to="/forgot-password" className="mt-3 ml-1">
                Forgot Password?
              </LinkButton>

              <SubmitButton className="my-3">Login</SubmitButton>
            </form>

            <Text ml={2} fontSize={14}>
              Don't have an account?{" "}
              <LinkButton to="/signup" className="mt-3 ml-1">
                Register
              </LinkButton>
            </Text>

            <Flex align="center" mt={3}>
              <Box flex="1" h="1px" bg="gray.300"></Box>
              <Box px={2}>or continue with</Box>
              <Box flex="1" h="1px" bg="gray.300"></Box>
            </Flex>

            <HStack marginTop={2}>
              <LoginButton
                text={{ base: "", md: "Google" }}
                image={GoogleIcon}
              />
              <LoginButton
                text={{ base: "", md: "Facebook" }}
                image={FacebookIcon}
              />
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default Login;
