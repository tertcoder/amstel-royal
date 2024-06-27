import { useNavigate } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import GlassProst from "../../ui/GlassProst";

function SignupSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center px-8 pb-8 pt-16">
      <h2 className="mb-12 text-2xl font-medium text-text-black">
        Sign-Up Success
      </h2>
      {/* <img src={cheers} alt="Amstel Royal Prost" /> */}
      <GlassProst />

      <div className="my-6 space-y-12">
        <h3 className="text-center text-2xl font-medium text-text-black">
          Congratulations! You're all set up.
        </h3>
        <div>
          <p className="text-text-black/70">Here is your</p>
          <p className="text-lg font-medium text-text-black">
            Identifier: 24001
          </p>
          <p className="text-lg font-medium text-text-black">
            Password: ****{" "}
            <span className="text-sm font-normal text-text-black/70">
              (the one you entered recently)
            </span>
          </p>
        </div>
        <p className="italic text-text-black">
          Remember to keep your Client ID and Password in a safe place. You'll
          need them to log in to the app.
        </p>
      </div>
      <MainBtn
        text="Continue"
        onClick={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
      />
    </div>
  );
}

export default SignupSuccess;
