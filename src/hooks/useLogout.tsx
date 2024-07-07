import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../services/authApi";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

function useLogout() {
  const { logout: settingLogout } = useAuth();
  const { mutate: logout, isPending: isLoggingout } = useMutation({
    mutationFn: ({ id }: { id: number }) => logoutApi(id),
    onSuccess: () => {
      toast.success("You are logged out!");
      settingLogout();
    },
    onError: () => {
      toast.error("An error occurred while logging out.");
    }
  })
  return { logout, isLoggingout };
}

export default useLogout
