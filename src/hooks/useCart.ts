import APIClient from "@/services/api-client";
import { CartItem } from "@/state-management/cart/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<CartItem[]>("/carts/6");

const useCart = (cartItems: CartItem[]) => {
  return useQuery({
    queryKey: ["cart", cartItems],
    queryFn: () => apiClient.create(cartItems),
    staleTime: 500,
  });
};

export default useCart;
