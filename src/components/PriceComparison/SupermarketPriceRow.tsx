import { PriceList } from "@/hooks/usePriceLists";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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
    <Flex
      align="center"
      gap="40px"
      alignSelf="flex-start"
      mb={4}
      bg={selectedPriceList?.id === priceList.id ? "red" : ""}
      onClick={onClick}
      cursor="pointer"
    >
      <Image src={priceList?.supermarket?.logo || ""} w="5vw" />
      <Text fontSize="18px" fontWeight="semibold">
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
    </Flex>
  );
};

export default SupermarketPriceRow;
