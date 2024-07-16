import { Box, Center, Flex, Spacer, Badge } from "@chakra-ui/react";

import React from "react";

interface props {
  image: string;
  name: string;
  description: string;
  available: boolean;
}

const ProductPreviewCard = ({ image, name, description, available }: props) => {
  return (
    <Box className="product-card border rounded m-5" borderColor={"primary"}>
      <Flex width="auto">
        <Box className="m-2" borderRadius="lg">
          <img src={image} alt={name} className="product-image h-20 w-20" />
        </Box>
        <Spacer />
        <Box className="m-5">
          <h3 className="product-name">{name}</h3>
          <p className="product-description text-gray">{description}</p>
        </Box>
        <Spacer />
        <Box
          className="m-5"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Badge
            variant="outline"
            colorScheme="green"
            className="rounded p-1"
            borderRadius="md"
          >
            {available ? "Available" : "Out of Stock"}
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductPreviewCard;
