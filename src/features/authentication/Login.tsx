import { Link } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import { useLogin } from "./useLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import GlassProstSmall from "../../ui/GlassProstSmall";
import glass from "../../assets/small_glass.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

type LoginDataType = {
  identifier: string;
  password: string;
}
function Login() {
  const { login, isLoading, message, errorMessage } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  // const { login, isLoading } = useLogin();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginDataType>();
  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    login(data, { onSettled: () => reset() });
  }
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl font-medium">Connexion</h2>
        <img src={glass} alt="Amstel Royal Glass" className="w-10" />
      </div>
      <div className={twMerge("inset-x-0 z-50 bg-bg-one/20 absolute flex items-center -inset-y-full max-h-[1000px] justify-center duration-200 transition-opacity backdrop-blur-sm", `${isLoading ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="flex flex-col items-center justify-center">
          <GlassProstSmall />
          <span className="text-text-black font-medium">Connexion...</span>
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col items-center">

        {message !== null && (
          <div className="message-toast">
            {message === 0 && (
              <div className="text-red-400">
                <p>Verifier vos identifiants</p>
              </div>
            )}
            {message === 2 && (
              <div className="text-red-400">
                <p>Vérifier connexion internet</p>
              </div>
            )}
            {message === 4 && (
              <div className="text-red-400">
                <p>Les mot de passes ne sont pas identiques</p>
              </div>
            )}
            {message === 1 && (
              <div className="success_message">
                <p>Connexion avec succès</p>
              </div>
            )}
            {message === 5 && (
              <div className="text-red-400">
                <p>Le code et le mot de passe sont obligatoires</p>
              </div>
            )}
          </div>
        )}
        {errorMessage && (
          <p className="text-red-400">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-full space-y-5">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
                <input
                  disabled={isLoading}
                  type="text"
                  placeholder="Téléphone ou code client"
                  className="flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"
                  autoComplete="false"
                  id="identifier"
                  {...register("identifier", {
                    required: "Entrez votre numero de téléphone ou Code client",
                  })}
                />
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.2402C14.2091 10.2402 16 8.44937 16 6.24023C16 4.0311 14.2091 2.24023 12 2.24023C9.79086 2.24023 8 4.0311 8 6.24023C8 8.44937 9.79086 10.2402 12 10.2402Z"
                    fill="#2C1E0E"
                  />
                  <path
                    d="M12 21.2402C15.866 21.2402 19 19.4494 19 17.2402C19 15.0311 15.866 13.2402 12 13.2402C8.13401 13.2402 5 15.0311 5 17.2402C5 19.4494 8.13401 21.2402 12 21.2402Z"
                    fill="#2C1E0E"
                  />
                </svg>

              </div>
              {errors?.identifier?.message && (
                <span className="text-sm font-medium text-red-400">
                  *{errors?.identifier?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <div>
                <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
                  <input
                    inputMode="numeric"
                    type={showPassword ? "text" : "password"}
                    disabled={isLoading}

                    placeholder="Mot de passe"
                    className="auto flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"
                    id="password"
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

                  />
                  <div
                    className=""
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors?.password?.message && (
                  <span className="text-sm font-medium text-red-400">
                    *{errors?.password?.message}
                  </span>
                )}
              </div>
              <Link
                to="/step_1_phone"
                className="self-end text-sm text-text-black/70 underline"
              >
                Mot de passe oublié?
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <MainBtn
              disabled={isLoading}
              text={isLoading ? "En attente..." : "Connexion"}
            />
            <Link
              to="/signup"
              className="self-end text-sm text-text-black/70 underline"
            >
              Je n'ai pas de compte
            </Link>
          </div>
        </form>
        <p className="mt-6 text-xs text-text-black/70 text-center">En vous inscrivant, vous acceptez<a href="https://www.heineken.com/global/en/terms-and-conditions" className="text-text-black font-semibold"> les conditions générales</a> et <a href="https://www.heineken.com/global/en/privacy-policy" className="text-text-black font-semibold">politique de confidentialité </a> de HEINEKEN .</p>

      </div>
    </>)
}

export default Login;
