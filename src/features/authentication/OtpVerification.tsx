import { useEffect, useState } from "react";
import otp_img from "../../assets/otp_illustration.png";
import MainBtn from "../../ui/MainBtn";
import OtpInput from "./OtpInput";
import Heading from "../../ui/Heading";
import toast from "react-hot-toast";
import { useSignup } from "./useSignup";
import GlassProstSmall from "../../ui/GlassProstSmall";
import { twMerge } from "tailwind-merge";

function OtpVerification() {
  const { isLoading, signup } = useSignup();
  const [isReloaded, setIsReloaded] = useState(false);

  const [otp, setOtp] = useState("");

  const [timer, setTimer] = useState(60);
  const [buttonText, setButtonText] = useState('Renvoyer l\'OTP');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsDisabled(false);
      setButtonText('Renvoyer l\'OTP');
    }
  }, [timer]);


  const signup_details = JSON.parse(localStorage.getItem("signup_data")!);
  let otp_verified = localStorage.getItem("otp");

  const handleOtpChange = (otp: string) => setOtp(otp);
  const resettingOTP = () => {
    setTimer(10);
    setButtonText('Veuillez patienter...');
    setIsDisabled(true);

    const otp = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('otp', JSON.stringify(otp));
    setIsReloaded(true);
    setInterval(() => {
      setIsReloaded(false);
      otp_verified = localStorage.getItem("otp")
    }, 3000)
  }
  return (
    <div className="flex h-screen flex-col items-center px-4 pb-8">
      <div className={twMerge("inset-x-0 z-50 bg-bg-one/20 absolute flex items-center max-h-screen h-full justify-center duration-200 transition-opacity backdrop-blur-sm", `${isLoading || isReloaded ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="flex flex-col items-center justify-center">
          <GlassProstSmall />
          <span className="text-text-black font-medium">We are connecting you...</span>
        </div>
      </div>
      <Heading heading=" Vérification OTP" />
      <img src={otp_img} alt="Amstel Royal OTP Verification" className="w-44" />
      <p className="font-medium text-text-black/70">
        Entrez l'OTP envoyé au <span className="text-text-black">{signup_details!.phone}</span>
      </p>
      <p>{otp_verified}</p>
      <div className="mb-10 flex flex-col items-center gap-3">
        <OtpInput length={4} onChange={handleOtpChange} />
        <p className="self-end text-sm font-normal text-text-black/70">
          Vous n'avez pas reçu d'OTP?{" "}
          <button className="font-medium disabled:text-text-black/70 text-text-black" onClick={resettingOTP} disabled={isDisabled}>
            {timer > 0 ? `Renvoyer l'OTP dans ${timer}s` : buttonText}
          </button>
        </p>
      </div>
      <MainBtn
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          if (otp_verified === otp) {
            signup(signup_details);
          } else {
            toast.error("OTP Incorrect!")
          }
        }}
        text="Vérifier"
      />
    </div>
  );
}

export default OtpVerification;
