import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const [paramVar] = useSearchParams();
  const headTo = paramVar.get("action");
  const { data, mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ Lname, Fname, phone, password, type }: { Lname: string, Fname: string, phone: string, password: string, type: number }) => signupApi(Lname, Fname, phone, password, type),

    onSuccess: (data) => {

      if (data[0].Message === 1) {
        toast.success("Successfully signed up!");


        localStorage.setItem("loggedUser", JSON.stringify(data));

        navigate(
          `${headTo === "verify_send_point" ? "/send_points_success" : "/signup_success"}`,
        );
      }
      else { toast.error(data[0].Message) }
    },
    onError: (error) => {
      if (error.message) {
        toast.error(error.message);
      }
    }
  })
  return { data, signup, isLoading }
}