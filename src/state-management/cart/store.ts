import { StorePrice } from "@/hooks/usePriceLists";
import APIClient from "@/services/api-client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  storePrice: StorePrice | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;

  incrementQuantity: (priceListId: number) => void;
  decrementQuantity: (priceListId: number) => void;
  syncCart: () => void;
}

const apiClient = new APIClient<CartItem[]>("/carts/6");

const syncData = (data: CartItem[]) => {
  const syncData = apiClient.create(data);
  console.log("syncData", syncData);
  return data;
};

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      setItems: (items: CartItem[]) => {
        set({ items });
      },

      addItem: (newCartItem: CartItem) => {
        set((state) =>
          // check if the item is already in the cart replace it with the new item
          {
            return state.items.some(
              (i) =>
                i.storePrice?.productId === newCartItem.storePrice?.productId
            )
              ? // replace newCartItem
                {
                  items: state.items.map((i) =>
                    i.storePrice?.productId ===
                    newCartItem.storePrice?.productId
                      ? newCartItem
                      : i
                  ),
                }
              : { items: [...state.items, newCartItem] };
          }
        );
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter(
            (i) => i.storePrice?.productId !== productId
          ),
        }));
      },

      incrementQuantity: (storePriceId: number) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.storePrice?.id === storePriceId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }));
      },

      decrementQuantity: (priceListId: number) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.storePrice?.id === priceListId
              ? { ...i, quantity: i.quantity - 1 }
              : i
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
