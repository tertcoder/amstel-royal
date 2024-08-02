import { useNavigate } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";
import GlassProst from "../../ui/GlassProst";
import { useProfileData } from "../../hooks/useProfileData";

function SignupSuccess() {
  const navigate = useNavigate();
  const { code } = useProfileData();
  return (
    <div className="flex h-screen flex-col items-center px-4 pb-8 ">
      <h2 className="8 mb-12 text-xl font-medium text-text-black mt-5">
        Inscription réussie
      </h2>
      <GlassProst />

      <div className="my-6 space-y-12">
        <h3 className="text-center text-xl font-medium text-text-black">
          Félicitations ! Vous êtes prêt.
        </h3>
        <div>
          <p className="text-text-black/70">Voici ton</p>
          <p className="text-4xl font-medium text-text-black">
            Identifiant: {code}
          </p>

        </div>
        <p className="italic text-text-black">
          N'oubliez pas de conserver votre identifiant client dans un endroit sûr. Vous en aurez besoin pour vous connecter à l'application.
        </p>
      </div>
      <MainBtn
        text="Continuer"
        onClick={(e) => {
          e.preventDefault();
          navigate("/home");
        }}
      />
    </div>
  );
}

export default SignupSuccess;
