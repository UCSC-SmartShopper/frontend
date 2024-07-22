import { PriceList } from "@/hooks/usePriceLists";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";

interface Props {
  priceList: PriceList;
  selectedPriceList: PriceList | null;
  onClick: () => void;
}

const SupermarketPriceRow = ({
  priceList,
  selectedPriceList,
  onClick,
}: Props) => {
  if (!priceList) return null;

  return (
    <HStack
      borderColor="primary"
      borderWidth={selectedPriceList?.id === priceList.id ? "2px" : ""}
      justifyContent={"space-between"}
      px={10}
      py={3}
      borderRadius={15}
      w="full"
      bg="gray.100"
      onClick={onClick}
      cursor="pointer"
      divider={<Divider borderColor="gray.400" h="8vh" w="fit-content" />}
    >
      <Image src={priceList?.supermarket?.logo || ""} w="5vw" />
      <Text fontSize="18px" fontWeight="semibold" textAlign={"center"}>
        {priceList.price}
      </Text>
      <Text fontSize="18px" fontWeight="semibold">
        2.4 Km
      </Text>
      <Button
        height={26}
        bg="#E46C0A"
        borderColor="#E46C0A"
        color="#FFFFFF"
        borderRadius="15px"
        border="2px"
        _hover={{ color: "#E46C0A", bg: "#FFFFFF", borderColor: "#E46C0A" }}
        _active={{
          color: "#E46C0A",
          bg: "#FFFFFF",
          transform: "scale(0.98)",
          borderColor: "#E46C0A",
        }}
      >
        Reviews
      </Button>
      <Box
        fontSize="26px"
        as="button"
        _hover={{ color: "black", transform: "scale(1.10)" }}
        _active={{ color: "black", transform: "scale(1.10)" }}
      >
        <BsCartPlus />
      </Box>
    </HStack>
  );
};

export default SupermarketPriceRow;
