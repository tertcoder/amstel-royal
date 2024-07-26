import { useQuery } from "@tanstack/react-query"
import { getPromotions } from "../services/appApi"

export function useFetchPromotions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['promotions'],
    queryFn: () => getPromotions(),

  })

  return { data, isLoading, error }
}