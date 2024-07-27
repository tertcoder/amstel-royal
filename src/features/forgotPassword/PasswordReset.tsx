import { useNavigate, useSearchParams } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import { twMerge } from "tailwind-merge";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useCreatePassword } from "./useCreatePassword";
import GlassProstSmall from "../../ui/GlassProstSmall";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

function PasswordReset() {
  const { isLoading, createPassword } = useCreatePassword();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const phone = localStorage.getItem("phone_verified")!;
    createPassword({ phone, password: data.password });
  };

  return (
    <div className="mt-8">
      <div className={twMerge("inset-x-0 z-50 bg-bg-one/20 absolute flex items-center max-h-screen h-full justify-center duration-200 transition-opacity backdrop-blur-sm", `${isLoading ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="flex flex-col items-center justify-center">
          <GlassProstSmall />
          <span className="text-text-black font-medium">We are connecting you...</span>
        </div>
      </div>
      <div className="space-y-6">
        <button className="" onClick={() => navigate("/step_1_phone")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
              fill="#2C1E0E"
            />
            <path
              d="M5.5605 12L11.781 18.219C11.9218 18.3598 12.0009 18.5508 12.0009 18.75C12.0009 18.9492 11.9218 19.1402 11.781 19.281C11.6402 19.4218 11.4492 19.5009 11.25 19.5009C11.0508 19.5009 10.8598 19.4218 10.719 19.281L3.969 12.531C3.89915 12.4613 3.84374 12.3786 3.80593 12.2875C3.76812 12.1963 3.74866 12.0987 3.74866 12C3.74866 11.9014 3.76812 11.8037 3.80593 11.7126C3.84374 11.6214 3.89915 11.5387 3.969 11.469L10.719 4.719C10.8598 4.57817 11.0508 4.49905 11.25 4.49905C11.4492 4.49905 11.6402 4.57817 11.781 4.719C11.9218 4.85983 12.0009 5.05084 12.0009 5.25C12.0009 5.44916 11.9218 5.64017 11.781 5.781L5.5605 12Z"
              fill="#2C1E0E"
            />
          </svg>
        </button>
        <h2 className="text-xl font-medium text-text-black">Create New Password</h2>
      </div>
      <p className="text-text-black/70 mt-2">
        Create your new password. This should at least contain 8 characters
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-10">
        <div className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full bg-inherit text-text-black outline-none placeholder:text-text-black/70 rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: value => value === password || "Passwords do not match"
              })}
              className="w-full bg-inherit text-text-black outline-none placeholder:text-text-black/70 rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <MainBtn text="Reset Password" />
      </form>
      <div className={twMerge("inset-0 bg-bg-one/20 absolute flex items-center justify-center duration-200 transition-opacity backdrop-blur-sm", `${searchParam.get('reset') === 'true' ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className={twMerge("flex delay-300 duration-200 bg-input shadow-sm-blur rounded-xl mx-3 items-center justify-center flex-col gap-5 p-5", `${searchParam.get('reset') === 'true' ? 'scale-100' : 'scale-0'}`)}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 1.13573C23.8145 1.13633 15.9644 4.38826 10.1764 10.1763C4.38831 15.9643 1.13634 23.8144 1.13574 32C1.13634 40.1855 4.38831 48.0356 10.1764 53.8236C15.9644 59.6117 23.8145 62.8636 32 62.8642C40.1855 62.8636 48.0357 59.6117 53.8237 53.8236C59.6117 48.0356 62.8637 40.1855 62.8643 32C62.8637 23.8144 59.6117 15.9643 53.8237 10.1763C48.0357 4.38826 40.1855 1.13633 32 1.13573ZM44.4452 20.9199C45.3152 20.9199 46.1851 21.2538 46.8529 21.9193C47.1706 22.2351 47.4227 22.6106 47.5948 23.0242C47.7668 23.4378 47.8554 23.8814 47.8554 24.3293C47.8554 24.7773 47.7668 25.2208 47.5948 25.6344C47.4227 26.048 47.1706 26.4235 46.8529 26.7393L29.8308 43.766C29.5151 44.0833 29.1397 44.3352 28.7263 44.507C28.3129 44.6789 27.8696 44.7674 27.4219 44.7674C26.9743 44.7674 26.531 44.6789 26.1176 44.507C25.7042 44.3352 25.3289 44.0833 25.0131 43.766L17.7854 36.5383C17.468 36.2225 17.2162 35.8472 17.0444 35.4338C16.8725 35.0204 16.784 34.5771 16.784 34.1294C16.784 33.6818 16.8725 33.2385 17.0444 32.8251C17.2162 32.4117 17.468 32.0363 17.7854 31.7206C18.1012 31.4032 18.4765 31.1514 18.8899 30.9795C19.3033 30.8077 19.7465 30.7192 20.1942 30.7192C20.6419 30.7192 21.0852 30.8077 21.4986 30.9795C21.912 31.1514 22.2874 31.4032 22.6031 31.7206L27.4208 36.5383L42.0352 21.9216C42.3506 21.6039 42.7257 21.3517 43.1389 21.1794C43.5521 21.0071 43.9953 20.9181 44.4429 20.9177L44.4452 20.9199Z" fill="#B88409" />
            <path d="M17.7833 31.7183C17.4658 32.0343 17.214 32.4098 17.0421 32.8234C16.8702 33.237 16.7817 33.6804 16.7817 34.1283C16.7817 34.5762 16.8702 35.0196 17.0421 35.4332C17.214 35.8468 17.4658 36.2223 17.7833 36.5383L25.011 43.7637C25.3269 44.0808 25.7023 44.3324 26.1156 44.5041C26.529 44.6758 26.9722 44.7641 27.4198 44.7641C27.8674 44.7641 28.3106 44.6758 28.724 44.5041C29.1373 44.3324 29.5128 44.0808 29.8287 43.7637L46.8554 26.7393C47.1728 26.4234 47.4247 26.0478 47.5965 25.6342C47.7684 25.2206 47.8569 24.7772 47.8569 24.3293C47.8569 23.8815 47.7684 23.438 47.5965 23.0244C47.4247 22.6108 47.1728 22.2353 46.8554 21.9193C46.5394 21.6019 46.1639 21.35 45.7503 21.1781C45.3367 21.0063 44.8932 20.9178 44.4454 20.9178C43.9975 20.9178 43.554 21.0063 43.1404 21.1781C42.7269 21.35 42.3513 21.6019 42.0354 21.9193L27.421 36.536L22.6033 31.7206C22.2873 31.4031 21.9118 31.1513 21.4982 30.9794C21.0846 30.8075 20.6411 30.719 20.1933 30.719C19.7454 30.719 19.3019 30.8075 18.8883 30.9794C18.4748 31.1513 18.0992 31.4009 17.7833 31.7183Z" fill="#EBE4D6" />
            <path d="M32 0C14.3396 0 0 14.3396 0 32C0 49.6604 14.3396 63.9999 32 63.9999C49.6604 63.9999 64 49.6604 64 32C64 14.3396 49.6604 0 32 0ZM32 2.27143C48.4338 2.27143 61.7286 15.5661 61.7286 32C61.7286 48.4338 48.4338 61.7285 32 61.7285C15.5662 61.7285 2.27143 48.4338 2.27143 32C2.27143 15.5661 15.5662 2.27143 32 2.27143ZM44.4452 19.791C43.28 19.791 42.1147 20.2339 41.2311 21.1175L27.4208 34.9324L23.4072 30.9165C22.5535 30.0681 21.3989 29.592 20.1954 29.592C18.9919 29.592 17.8372 30.0681 16.9836 30.9165C16.1345 31.7702 15.6579 32.9254 15.6579 34.1294C15.6579 35.3335 16.1345 36.4886 16.9836 37.3424L24.209 44.5678C25.0624 45.4167 26.2171 45.8932 27.4208 45.8932C28.6245 45.8932 29.7792 45.4167 30.6326 44.5678L47.657 27.5411C48.5053 26.6875 48.9815 25.5328 48.9815 24.3293C48.9815 23.1258 48.5053 21.9712 47.657 21.1175C47.2353 20.696 46.7344 20.3618 46.1833 20.1342C45.6321 19.9065 45.0415 19.7899 44.4452 19.791ZM44.4452 22.0443C45.0221 22.0443 45.5991 22.2714 46.0511 22.7234C46.2655 22.9323 46.436 23.182 46.5523 23.4578C46.6687 23.7336 46.7286 24.03 46.7286 24.3293C46.7286 24.6287 46.6687 24.925 46.5523 25.2008C46.436 25.4766 46.2655 25.7264 46.0511 25.9352L29.0267 42.9619C28.8178 43.1763 28.5681 43.3468 28.2923 43.4631C28.0165 43.5795 27.7202 43.6395 27.4208 43.6395C27.1215 43.6395 26.8251 43.5795 26.5493 43.4631C26.2735 43.3468 26.0238 43.1763 25.8149 42.9619L18.5895 35.7365C18.3747 35.5276 18.204 35.2777 18.0874 35.0017C17.9708 34.7256 17.9107 34.4291 17.9107 34.1294C17.9107 33.8298 17.9708 33.5332 18.0874 33.2572C18.204 32.9812 18.3747 32.7313 18.5895 32.5224C18.7984 32.308 19.048 32.1375 19.3238 32.0212C19.5996 31.9048 19.896 31.8448 20.1954 31.8448C20.4947 31.8448 20.791 31.9048 21.0668 32.0212C21.3427 32.1375 21.5924 32.308 21.8013 32.5224L26.6167 37.3424C26.7222 37.4482 26.8475 37.532 26.9855 37.5893C27.1235 37.6466 27.2714 37.6761 27.4208 37.6761C27.5702 37.6761 27.7181 37.6466 27.8561 37.5893C27.994 37.532 28.1194 37.4482 28.2249 37.3424L42.837 22.7234C43.0468 22.5095 43.297 22.3393 43.573 22.2227C43.8491 22.1061 44.1455 22.0455 44.4452 22.0443Z" fill="#B88409" />
          </svg>
          <p className="font-medium text-text-black text-center">You’ve successfully changed your password. Sign in to continue</p>
          <MainBtn text="Sign in" onClick={() => navigate("/")} />
        </div>
      </div>

    </div>
  );
}

export default PasswordReset
