import useOpportunities from "@/hooks/useOpportunities";
import useSupermarket from "@/hooks/useSupermarket";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface SupermarketRowInterface {
  supermarketId: number;
}
const SupermarketAddress = ({ supermarketId }: SupermarketRowInterface) => {
  const supermarket = useSupermarket(supermarketId);
  return (
    <Text as="span" fontWeight="bold">
      {supermarket.data?.address}
      <br />
    </Text>
  );
};

const Deliveries = () => {
  const opportunities = useOpportunities("Delivered");
  const [isRotated, setIsRotated] = useState(false);
  const displayDetails = () => {
    setIsRotated(!isRotated);
  };

  const details = [
    {
      label: "Delivery cost",
      value: 100,
    },
    {
      label: "Number of Stops",
      value: 2,
    },
    { label: "Trip cost", value: 150},
  ];
  console.log("1");
  return (
    <VStack spacing={4} mt={4} w="full" justifyContent="center">
      {opportunities.data?.results.map((opportunity, index) => (
        <Box
          bg="white"
          borderRadius="lg"
          shadow="md"
          p={4}
          w="90vw"
          key={index}
        >
          <HStack>
            <VStack align="start" flex="1">
              <Text fontWeight="bold">{opportunity.deliveryLocation}</Text>
              <Text color="gray.500" fontSize="sm">
                Yesterday at 16:34
              </Text>
            </VStack>
            <Text fontWeight="bold" color="red.500">
              Rs 100
            </Text>
            <IconButton
              onClick={displayDetails}
              aria-label="Go to delivery"
              icon={<ChevronRightIcon />}
              variant="ghost"
              transform={isRotated ? "rotate(90deg)" : "rotate(0deg)"}
            />
          </HStack>

          {isRotated && (
            <Box>
              {details.map((detail, index) => (
                <HStack key={index} justify="space-between">
                  <Text>{detail.label}</Text>
                  <Text>{detail.value}</Text>
                </HStack>
              ))}
              {opportunities.data?.results[0].opportunitysupermarket.map(
                (i, index) => (
                  <HStack justify="space-between">
                    <Text>Supermarkets</Text>
                    <SupermarketAddress
                      key={index}
                      supermarketId={i.supermarketId}
                    />
                  </HStack>
                )
              )}
               {/* <Text>hi</Text> */}
            </Box>
          )}
        </Box>
      ))}
    </VStack>
  );
};

export default Deliveries;
