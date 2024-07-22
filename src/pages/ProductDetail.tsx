import { Box, Grid, GridItem } from "@chakra-ui/react";

import AddToCartButton from "../components/Buttons/AddToCartButton";
import BackArrow from "../components/PriceComparison/BackArrow";
import PriceComparison from "../components/PriceComparison/PriceComparison";
import ProductDescription from "../components/PriceComparison/ProductDescription";

import useProduct from "@/hooks/useProduct";
import useCartStore from "@/state-management/cart/store";
import { Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import usePriceList, { PriceList } from "@/hooks/usePriceLists";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { addItem, removeItem, items: cartItems } = useCartStore();

  const { id } = useParams();
  if (!id) return null;

  const product = useProduct(id);

  const { data: priceLists, isLoading } = usePriceList(id);

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
    <Box pt={4} pl={20} pr={20}>
      <Box fontSize="28px" onClick={() => navigate("/")}>
        <BackArrow />
      </Box>
      <Grid templateColumns="45% 55%" gap={6} mt={4}>
        <GridItem>
          <ProductDescription
            topic={product.data?.name}
            detail={product.data?.description}
            image={product.data?.imageUrl}
          />
        </GridItem>
        <GridItem ml={2}>
          <Box alignSelf="flex-start" mb={6} mt={10}>
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
          <PriceComparison
            priceLists={priceLists?.results || []}
            selectedPriceList={selectedPriceList}
            setSelectedPriceList={setSelectedPriceList}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
