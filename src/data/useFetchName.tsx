import { getName } from "../services/appApi";
import { useQuery } from '@tanstack/react-query';


export function useFetchName(code: string) {

  const { data, isPending: isLoading, error } = useQuery({
    queryKey: ['name', code],
    queryFn: () => getName(code),
  });

  return { isLoading, error, data };
}
