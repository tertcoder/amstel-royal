import { useQuery } from "@tanstack/react-query";
import { getBars } from "../services/appApi";
import { Bar } from "../utils/models";

export function useFetchBars() {
  const { data, isLoading, error } = useQuery<Bar[]>({
    queryKey: ['bars'],
    queryFn: getBars,
  });

  return { data, isLoading, error };
}