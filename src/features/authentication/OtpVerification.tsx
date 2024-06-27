import otp from "../../assets/otp_illustration.png";
import MainBtn from "../../ui/MainBtn";

function OtpVerification() {
  return (
    <div className="flex h-screen flex-col items-center px-8 pb-8 pt-16 font-medium">
      <h2 className="text-text-black mb-12 text-2xl">OTP Verification</h2>
      <img src={otp} alt="Amstel Royal OTP Verification" />
      <p className="text-text-black/70 font-medium">
        Enter OTP sent to <span className="text-text-black">+257 65849761</span>
      </p>

      <MainBtn
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log("Clicked!");
        }}
        text="Verify"
      />
    </div>
  );
}

export default OtpVerification;
