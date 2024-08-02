import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginApi } from "../../services/authApi";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const [message, setMessage] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { login: settingLogin } = useAuth();

  const { data: user_details, mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ identifier, password }: { identifier: string, password: string }) => loginApi(identifier, password),

    onSuccess: (data) => {
      if (data[0].Message === 1) {
        setMessage(1);
        toast.success(" vous êtes maintenant connectés!");
        queryClient.setQueryData(["user"], data);
        setTimeout(() => {
          setMessage(null);
          settingLogin(data);
        }, 1000);
      } else {
        toast.error("Téléphone, Code ou mot de passse incorrect");
        console.log(data)
        setMessage(data[0].Message)
      }
    },
    onError: (error) => {
      if (error.message === 'Erreur de Conexion Internet') {
        toast.error("Vous n'êtes pas connecté au serveur");
        setErrorMessage("Vous n'êtes pas connecté au serveur");
      } else {
        toast.error(error.message); setErrorMessage(error.message)
      }
      setMessage(2);
    }
  });
  return { user_details, login, isLoading, message, errorMessage }
}