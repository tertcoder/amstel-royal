import { Link } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import { useLogin } from "./useLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import GlassProstSmall from "../../ui/GlassProstSmall";
import glass from "../../assets/small_glass.png";

type LoginDataType = {
  identifier: string;
  password: string;
}
function Login() {
  const { login, isLoading, message, errorMessage } = useLogin();
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
          <span className="text-text-black font-medium">We are connecting you...</span>
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col items-center">
        {/* <p className="text-center text-sm text-text-black/70 mb-6">
          Connectez-vous pour commencer à gagner des points à chaque gorgée d'Amstel !
        </p> */}

        {message !== null && (
          <div className="message-toast">
            {message === 0 && (
              <div className="text-red-400">
                <p>Verifier vos identifiants</p>
              </div>
            )}
            {message === 2 && (
              <div className="text-red-400">
                <p>une erreur est apparu lors de l'enregistrement</p>
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
                    disabled={isLoading}
                    type="password"
                    placeholder="Mot de passe"
                    className="auto flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"
                    id="password"
                    {...register("password", { required: "Entrez votre mot de passe" })}

                  />
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8_59)">
                      <path
                        d="M10.4377 4.8756C12.9761 2.3372 17.0917 2.3372 19.6301 4.8756C22.1685 7.41401 22.1685 11.5296 19.6301 14.068C17.7528 15.9453 15.0147 16.4329 12.6905 15.5361L12.4213 15.4264L12.4015 15.4215H11.7913V16.9999C11.7913 17.6472 11.2994 18.1795 10.6691 18.2435L10.5413 18.2499H8.96286V19.8284C8.96286 20.4756 8.47098 21.008 7.84066 21.072L7.71286 21.0784H3.73022C3.20968 21.0784 2.78098 20.6845 2.72614 20.1786L2.72021 20.0685V17.4571C2.72021 17.109 2.84121 16.7734 3.05991 16.5065L3.15956 16.3964L8.6602 10.8957L8.66937 10.8585C8.67195 10.8378 8.67242 10.8099 8.66583 10.7776C8.24427 8.71367 8.83365 6.47968 10.4377 4.8756ZM14.6804 7.70408C14.0946 8.28987 14.0946 9.23962 14.6804 9.8254C15.2662 10.4112 16.216 10.4112 16.8017 9.8254C17.3875 9.23962 17.3875 8.28987 16.8017 7.70408C16.216 7.1183 15.2662 7.1183 14.6804 7.70408Z"
                        fill="#2C1E0E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_59">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.507935)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
        <p className="mt-6 text-xs text-text-black/70 text-center">En vous connectant, vous acceptez<a href="#" className="text-text-black font-semibold"> les conditions générales</a> d'Amstel Royal et notre <a href="" className="text-text-black font-semibold">politique de confidentialité.</a></p>
      </div>
    </>)
}

export default Login;
