import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import ActionButton from "../Buttons/ActionButton";
import { PriceList } from "@/hooks/usePriceLists";

interface Props {
  topic: string | undefined;
  detail: string | undefined;
  image: string | undefined;
  selectedPriceList: PriceList | null;
}

const ProductDescription = ({ topic, detail, image,selectedPriceList }: Props) => {
  

  return (
    <Box>
      {/* <Flex>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          {topic}
        </Text>
        <VStack
          px={3}
          py={2}
          as="button"
          color={isLiked ? "red" : "black"}
          onClick={() => setIsLiked(!isLiked)}
          _hover={{ color: "red", transform: "scale(1.10)" }}
          // _active={{ transform: "scale(1.10)" }}
        >
          {isLiked ? <FaHeart fontSize={35} /> : <FaRegHeart fontSize={35} />}
        </VStack>
      </Flex> */}
      <Text fontSize="1xl" mb={4}>
        {detail}
      </Text>
      <Image
        src={image}
        alt="product"
        boxSize={"40vh"}
        border="1px"
        borderColor="gray.200"
      />
      <Divider
        mt={5}
        mb={2}
        borderColor="gray.400"
        alignSelf="flex-start"
        w={"40vh"}
      />
      <HStack>
        <Text fontSize={"lg"}>Selected Store :</Text>
        <Text fontSize={"lg"} fontWeight={600}>{selectedPriceList?.supermarket.name}</Text>
      </HStack>
    </Box>
  );
};

export default ProductDescription;
