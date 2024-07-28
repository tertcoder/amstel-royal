import { useMutation } from "@tanstack/react-query";

import { verifyPassword } from "../../services/appApi";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
// import { PointsToSendType } from "../../utils/models";
// import useLocalStorage from "../../hooks/useLocalStorage";
import { useSendPointAgent } from "./useSendPointAgent";

export function useVerifyPassword(dataToSend: {
  codeSender: string;
  codeReceiver: string;
  points: number;
  type: number;
  qty: number | null;
  invoice: File | null;
}) {
  const { sendPoint, isLoading: sendingPoints } = useSendPointAgent();
  const [, setSearchParam] = useSearchParams();
  // const [sendPointDetails] = useLocalStorage<PointsToSendType>("points_sent", {} as PointsToSendType)
  // console.log(sendPointDetails)

  const { data, mutate: verify, isPending: isLoading, error } = useMutation({
    mutationFn: ({ password, code }: { password: string, code: string }) => verifyPassword(password, code),
    onSuccess: (data) => {
      console.log(data);
      if (data === 1) {
        toast.success("Password Test Success")
        setSearchParam("?confirm=false");
        sendPoint(dataToSend as {
          identifier: string,
          codeSender: string,
          codeReceiver: string,
          points: number,
          type: number,
          qty: number,
          invoice: File
        });
      } else {
        toast.error("Password Test Failed")
      }
    }
  })

  return { data, verify, isLoading, error, sendingPoints }
}