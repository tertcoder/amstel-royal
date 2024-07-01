import { useState } from "react";
import otp_img from "../../assets/otp_illustration.png";
import MainBtn from "../../ui/MainBtn";
import OtpInput from "./OtpInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import Heading from "../../ui/Heading";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [paramVar] = useSearchParams();

  const headTo = paramVar.get("action");

  const handleOtpChange = (otp: string) => setOtp(otp);

  return (
    <div className="flex h-screen flex-col items-center px-4 pb-8">
      <Heading heading=" OTP Verification" />
      <img src={otp_img} alt="Amstel Royal OTP Verification" className="w-44" />
      <p className="font-medium text-text-black/70">
        Enter OTP sent to <span className="text-text-black">+257 65849761</span>
      </p>
      <div className="mb-10 flex flex-col items-center gap-3">
        <OtpInput length={4} onChange={handleOtpChange} />
        <p className="self-end text-sm font-normal text-text-black/70">
          Didn’t receive OTP?{" "}
          <span className="font-medium text-text-black">Resend OTP</span>
        </p>
      </div>
      <MainBtn
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log(`OTP: ${otp}`);
          navigate(
            `${headTo === "verify_send_point" ? "/send_points_success" : "/signup_success"}`,
          );
        }}
        text="Verify"
      />
    </div>
  );
}

export default OtpVerification;
