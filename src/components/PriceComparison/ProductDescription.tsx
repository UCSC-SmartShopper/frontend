import { PriceList } from "@/hooks/usePriceLists";
import { Product } from "@/hooks/useProduct";
import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
  selectedPriceList: PriceList | null;
}

const ProductDescription = ({ product, selectedPriceList }: Props) => {
  return (
    <Box>
      <Text fontSize="1xl" mb={4}>
        {product.description}
      </Text>
      <Image
        src={product.imageUrl}
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
        w={"50vh"}
      />
      <HStack>
        <Text fontSize={"lg"}>Selected Store :</Text>
        <Text fontSize={"lg"} fontWeight={600}>
          {selectedPriceList?.supermarket.name}
        </Text>
      </HStack>
    </Box>
  );
};

export default ProductDescription;
