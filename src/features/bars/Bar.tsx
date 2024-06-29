import frame from "../../assets/frame.svg";

function Bar({ name, location }: { name: string; location: string }) {
  return (
    <div className="gold-gradient relative h-52 w-full overflow-hidden rounded-xl pt-14 text-center">
      <h2 className="text-nowrap text-[32px] font-bold text-white">{name}</h2>
      <p className="text-sm font-medium text-white">{location}</p>
      <img
        src={frame}
        alt="Amstel Royal Frame"
        className="absolute -bottom-0.5 -right-0.5"
      />
    </div>
  );
}

export default Bar;
