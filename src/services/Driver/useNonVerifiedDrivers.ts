import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import { DriverRequest } from "../types";

const apiClient = new APIClient<DriverRequest>("/driver_requests");

const useNonVerifiedDrivers = () => {
  return useQuery({
    queryKey: ["driver_requests"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useNonVerifiedDrivers;
