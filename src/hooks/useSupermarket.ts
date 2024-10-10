import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";

export interface Supermarket {
  [x: string]: any;
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}
const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSupermarket = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["Supermarket", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 minute
    })),
  });
};

export default useSupermarket;
