import { useState } from "react";
import otp_img from "../../assets/otp_illustration.png";
import MainBtn from "../../ui/MainBtn";
import OtpInput from "./OtpInput";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleOtpChange = (otp: string) => setOtp(otp);
  return (
    <div className="flex h-screen flex-col items-center px-8 pb-8 pt-16">
      <h2 className="text-text-black mb-12 text-2xl font-medium">
        OTP Verification
      </h2>
      <img src={otp_img} alt="Amstel Royal OTP Verification" />
      <p className="text-text-black/70 font-medium">
        Enter OTP sent to <span className="text-text-black">+257 65849761</span>
      </p>
      <div className="mb-10 flex flex-col items-center gap-3">
        <OtpInput length={4} onChange={handleOtpChange} />
        <p className="text-text-black/70 self-end text-sm font-normal">
          Didn’t receive OTP?{" "}
          <span className="text-text-black font-medium">Resend OTP</span>
        </p>
      </div>
      <MainBtn
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log(`OTP: ${otp}`);
          navigate("/signup_success");
        }}
        text="Verify"
      />
    </div>
  );
}

export default OtpVerification;
