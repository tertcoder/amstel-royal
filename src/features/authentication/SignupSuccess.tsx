import { useNavigate } from "react-router-dom";
import cheers from "../../assets/glass.svg";
import MainBtn from "../../ui/MainBtn";

function SignupSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center px-8 pb-8 pt-16">
      <h2 className="text-text-black mb-12 text-2xl font-medium">
        Sign-Up Success
      </h2>
      <img src={cheers} alt="Amstel Royal Prost" />
      <div className="my-6 space-y-12">
        <h3 className="text-text-black text-center text-2xl font-medium">
          Congratulations! You're all set up.
        </h3>
        <div>
          <p className="text-text-black/70">Here is your</p>
          <p className="text-text-black text-lg font-medium">
            Identifier: 24001
          </p>
          <p className="text-text-black text-lg font-medium">
            Password: ****{" "}
            <span className="text-text-black/70 text-sm font-normal">
              (the one you entered recently)
            </span>
          </p>
        </div>
        <p className="text-text-black italic">
          Remember to keep your Client ID and Password in a safe place. You'll
          need them to log in to the app.
        </p>
      </div>
      <MainBtn
        text="Continue"
        onClick={(e) => {
          e.preventDefault();
          navigate("home");
        }}
      />
    </div>
  );
}

export default SignupSuccess;
