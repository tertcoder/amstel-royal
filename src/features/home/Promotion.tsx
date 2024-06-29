import img from "../../assets/small_glass.svg";

function Promotion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 p-3">
      <img src={img} alt="Amstel Royal" />
      <div className="flex flex-col">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-text-black/70">{description}</p>
      </div>
    </div>
  );
}

export default Promotion;
