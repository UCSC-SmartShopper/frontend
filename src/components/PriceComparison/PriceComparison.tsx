import { Box, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { StorePrice } from "@/hooks/usePriceLists";

interface Props {
  priceLists: StorePrice[];
  selectedStorePrice: StorePrice | null;
  setStorePrice: (priceList: StorePrice) => void;
}

const PriceComparison = ({
  priceLists,
  selectedStorePrice,
  setStorePrice,
}: Props) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        Price Comparison
      </Text>
      <VStack w="full" spacing={4}>
        {priceLists?.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            storePrice={item}
            selectedPriceList={selectedStorePrice}
            onClick={() => setStorePrice(item)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
