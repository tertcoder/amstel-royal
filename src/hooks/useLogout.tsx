import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../services/authApi";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

function useLogout() {
  const { logout: settingLogout } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingout } = useMutation({
    mutationFn: ({ id }: { id: number }) => logoutApi(id),
    onSuccess: () => {
      
      queryClient.removeQueries();
      settingLogout();
    },
    onError: () => {
      toast.error("An error occurred while logging out.");
    }
  })
  return { logout, isLoggingout };
}

export default useLogout
