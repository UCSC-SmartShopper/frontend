import {
  Box,
  Center,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slide from "../../components/Landing/Slide";
import ProductGrid from "../../components/ProductGrid";
import SimpleSlider from "../../components/SimpleSlider";

import SmartListsImage from "../../assets/landing/ecommerce-checkout-laptop-animate.svg";
import FastDeliveryImage from "../../assets/landing/in-no-time-animate (1).svg";
import BestPricesImage from "../../assets/landing/online-ads-animate.svg";
import Footer from "../../components/Footer";
import AdvertisementGrid from "../../components/Landing/AdvertisementGrid";
import BestSellingProducts from "../../components/Landing/BestSellingProducts";
import BrowseByCategory from "../../components/Landing/BrowseByCategory";
import Section from "../../components/Landing/Section";
import Navbar from "../../components/Navbar";
import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const ConsumerHome = () => {
  return (
    <>
      <Show below="md">
        <Navbar />
      </Show>

      <Box w="100%" h="90vh" className="w-[100vw] h-[90vh] overflow-x-hidden">
        <VStack
          justifyContent="center"
          alignItems="center"
          gap={"5vh"}
          pt="5vh"
        >
          <VStack
            boxShadow={"md"}
            borderWidth={1}
            borderRadius={15}
            w="75vw"
            py={5}
            gap={5}
          >
            <Center as="form">
              <InputGroup borderColor="primary" w="80%">
                <InputLeftElement>
                  <Icon as={IoSearchSharp} color="primary" />
                </InputLeftElement>
                <Input
                  // value={searchQuery}
                  // onChange={(e) => {
                  //   setSearchQuery(e.target.value);
                  // }}
                  placeholder="Search..."
                  borderRadius="full"
                />
              </InputGroup>
            </Center>
            <FilterProducts />
          </VStack>
        <Stack spacing={3}>
          <Select placeholder="extra small size" size="xs" />
          <Select placeholder="small size" size="sm" />
          <Select placeholder="medium size" size="md" />
          <Select placeholder="large size" size="lg" />
        </Stack>
          <ProductGrid productQuery={{} as ProductQuery} />
          {/* <BrowseByCategory /> */}
          {/* <AdvertisementGrid /> */}
          {/* <BestSellingProducts /> */}
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default ConsumerHome;

const FilterProducts = () => {
  const filters = [
    {
      label: "Category",
      values: ["Electronics", "Clothing", "Shoes", "Food", "Furniture"],
    },
    { label: "Price", values: ["Low to High", "High to Low"] },
    { label: "Sort", values: ["Newest", "Oldest", "Best Selling"] },
  ];

  return (
    <HStack w="full" gap={10} px={10}>
      {filters.map((filter) => (
        <Stack w="full" spacing={3}>
          <Text>{filter.label}</Text>
          <Select size="sm">
            {filter.values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </Stack>
      ))}
    </HStack>
  );
};
