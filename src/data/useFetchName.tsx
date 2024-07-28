import toast from "react-hot-toast";
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

  const { data, mutate: name, isPending: isLoading, error } = useMutation({
    mutationFn: ({ code }: { code: string }) => getName(code),
    onSuccess: (data: string) => {
      if (data.includes("N'existe pas")) {
        toast.error("Code invalide! Veuillez réessayer avec un code valide.");
      }
    }
  });
  const fullName = data?.includes("N'existe pas") ? 'Code invalide!' : data;
  return { isLoading, name, error, fullName };
}
