import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/authApi";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const 

  const { mutate: login } = useMutation({
    mutationFn: ({ identifier, password }: { identifier: string, password: string }) => loginApi(identifier, password),
    onSuccess: (data) => {
      if (data.Message === 1) {
        toast.success("Successfully logged in!");
        queryClient.setQueryData(["user"], data)
        navigate("/home", { replace: true });
      } else {
        toast.error("Provided email or password is incorrect");
        console.log(data)
      }
    },
    onError: () => {
      toast.error('Login failed');
    }
  });
  return { login }
}