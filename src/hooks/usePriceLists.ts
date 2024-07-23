import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface StorePrice {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
  discount: number;
}

const apiClient = new APIClient<StorePrice>("/storeprices");

// get StorePrice[] for a product
const usePriceLists = ({ productId }: { productId: string }) => {
  return useQuery({
    queryKey: ["store_prices_for_product", productId],
    queryFn: () => apiClient.getAll({ params: { productId } }),
  });
};

export default usePriceLists;
