import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Activity } from "../types";

const apiClient = new APIClient<Activity>("/activity");

const useActivity = () => {
  return useQuery({
    queryKey: ["activity"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useActivity;