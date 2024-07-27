import { useQuery } from "@tanstack/react-query";
import { PointHistory } from "../utils/models";
import { getPointHistory } from "../services/appApi";

export function useFetchPointHistory(code: string) {
  const { data, isLoading, error } = useQuery<PointHistory[]>({
    queryKey: ['pointHistory', code],
    queryFn: () => getPointHistory(code),
  });

  return { data, isLoading, error };
}