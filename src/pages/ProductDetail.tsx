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
import BackArrow from "../components/PriceComparison/BackArrow";
import PriceComparison from "../components/PriceComparison/PriceComparison";
import ProductDescription from "../components/PriceComparison/ProductDescription";

import usePriceList, { PriceList } from "@/hooks/usePriceLists";
import useProduct from "@/hooks/useProduct";
import useCartStore from "@/state-management/cart/store";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCart from "@/hooks/useCart";
import MiddleContainer from "@/components/Containers/MiddleContainer";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { addItem, removeItem, items: cartItems } = useCartStore();

  const { id } = useParams();
  if (!id) return null;

  const product = useProduct(id);

  const { data: priceLists, isLoading } = usePriceList(id);
  // const cartItems = useCart(localCartItems).data || [];

  const [isLiked, setIsLiked] = useState(false);
  const [selectedPriceList, setSelectedPriceList] = useState<PriceList | null>(
    null
  );

  useEffect(() => {
    // check if the product is already in the cart
    const selectedCartItem = cartItems.find(
      (item) => item.priceList?.product.id === product.data?.id
    );

    // if the product is in the cart, select the price list of the product in the priceList
    const selectedIndex = priceLists?.results.findIndex(
      (item) => item.id === selectedCartItem?.priceList?.id
    );

    if (priceLists) {
      if (selectedIndex && selectedIndex !== -1) {
        console.log("selectedCartItem", selectedIndex);
        setSelectedPriceList(priceLists.results[selectedIndex]);
      } else {
        // if the product is not in the cart, select the first price list
        setSelectedPriceList(priceLists.results[0]);
      }
    }
  }, [priceLists]);

  const priceListInCart = cartItems.find(
    (item) => item.priceList?.product.id === product.data?.id
  );
  const shouldUpdateCart =
    priceListInCart && selectedPriceList?.id !== priceListInCart.priceList?.id;

  if (isLoading) return <Spinner />;
  return (
    <MiddleContainer width="90vw">
      <Box pt={4} pl={20} pr={20} pos={"relative"}>
        <Flex justifyContent={'space-between'}>
          <HStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {product.data?.name}
            </Text>
            <VStack
              ml={"auto"}
              px={3}
              py={2}
              as="button"
              color={isLiked ? "red" : "black"}
              onClick={() => setIsLiked(!isLiked)}
              _hover={{ color: "red", transform: "scale(1.10)" }}
              // _active={{ transform: "scale(1.10)" }}
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
                  : !priceListInCart
                  ? "Add to Cart"
                  : "Remove from Cart"
              }
              checked={!!priceListInCart && !shouldUpdateCart}
              onClick={() => {
                if (!shouldUpdateCart && priceListInCart) {
                  removeItem(priceListInCart.priceList?.id || 0);
                  priceLists && setSelectedPriceList(priceLists.results[0]);
                } else {
                  selectedPriceList &&
                    addItem({
                      priceList: selectedPriceList,
                      quantity: 1,
                    });
                }
              }}
            />
          </Box>
        </Flex>
        {/* <Box
          onClick={() => navigate("/")}
          pos="absolute"
          left={"2vw"}
          top={"5vh"}
          width={"fit-content"}
        >
          <BackArrow />
        </Box> */}
        <Grid templateColumns="40% 60%" gap={6} mt={4}>
          <GridItem>
            <ProductDescription
              topic={product.data?.name}
              detail={product.data?.description}
              image={product.data?.imageUrl}
              selectedPriceList={selectedPriceList}
            />
          </GridItem>
          <GridItem ml={2}>
            {/* <Flex justifyContent="flex-end" mb={6} mt={10}></Flex> */}
            <PriceComparison
              priceLists={priceLists?.results || []}
              selectedPriceList={selectedPriceList}
              setSelectedPriceList={setSelectedPriceList}
            />
          </GridItem>
        </Grid>
      </Box>
    </MiddleContainer>
  );
};

export default ProductDetail;
