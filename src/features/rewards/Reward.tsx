import shirt from "../../assets/shirt.png";
import bonus from "../../assets/bonus.png";

function Reward({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: string;
}) {
  return (
    <div className="linear flex items-center gap-3 rounded-xl p-3 shadow-sm-blur">
      <img
        src={type === "win" ? shirt : bonus}
        alt="T-shirt"
        className="w-16"
      />
      <div>
        <h3 className="font-semibold text-text-white">{title}</h3>
        <p className="text-sm font-medium text-text-white">{description}</p>
      </div>
    </div>
  );
}

export default Reward;
