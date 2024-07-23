import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import AddToCartButton from "../components/Buttons/AddToCartButton";
import PriceComparison from "../components/PriceComparison/PriceComparison";
import ProductDescription from "../components/PriceComparison/ProductDescription";

import MiddleContainer from "@/components/Containers/MiddleContainer";
import usePriceLists, { StorePrice } from "@/hooks/usePriceLists";
import useProduct, { Product } from "@/hooks/useProduct";
import useCartStore from "@/state-management/cart/store";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { addItem, removeItem, items: cartItems } = useCartStore();

  const { id } = useParams();
  if (!id) return null;

  const product = useProduct(Number(id));

  const {
    data: priceLists,
    isLoading,
    error,
  } = usePriceLists({ productId: id });

  const [isLiked, setIsLiked] = useState(false);
  const [selectedStorePrice, setStorePrice] = useState<StorePrice | null>(null);

  useEffect(() => {
    if (priceLists) {
      // find the index of the priceLists that matches
      const index = priceLists.results.findIndex(
        (i) => i.id === cartItemInCart?.storePrice?.id
      );

      if (index !== -1) {
        setStorePrice(priceLists.results[index]);
      } else {
        // if the product is not in the cart, select the first price list
        setStorePrice(priceLists.results[0]);
      }
    }
  }, [priceLists]);

  // get the the cart Item that is already added to the cart
  const cartItemInCart = cartItems.find(
    (i) => i.storePrice?.productId || "" === id
  );

  // check if the product is in the cart but selected store price are different
  const shouldUpdateCart =
    cartItemInCart && selectedStorePrice?.id !== cartItemInCart.storePrice?.id;


  if (isLoading) return <Spinner />;
  if (error) return <Text>Error</Text>;
  if (!selectedStorePrice) return null;

  return (
    <MiddleContainer width="90vw">
      <Box pt="4vh" px="6vw" pos={"relative"}>
        <Flex justifyContent={"space-between"}>
          <HStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {product.data?.name}
            </Text>
            <VStack
              px={3}
              py={2}
              as="button"
              color={isLiked ? "red" : "black"}
              onClick={() => setIsLiked(!isLiked)}
              _hover={{ color: "red", transform: "scale(1.10)" }}
            >
              {isLiked ? (
                <FaHeart fontSize={35} />
              ) : (
                <FaRegHeart fontSize={35} />
              )}
            </VStack>
          </HStack>
          <Box mt={5}>
            <AddToCartButton
              text={
                shouldUpdateCart
                  ? "Update the Cart"
                  : cartItemInCart
                  ? "Remove from Cart"
                  : "Add to Cart"
              }
              checked={!!cartItemInCart && !shouldUpdateCart}
              onClick={() => {
                if (!shouldUpdateCart && cartItemInCart) {
                  removeItem(cartItemInCart.storePrice?.id || 0);
                  priceLists && setStorePrice(priceLists.results[0]);
                } else {
                  selectedStorePrice &&
                    addItem({
                      storePrice: selectedStorePrice,
                      quantity: 1,
                    });
                }
              }}
            />
          </Box>
        </Flex>
        <Grid templateColumns="40% 60%" gap={6} mt={4}>
          <GridItem>
            <ProductDescription
              product={product.data || ({} as Product)}
              selectedStorePrice={selectedStorePrice}
            />
          </GridItem>
          <GridItem ml={2}>
            <PriceComparison
              priceLists={priceLists?.results || []}
              selectedStorePrice={selectedStorePrice}
              setStorePrice={setStorePrice}
            />
          </GridItem>
        </Grid>
      </Box>
    </MiddleContainer>
  );
};

export default ProductDetail;
