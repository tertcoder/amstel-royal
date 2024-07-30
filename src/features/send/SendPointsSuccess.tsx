import { Navigate, useNavigate } from "react-router-dom";
import GlassProst from "../../ui/GlassProst";
import MainBtn from "../../ui/MainBtn";

function SendPointsSuccess() {
  const navigate = useNavigate();

  const last_sent: { receiver: string | null, points: number | null } = JSON.parse(localStorage!.getItem('last_sent')!);
  if (!last_sent.receiver) {
    <Navigate to="/send_points" />
  }
  return (
    <div className="flex h-screen flex-col items-center overflow-y-auto px-4 pb-8">
      <h2 className="mb-16 mt-8 text-xl font-medium text-text-black">
        Transfert réussi!
      </h2>
      <GlassProst />
      <div>
        <div className="mt-16 space-y-4 text-center text-xl font-medium text-text-black">
          <h3>Transfert réussi</h3>
          <p>Vous avez envoyé avec succès des points à {last_sent.receiver || "..."}!</p>
        </div>
        <div className="mt-5 text-center">
          <span className="text-text-black/70">Points envoyés :</span>
          <h2 className="text-4xl font-medium">{last_sent.points || "..."}</h2>
        </div>
      </div>
      <div className="mt-16 w-full space-y-3">
        <MainBtn
          text="Retournez à la Page d'Accueil"
          onClick={(e) => {
            e.preventDefault();
            navigate("/home");
          }}
        />
        <MainBtn
          text="Envoyez plus"
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
