import { getName } from "../services/appApi";
import { useMutation } from '@tanstack/react-query';


export function useFetchName(code: string) {

  const { data, isPending: isLoading, error } = useMutation({
    mutationFn: () => getName(code),
    onSuccess: (data) => {
      console.log('data: ', data);
    },
    onError: (error) => {
      console.error('Error fetching name:', error);
    },
  });

  return { isLoading, error, data };
}
