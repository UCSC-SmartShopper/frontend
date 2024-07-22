import APIClient, { FetchResponse } from "@/services/api-client";
import { CartItem } from "@/state-management/cart/store";
import { useQuery } from "@tanstack/react-query";


const apiClient = new APIClient<CartItem[]>("/carts");

const useCart = (cartItems: CartItem[]) => {
  return useQuery({
    queryKey: ["cart", cartItems],
    queryFn: () =>
      apiClient.create(cartItems),
  });
};

export default useCart;
