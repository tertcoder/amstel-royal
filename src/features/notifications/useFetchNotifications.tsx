import { useQuery } from "@tanstack/react-query";
import { getNotifications, getNotificationsNumber } from "../../services/appApi";
import { Notification } from "../../utils/models";

export function useFetchNotifications(code: string) {
  const { data, isLoading, error } = useQuery<Notification[]>({
    queryKey: ['Notification', code],
    queryFn: () => getNotifications(code),
  });

  return { data, isLoading, error };
}
export function useFetchNotifNumber(code: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['Notification_Number', code],
    queryFn: () => getNotificationsNumber(code),
  });

  return { data, isLoading, error };
}