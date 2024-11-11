import { getImageUrl, objectToFormData } from "@/lib/utils";
import useDriver from "@/services/Driver/useDriver";
import APIClient from "@/services/api-client";
import useAuthStore from "@/state-management/auth/store";
import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiCaretRightThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiClient = new APIClient<FormData>("/update_profile_picture");

const EditAccount = () => {
  const queryClient = useQueryClient();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const driver = useDriver([user?.driverId || 0])[0];

  const userDetails = [
    { label: "NIC", value: driver.data?.nic },
    { label: "Email", value: driver.data?.user.email },
    { label: "Contact", value: driver.data?.user.number },
    { label: "Courier Company Name", value: driver.data?.courierCompany },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      mutate(file);
    }
  };

  const { mutate } = useMutation({
    mutationFn: (image: File) =>
      apiClient.update(
        user?.id || 0,
        objectToFormData({ profilePicture: image })
      ),
    onSettled: (res) => {
      toast.dismiss();
      if (res instanceof Error) {
        toast.error("Failed to update profile picture");
      } else {
        // clear all toasts
        toast.success("Profile picture updated successfully");
      }
      queryClient.invalidateQueries({ queryKey: ["drivers", user?.id] });
    },
    // show a loading indicator while the mutation is in progress
    onMutate: () => toast.loading("Updating profile picture"),
  });

  return (
    <>
      <VStack h="23vh" px="8vw" pt="3vh" pb="10vh" borderWidth={2}>
        <HStack w="full" pos="relative" left={-5}>
          <Box
            p={1}
            background="white"
            borderRadius="50%"
            onClick={() => navigate("/driver/account")}
            cursor="pointer"
          >
            <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
          </Box>
          <Text fontWeight="bold" fontSize="xl">
            Account Info
          </Text>
        </HStack>
        <Center>
          {/* --------------- Profile image upload --------------- */}
          {/* <Form onSubmit={() => {}}> */}
          <Input
            type="file"
            display="none"
            ref={inputFileRef}
            onChange={handleImageUpload}
          />
          <Image
            boxSize="100px"
            borderRadius="full"
            objectFit={"cover"}
            src={getImageUrl(driver.data?.user.profilePic)}
            alt="Profile Image"
            onClick={() => (inputFileRef.current as HTMLInputElement).click()}
            cursor={"pointer"}
          />
          {/* <Center
            p={1}
            position="absolute"
            // background="white"
            borderRadius="50%"
            shadow="xl"
            borderWidth={1}
            cursor="pointer"
            onClick={() => (inputFileRef.current as HTMLInputElement).click()}
          > */}
          {/*<Icon as={BsCameraFill} color="primary" /> */}
          {/* </Center> */}
          {/* </Form> */}
        </Center>
      </VStack>
      <Stack p={5} divider={<Divider borderColor={"gray.300"} />}>
        {userDetails.map((detail, index) => (
          <Stack key={index} p={2} cursor="pointer">
            <Text>{detail.label}</Text>
            <Text>{detail.value}</Text>
          </Stack>
        ))}
        <HStack
          justify="space-between"
          p={2}
          cursor="pointer"
          onClick={() => navigate("/driver/account/change-password")}
        >
          <Text>Change Password</Text>
          <Icon as={PiCaretRightThin} boxSize={5} />
        </HStack>
      </Stack>
    </>
  );
};

export default EditAccount;
