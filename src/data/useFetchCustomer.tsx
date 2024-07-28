import { useMutation } from "@tanstack/react-query";
import { getCustomer } from "../services/appApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useFetchCustomer() {
  const navigate = useNavigate();

  const { data, mutate: sendOtp, isPending: isLoading, error } = useMutation({

    mutationFn: ({ phone }: { phone: string }) => getCustomer(phone),
    onSuccess: (data) => {
      if (data[0].Message === 1) {
        localStorage.setItem("phone_verified", data[0].phone);
        const otp = Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem('otp', JSON.stringify(otp));
        navigate("/step_2_otp_verification")

      } else {
        toast.error(data[0].Message)
      }
    }

  });

  return { data, sendOtp, isLoading, error };
}