import { useQuery } from "@tanstack/react-query";
import { getPoints } from "../services/appApi";


export function useFetchPoints(code: string) {

  const { data, isLoading, error } = useQuery({
    queryKey: ['points', code],
    queryFn: () => getPoints(code),
  })

  return { data, isLoading, error };
} 