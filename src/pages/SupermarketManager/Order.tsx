import OrderTable from "@/components/OrderTable";
import MainContainer from "@/components/MainContainer";
import { Box, Text } from "@chakra-ui/react";
import OrderOverView from "@/components/SuperMarketManager/OrderOverview";
import OrderItems from "@/components/SuperMarketManager/OrderItems";

const OrderList = () => {
  
    return (
        <>
            <Box
      bg="background"
      h="100%"
      pt={7}
      pb={10}
      pl={20}
      pr={20}
    >
      <OrderOverView status="completed"/>
      <OrderItems  />
    </Box>
        </>
    );
};

export default OrderList;