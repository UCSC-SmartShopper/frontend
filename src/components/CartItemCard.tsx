import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import useCartStore, { CartItem } from "@/state-management/cart/store";
import QuantityChanger from "./QuantityChanger";
import SupermarketLogoContainer from "./SupermarketLogoContainer";
import { useNavigate } from "react-router-dom";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const navigate = useNavigate();
  const removeItem = useCartStore((state) => state.removeItem);
  if (!cartItem.priceList) return null;

  return (
    <Card
      overflow="hidden"
      variant="outline"
      borderColor="gray.200"
      w="full"
      p={4}
    >
      <Grid
        templateColumns={{ base: "1fr", sm: "auto 1fr auto auto" }}
        gap={4}
        alignItems="center"
      >
        <GridItem>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={cartItem.priceList?.product.imageUrl}
            alt={cartItem.priceList?.product.name}
          />
        </GridItem>
        <GridItem>
          <Box p={2}>
            <Heading size="md">{cartItem.priceList?.product.name}</Heading>
            <SupermarketLogoContainer />
            <Text
              fontSize="sm"
              fontWeight={600}
              color="primary"
              onClick={() => navigate("/products/"+cartItem.priceList?.product.id)}
              cursor="pointer"
            >
              Change Supermarket
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <QuantityChanger cartItem={cartItem} />
        </GridItem>
        <GridItem>
          <DeleteIcon
            onClick={() => removeItem(cartItem.priceList?.id || -1)}
            cursor="pointer"
            // color="red.500"
            boxSize={6}
            _hover={{ color: "red.600" }}
          />
        </GridItem>
      </Grid>
    </Card>
  );
};

export default CartItemCard;
