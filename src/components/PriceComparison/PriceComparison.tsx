import { Box, Divider, Text, VStack } from "@chakra-ui/react";

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
      <VStack
        w="full"
        spacing={4}
        divider={
          <Divider borderColor="gray.400" alignSelf="flex-start" w={570} />
        }
      >
        {priceLists?.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            priceList={item}
            selectedPriceList={selectedPriceList}
            onClick={() => setSelectedPriceList(item)}
          />
        ))}
        {/* <SupermarketPriceRow
          image={KeelsIcon}
          price="233.00 LKR"
          distance="2.3Km"
        />
        <SupermarketPriceRow
          image={SparIcon}
          price="240.00 LKR"
          distance="2.1Km"
        />
        <SupermarketPriceRow
          image={ArpicoIcon}
          price="230.00 LKR"
          distance="3.3Km"
        /> */}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
