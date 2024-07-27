import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../services/appApi";

export function useFetchNotifications(code: string) {
  const { data, isLoading, error } = useQuery<Notification[]>({
    queryKey: ['pointHistory', code],
    queryFn: () => getNotifications(code),
  });

  return { data, isLoading, error };
}