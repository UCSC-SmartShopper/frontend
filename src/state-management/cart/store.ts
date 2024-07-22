import { PriceList } from "@/hooks/usePriceLists";
import APIClient from "@/services/api-client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  priceList: PriceList | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;

  incrementQuantity: (priceListId: number) => void;
  decrementQuantity: (priceListId: number) => void;
  syncCart: () => void;
}

const apiClient = new APIClient<CartItem[]>("/carts");

const syncData = (data: CartItem[]) => {
  const syncData = apiClient.create(data);
  console.log("syncData", syncData);
  return data;
};

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item: CartItem) => {
        set((state) =>
          // check if the item is already in the cart replace it with the new item
          {
            console.log("CALLED");
            return state.items.some(
              (cartItem) =>
                cartItem.priceList?.product.id === item.priceList?.product.id
            )
              ? {
                  items: state.items.map((cartItem) =>
                    cartItem.priceList?.product.id ===
                    item.priceList?.product.id
                      ? item
                      : cartItem
                  ),
                }
              : { items: [...state.items, item] };
          }
        );
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.priceList?.id !== productId),
        }));
      },

      incrementQuantity: (priceListId: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.priceList?.id === priceListId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decrementQuantity: (priceListId: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.priceList?.id === priceListId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }));
      },

      syncCart: async () => {
        set((state) => ({ items: syncData(state.items) }));
      },
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
