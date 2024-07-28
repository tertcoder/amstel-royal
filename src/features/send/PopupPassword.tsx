import { SubmitHandler, useForm } from "react-hook-form";
import MainBtn from "../../ui/MainBtn";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useProfileData } from "../../hooks/useProfileData";
import { useVerifyPassword } from "./useVerifyPassword";
import { SetURLSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface IFormInput {
  password: string;
}
function PopupPassword({ searchParam, setSendingPoints,
  showPassword,
  setShowPassword, sending, dataToSend }: {
    searchParam: URLSearchParams, showPassword: boolean, setShowPassword: React.Dispatch<React.SetStateAction<boolean>>, sending: boolean, setSearchParam: SetURLSearchParams, setSendingPoints: React.Dispatch<React.SetStateAction<boolean>>, dataToSend: {
      codeSender: string;
      codeReceiver: string;
      points: number;
      type: number;
      qty: number | null;
      invoice: File | null;
    }
  }) {
  const { code } = useProfileData();
  const { verify, isLoading, sendingPoints } = useVerifyPassword({ ...dataToSend })
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {

    verify({ password: data.password, code });
    reset()
  };

  useEffect(() => setSendingPoints(sendingPoints), [setSendingPoints, sendingPoints])

  return <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-10">
    <div className={twMerge("flex delay-300 duration-200 bg-input shadow-sm-blur rounded-xl mx-3 items-center justify-center flex-col gap-5 p-5", `${searchParam.get('confirm') === 'true' ? 'scale-100' : 'scale-0'}`)}>
      <p className="font-medium text-text-black text-center">Confirmer l'envoi des points en écrivant votre mot de passe.</p>
      <div>
        <div className="relative">
          <input
            inputMode="numeric"
            type={showPassword ? "text" : "password"}
            placeholder="Votre mot de passe"
            {...register("password", {
              required: "Mot de passe est requis",
              pattern: {
                value: /^\d{4}$/,
                message: "Le mot de passe doit être 4 chiffres"
              },
              maxLength: {
                value: 4,
                message: "Le mot de passe doit être 4 chiffres"
              }
            })}
            className="w-full bg-inherit text-text-black outline-none placeholder:text-text-black/70 rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70" />
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        {errors.password && <p className=" last:text-red-500">{errors.password.message}</p>}
      </div>
      <MainBtn text={isLoading ? "Vérification..." : sending ? "Envoi des points" : "Confirmer"} disabled={isLoading} />
    </div>
  </form>;

}

export default PopupPassword
