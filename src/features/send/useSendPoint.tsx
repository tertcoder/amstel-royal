import { useMutation } from "@tanstack/react-query";
import { sendPoint } from "../../services/appApi";
import toast from "react-hot-toast";

export function useSendPoint() {
  const { data: sentPoint_details, mutate: sendPointClient, isPending: isLoading, error } = useMutation({
    mutationFn: ({

      codeSender,
      codeReceiver,
      points,
      type,

    }: { invoice: File, codeSender: string, codeReceiver: string, points: number, type: number, qty: number }) => sendPoint(
      codeSender,
      codeReceiver,
      points,
      type,
    ),
    onSuccess: (data) => {
      toast.success("Point envoyé avec success!");
      console.log(data);
    }

  })

  return {
    sentPoint_details,
    sendPointClient,
    isLoading, error
  }
}