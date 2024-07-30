import { useEffect, useState } from "react";
import otp_img from "../../assets/otp_illustration.png";
import MainBtn from "../../ui/MainBtn";
import OtpInput from "./OtpInput";
import Heading from "../../ui/Heading";
import toast from "react-hot-toast";
import { useSignup } from "./useSignup";
import GlassProstSmall from "../../ui/GlassProstSmall";
import { twMerge } from "tailwind-merge";
import axios from "axios";

function OtpVerification() {
  const { isLoading, signup } = useSignup();
  const [isReloaded, setIsReloaded] = useState(false);

  const [otp, setOtp] = useState("");

  const [timer, setTimer] = useState(60);
  const [buttonText, setButtonText] = useState('Renvoyer l\'OTP');
  const [isDisabled, setIsDisabled] = useState(true);

  const signup_details = JSON.parse(localStorage.getItem("signup_data")!);
  let otp_verified = localStorage.getItem("otp") || ""; // Ensure it's a string
  const phone = signup_details.phone.length === 8
    ? "+257" + signup_details.phone
    : signup_details.phone.length === 11
    ? signup_details.phone
    : signup_details.phone.length === 10
    ? "+" + signup_details.phone
    : signup_details.phone;

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

  useEffect(() => {
    sendSMS(phone, otp_verified);
  }, [phone, otp_verified]); // Adding dependencies

  const sendSMS = async (phone: string, otp: string) => { // Use string instead of String
    const msg = "Amstel Royal OTP: " + otp;

    const options = {
      url: 'https://textflow.me/api/send-sms',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+"blbcSZ2Fc1WvdJVWEQgXuxrj0b0nYCbXa38pfDoiGzfBjrFKAB4LwrLGX60R6bzv"
      },
      data: {
        'phone_number': phone,
        'text': msg
      }
    };

    try {
      const response = await axios(options);
      console.log('SMS sent successfully:', response.data);
      return response.data; // Optionally return data if needed
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw new Error('Failed to send SMS');
    }
  };

  const handleOtpChange = (otp: string) => setOtp(otp);
  const resettingOTP = () => {
    setTimer(10);
    setButtonText('Veuillez patienter...');
    setIsDisabled(true);

    const otpNumber = Math.floor(1000 + Math.random() * 9000);
    const otpString = otpNumber.toString(); // Convert number to string
    localStorage.setItem('otp', otpString);
    sendSMS(phone, otpString); // Pass as string
    setIsReloaded(true);
    setInterval(() => {
      setIsReloaded(false);
      otp_verified = localStorage.getItem("otp") || "";
    }, 3000);
  };

  return (
    <div className="flex h-screen flex-col items-center px-4 pb-8">
      <div className={twMerge("inset-x-0 z-50 bg-bg-one/20 absolute flex items-center max-h-screen h-full justify-center duration-200 transition-opacity backdrop-blur-sm", `${isLoading || isReloaded ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="flex flex-col items-center justify-center">
          <GlassProstSmall />
          <span className="text-text-black font-medium">Chargement</span>
        </div>
      </div>
      <Heading heading=" Vérification OTP" />
      <img src={otp_img} alt="Amstel Royal OTP Verification" className="w-44" />
      <p className="font-medium text-text-black/70">
        Entrez l'OTP envoyé au <span className="text-text-black">{phone}</span>
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
