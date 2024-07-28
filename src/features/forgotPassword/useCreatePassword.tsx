import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../services/authApi";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useCreatePassword() {
  const [, setSearchParam] = useSearchParams();
  const { mutate: createPassword, isPending: isLoading, error } = useMutation({
    mutationFn: ({ phone, password }: { phone: string, password: string }) => forgotPassword(phone, password),
    onSuccess: (data) => {
      if (data[0].Message === 1) {
        toast.success("Mot de Passe modifié avec succés");
        setSearchParam("?reset=true")
        localStorage.clear()
      }
    }
  })
  return { isLoading, error, createPassword }
}