import { useQuery } from "@tanstack/react-query";
import { getRewards } from "../services/appApi";

export function useFetchRewards(code: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['rewards'],
    queryFn: () => getRewards(code),

  })

  return { data, isLoading, error }
}