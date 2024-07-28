import { getName } from "../services/appApi";
import { useMutation, useQuery } from '@tanstack/react-query';


export function useFetchName(code: string) {

  const { data, isLoading, error } = useQuery({
    queryKey: ['name', code],
    queryFn: () => getName(code),
  });

  return { isLoading, error, data };
}

export function useName() {

  const { data: fullName, mutate: name, isPending: isLoading, error } = useMutation({
    mutationFn: ({ code }: { code: string }) => getName(code),
  });

  return { isLoading, name, error, fullName };
}
