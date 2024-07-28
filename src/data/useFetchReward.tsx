import { useQuery } from "@tanstack/react-query";
import { getRewards } from "../services/appApi";
import { RewardType } from "../utils/models";

export function useFetchRewards(code: string, type: number) {
  const { data, isLoading, error } = useQuery<RewardType[]>({
    queryKey: ['rewards'],
    queryFn: () => getRewards(code, type),

  })

  return { data, isLoading, error }
}