import { PriceList } from "@/hooks/usePriceLists";
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

  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

// const usersList: { [key: string]: User } = {
//   "admin@gmail.com": { password: "123456", username: "Admin", role: "admin" },
//   "consumer@gmail.com": {
//     password: "123456",
//     username: "Consumer",
//     role: "consumer",
//   },

//   "driver@gmail.com": {
//     password: "123456",
//     username: "Driver",
//     role: "driver",
//   },
// };

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
              (cartItem) => cartItem.priceList?.product.id === item.priceList?.product.id
            )
              ? {
                  items: state.items.map((cartItem) =>
                    cartItem.priceList?.product.id === item.priceList?.product.id
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
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;

// login: (formData: Credentials) => {
//   if (!usersList[formData.email]) return null;
//   if (usersList[formData.email].password !== formData.password)
//     return {} as User;
//   set(() => ({ user: usersList[formData.email] }));
//   return usersList[formData.email];
// },
