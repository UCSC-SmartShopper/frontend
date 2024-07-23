import MiddleContainer from "@/components/Containers/MiddleContainer";
import useCart from "@/hooks/useCart";
import useCartStore from "@/state-management/cart/store";
import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Accordian from "../components/Accordian";
import IconButton from "../components/Buttons/IconButton";
import TextButton from "../components/Buttons/TextButton";
import CartItemCard from "../components/CartItemCard";
import { set } from "react-hook-form";

const CartDetails = () => {
  const { items, setItems } = useCartStore();
  const syncedData = useCart(items);

  useEffect(() => {
    if (items && syncedData.data) {
      // add items to the cart
      console.log("Updated items", syncedData.data);
      setItems(syncedData.data);

      console.log(items)
      console.log(syncedData.data)

    }
  }, [!!syncedData.data]);

  const accordionItems = [
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
  ];
  // return null;

  return (
    <MiddleContainer width="90vw" bg="background">
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(2, 1fr)",
        }}
        h="100%"
        gap={{ base: 4, md: 6, lg: 10 }}
        pt="4vh"
        px="6vw"
      >
        <GridItem h="100%">
          <Flex>
            <Flex flexDirection="column">
              <Heading as="h2" size="lg">
                Your shopping cart
              </Heading>
              <Text>Not ready to checkout? Continue Shopping</Text>
            </Flex>
            <Spacer />

            <IconButton Icon={AddIcon} />
          </Flex>
          <VStack spacing={5} mt={10}>
            {items.map((item, index) => (
              <CartItemCard key={index} cartItem={item} />
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <Heading as="h2" size="lg" mb={10}>
            Order Information
          </Heading>
          <Accordian items={accordionItems} />
          <Spacer />
          <TextButton text="Proceed to checkout" onClick={() => {}} />
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default CartDetails;
