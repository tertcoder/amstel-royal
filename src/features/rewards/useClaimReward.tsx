import { useMutation } from "@tanstack/react-query"
import { claimReward } from "../../services/appApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function useClaimReward(setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>) {

  const navigate = useNavigate()
  const { data, isPending: isClaiming, mutate: claim, error } = useMutation({
    mutationFn: ({ idReward, idBar, code }: { idReward: number, idBar: number, code: string }) => claimReward(idReward, idBar, code),
    onSuccess: (data) => {

      if (data[0].Message === "prix réclamé avec succès") {
        toast.success("Prix réclamé avec succès");
        setIsModalOpen(false);  
        navigate('/home')
      } else if (data[0].Message === "Vous avez déjà réclamé ce prix") {
        toast.error("Vous avez déjà réclamé ce prix");
        setIsModalOpen(false);
      } else {
        toast.error("Erreur lors de la réclamation du prix. Vérifier si vous avez entré le bon code");
      }
    }
  })
  return {
    data,
    isClaiming, claim, error
  }
}

export default useClaimReward
