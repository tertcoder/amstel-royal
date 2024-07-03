import { useNavigate } from "react-router-dom";
import GlassProst from "../../ui/GlassProst";
import MainBtn from "../../ui/MainBtn";

function SendPointsSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center overflow-y-auto px-4 pb-8">
      <h2 className="mb-16 mt-8 text-xl font-medium text-text-black">
        Successful Transfer
      </h2>
      <GlassProst />
      <div>
        <div className="mt-16 space-y-4 text-center text-xl font-medium text-text-black">
          <h3>Congratulations!</h3>
          <p>You've successfully sent points to Charlie Hakizimana!</p>
        </div>
        <div className="mt-5 text-center">
          <span className="text-text-black/70">Points Sent:</span>
          <h2 className="text-4xl font-medium">50.00</h2>
        </div>
      </div>
      <div className="mt-16 w-full space-y-3">
        <MainBtn
          text="Return Home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        />
        <MainBtn
          text="Send More"
          onClick={(e) => {
            e.preventDefault();
            navigate("/send_points");
          }}
          type="secondary"
        />
      </div>
    </div>
  );
}

export default SendPointsSuccess;
