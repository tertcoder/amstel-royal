import { Link, useNavigate } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import glass from "../../assets/small_glass.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type SignUpDataType = {
  Lname: string;
  Fname: string;
  phone: string;
  password: string;
  type: number;
}
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [is18older, setIs18Older] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignUpDataType>();
  const [, setSignUpData] = useLocalStorage<SignUpDataType>("signup_data", {} as SignUpDataType)
  const onSubmit: SubmitHandler<SignUpDataType> = (data) => {

    // login(data, { onSettled: () => reset() });
    // signup(data, { onSettled: () => reset() })

    setSignUpData(data as SignUpDataType);
    navigate('/otp_verification')
    const otp = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('otp', JSON.stringify(otp));

    reset()
  }
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl font-medium">Inscription</h2>
        <img src={glass} alt="Amstel Royal Glass" className="w-10" />
      </div>
      <div className="mt-2 flex w-full flex-col items-center">
        <p className="text-center text-sm text-text-black/70">
          Entrez dans la famille des amis d'Amstel Royale
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full space-y-5">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
              <input
                type="text"
                placeholder="Nom"
                className="flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"
                {...register("Lname")}
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
            <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
              <input
                type="text"
                placeholder="Prénom"
                className="flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"

                {...register("Fname")}
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
            <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
              <input
                inputMode="numeric"
                type="text"
                placeholder="Téléphone"
                className="flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"
                {...register("phone")}
              />
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0376 5.5564L10.6866 6.71933C11.2723 7.76881 11.0372 9.14555 10.1147 10.068C10.1147 10.068 8.99588 11.187 11.0245 13.2157C13.0525 15.2437 14.1722 14.1255 14.1722 14.1255C15.0947 13.203 16.4714 12.9679 17.5209 13.5536L18.6838 14.2026C20.2686 15.087 20.4557 17.3094 19.0628 18.7024C18.2258 19.5394 17.2004 20.1907 16.0669 20.2336C14.1588 20.306 10.9183 19.8231 7.6677 16.5725C4.41713 13.3219 3.93421 10.0815 4.00655 8.17332C4.04952 7.03983 4.7008 6.01446 5.53781 5.17746C6.93076 3.78451 9.15317 3.97167 10.0376 5.5564Z"
                  fill="#2C1E0E"
                />
              </svg>
            </div>

            <div className="flex justify-between rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70">
              <input
                inputMode="numeric"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                className="auto flex-1 bg-inherit text-text-black outline-none placeholder:text-text-black/70"

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
            {errors?.password?.message ? (
              <span className="text-sm font-medium text-red-400">
                *{errors?.password?.message}
              </span>
            ) : <p className="text-sm font-medium text-text-black/70">*Le mot de passe doit être  4 chiffres</p>}
            <input type="hidden" value={0} {...register("type")} />
            <div className="flex items-center w-full gap-1 justify-center">
              <input type="checkbox" id="adult" checked={is18older} onChange={(e) => setIs18Older(e.currentTarget.checked)} />
              <label htmlFor="adult" className="text-sm text-text-black">J'ai plus de 18 ans</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <MainBtn
              disabled={!is18older}
              // onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              //   e.preventDefault();
              //   navigate("/otp_verification");
              // }}
              text="S'inscrire"
            />
            <Link
              to="/"
              className="self-end text-sm text-text-black/70 underline"
            >
              J'ai déjà un compte
            </Link>
          </div>
        </form>
        <p className="mt-6 text-xs text-text-black/70 text-center">En vous inscrivant, vous acceptez<a href="https://www.heineken.com/global/en/terms-and-conditions" className="text-text-black font-semibold"> les conditions générales</a> et <a href="https://www.heineken.com/global/en/privacy-policy" className="text-text-black font-semibold">politique de confidentialité.</a></p>
      </div>
    </>

  );
}

export default Signup;
