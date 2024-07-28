import { useMutation } from "@tanstack/react-query";
import { sendPointAgent } from "../../services/appApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

export function useSendPointAgent() {
  const navigate = useNavigate();

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
      console.log(data)
      if (data[0].Message === 1 || data[0].Message === "Points envoyés avec succés") {
        toast.success("Point envoyé avec success!");
        navigate("/send_points_success")

      } else {
        toast.error(data[0].Message);
      }
    },
    onError: () => {
      toast.error("Réessayer encore, une erreur est apparue")
    }
  })

  return {
    sentPoint_details,
    sendPoint,
    isLoading, error
  }
}