import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProduct";

// export interface Supermarket {
//   id: number
//   name: string
//   contactNo: string
//   logo: string
//   location: string
//   address: string
//   supermarketmanagerId: number
// }

// export interface PriceList {
//   id: number;
//   productId: string;
//   supermarketId: string;
//   price: number;
//   quantity: number;
//   discountedTotal: number;
//   supermarket: Supermarket;
// }

export interface PriceList {
  id: number;
  supermarket: Supermarket;
  product : Product;
  supermarketId: number;
  price: number;
  quantity: number;
  discountedTotal: number;
}

export interface Supermarket {
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}

const apiClient = new APIClient<FetchResponse<PriceList>>("/pricelists");

const usePriceList = (id: string) => {
  return useQuery({
    queryKey: ["pricelists", id],
    queryFn: () => apiClient.get(id),
  });
};

export default usePriceList;
