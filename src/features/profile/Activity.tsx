import img1 from "../../assets/small_glass.png";
import img2 from "../../assets/userAct.svg";

function Activity({
  activity,
  time,
  received,
  sent,
}: {
  activity: string;
  time: string;
  received?: number;
  sent?: number;
}) {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={(received && img1) || (sent && img2) || ""}
            alt="Amstel Royal"
            className={`${sent ? "drop-shadow-sm-blur" : ""}`}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium">{activity}</h3>
          <p className="text-sm text-text-black/70">{time}</p>
        </div>
      </div>
      {received && (
        <span className="font-medium text-main-two">-{received}pts</span>
      )}
      {sent && <span className="font-medium text-main-one">+{sent}pts</span>}
    </div>
  );
}

export default Activity;
