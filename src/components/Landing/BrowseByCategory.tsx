import { Box, Center, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SimpleSlider, { SliderMethods } from "../SimpleSlider";

const BrowseByCategory = () => {
  const sliderRef = useRef<SliderMethods>(null);

  const nextSlide = () => {
    sliderRef.current?.next();
  };

  const previousSlide = () => {
    sliderRef.current?.previous();
  };

  const config = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const categories = [
    "Beverages",
    "Chilled",
    "Frozen",
    "Grocery",
    "Household",
    "Personal Care",
    "Pharmacy",
    "Snacks",
    "Others",
  ];

  return (
    <Stack w="full" px="14vw" h={500}>
      <HStack>
        <Box w={5} h={45} bg="primary" borderRadius="lg"></Box>
        <Text fontSize="lg" fontWeight={600} color="primary">
          Category
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text fontSize="4xl" fontWeight={600}>
          Browse By Category
        </Text>
        <HStack gap={5}>
          <IconButton
            aria-label="Next"
            icon={<FaArrowLeft />}
            bg="primary"
            color="white"
            width="fit-content"
            onClick={previousSlide}
          />
          <IconButton
            aria-label="Next"
            icon={<FaArrowRight />}
            bg="primary"
            color="white"
            width="fit-content"
            onClick={nextSlide}
          />
        </HStack>
      </HStack>
      <Box w="full">
        <SimpleSlider config={config} ref={sliderRef}>
          {categories.map((category) => (
            <Box key={category}>
              <Center
                height={120}
                margin={2}
                border="1px solid"
                borderRadius="lg"
                padding={5}
              >
                {category}
              </Center>
            </Box>
          ))}
        </SimpleSlider>
      </Box>
    </Stack>
  );
};

export default BrowseByCategory;
