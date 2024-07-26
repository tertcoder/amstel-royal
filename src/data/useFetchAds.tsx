import { useQuery } from "@tanstack/react-query";
import { getAds } from "../services/appApi";

export function useFetchAds() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ads'],
    queryFn: () => getAds(),

  })

  return { data, isLoading, error }
}