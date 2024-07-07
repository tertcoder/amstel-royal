import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/authApi";
import { useState } from "react";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [message, setMessage] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ identifier, password }: { identifier: string, password: string }) => loginApi(identifier, password),

    onSuccess: (data) => {
      if (data[0].Message === 1) {
        setMessage(1);
        toast.success("Successfully logged in!");
        queryClient.setQueryData(["user"], data);

        setTimeout(() => { setMessage(null); navigate("/home", { replace: true }) }, 1500);
      } else {
        toast.error("Provided email or password is incorrect");
        setMessage(data[0].Message)
      }
    },
    onError: (error) => {
      if (error.message === 'Network error') toast.error("Vous n'êtes pas connecté au serveur");
      else toast.error(error.message);
    }
  });
  return { login, isLoading, errorMessage }
}