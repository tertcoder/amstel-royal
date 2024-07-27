import { useQuery } from "@tanstack/react-query";
import { getLevel } from "../services/appApi";

export function useFetchLevel(code: string) {
  const { data, isLoading, error } = useQuery<string>({
    queryKey: ['level', code],
    queryFn: () => getLevel(code),
  });

  return { data, isLoading, error };
}