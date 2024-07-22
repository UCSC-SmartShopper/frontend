import { Box, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { PriceList } from "@/hooks/usePriceLists";

interface Props {
  priceLists: PriceList[];
  selectedPriceList: PriceList | null;
  setSelectedPriceList: (priceList: PriceList) => void;
}

const PriceComparison = ({
  priceLists,
  selectedPriceList,
  setSelectedPriceList,
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
            priceList={item}
            selectedPriceList={selectedPriceList}
            onClick={() => setSelectedPriceList(item)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
