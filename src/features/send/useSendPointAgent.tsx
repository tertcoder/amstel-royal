import { useMutation } from "@tanstack/react-query";
import { sendPointAgent } from "../../services/appApi";
// import toast from "react-hot-toast";

export function useSendPointAgent() {
  const { data: sentPoint_details, mutate: sendPoint, isPending: isLoading, error } = useMutation({
    mutationFn: ({
      invoice,
      codeSender,
      codeReceiver,
      points,
      type,
      qty,

    }: { identifier: string, invoice: File | null, codeSender: string, codeReceiver: string, points: number, type: number, qty: number | null }) =>
      sendPointAgent(
        invoice,
        codeSender,
        codeReceiver,
        points,
        type,
        qty)
    ,
    onSuccess: (data) => {
      // toast.success("Point envoyé avec success!");
      console.log(data);
    }

  })

  return {
    sentPoint_details,
    sendPoint,
    isLoading, error
  }
}