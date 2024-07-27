import { useQuery } from "@tanstack/react-query";
import { getReceivedPoints } from "../services/appApi";

export function useFetchReceivedPoints(code: string) {
  const { data, isLoading, error } = useQuery<number>({
    queryKey: ['receivedPoints', code],
    queryFn: () => getReceivedPoints(code),
  });

  return { data, isLoading, error };
}