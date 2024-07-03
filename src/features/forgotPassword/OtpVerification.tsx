import { useNavigate } from "react-router-dom"
import MainBtn from "../../ui/MainBtn"
import OtpInput from "../authentication/OtpInput";
import { useState } from "react";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const navigate=useNavigate();
  const handleOtpChange = (otp: string) => setOtp(otp);

  return (
    <div className="mt-8">
      <div className="space-y-6">
        <button className="" onClick={() => navigate('/step_1_phone')}>
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
        <h2 className="text-xl font-medium text-text-black">OTP Verification</h2>
      </div>
    <p className="text-text-black/70 mt-2"> 
        Enter OTP sent to <span className="font-medium text-text-black">+257 65849761</span>
    
    </p>
    <div className="mt-5 space-y-10">
    
      <div className="flex flex-col items-center gap-3">
        <OtpInput length={4} onChange={handleOtpChange} />
        <p className="text-sm font-normal text-text-black/70">
          Didn’t receive OTP?{" "}
          <span className="font-medium text-text-black">Resend OTP</span>
        </p>
      </div>
      <MainBtn text="Verify" onClick={(e)=>{ e.preventDefault();
          console.log(`OTP: ${otp}`);navigate("/step_3_password_reset")}}/>
    </div>
  </div>
  )
}

export default OtpVerification
