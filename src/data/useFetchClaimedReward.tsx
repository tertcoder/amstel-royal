import { useQuery } from "@tanstack/react-query";
import { getClaimedRewards } from "../services/appApi";
import { RewardType } from "../utils/models";

export function useFetchClaimedRewards(code: string, type: number) {

  const { data, isLoading, error } = useQuery<RewardType[]>({
    queryKey: ['rewards'],
    queryFn: () => getClaimedRewards(code, type),

  })

  return { data, isLoading, error }
}