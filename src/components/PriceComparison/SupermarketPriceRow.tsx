import { PriceList } from "@/hooks/usePriceLists";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import RatingStars from "../Inputs/Rating";

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
      py={5}
      borderRadius={15}
      w="full"
      bg="gray.100"
      onClick={onClick}
      cursor="pointer"
      divider={<Divider borderColor="gray.400" h="8vh" w="fit-content" />}
    >
      <Image src={priceList?.supermarket?.logo || ""} w="6vw" />
      <VStack gap={3} w="20vw">
        <HStack gap={10} lineHeight={0.1} w="full">
          <Stack>
            <Text fontSize="xs" color="gray">
              Name
            </Text>
            <Heading fontSize="lg">Keells</Heading>
          </Stack>
          <Stack>
            <Text fontSize="xs" color="gray">
              Distance
            </Text>
            <Heading fontSize="lg">2.4 KM</Heading>
          </Stack>
        </HStack>
        <Stack w="full" lineHeight={0.1}>
          <Text fontSize="xs" color="gray">
            Reviews
          </Text>
          <Box>
            <RatingStars value={(priceList?.id * 3) % 5} reviews={(priceList?.id * 19 ) % 40} />
          </Box>
        </Stack>
      </VStack>

      <Text fontSize="xl" fontWeight={700}>
        250.00 LKR
      </Text>
    </HStack>
  );
};

export default SupermarketPriceRow;
