import frame from "../../assets/frame.svg";

function Bar({ name, location,num }: { name: string; location: string;num:number }) {

 const back = num%2==0?"gold-gradient relative h-32 w-full overflow-hidden rounded-xl pt-10 text-center":"bg-silver-gradient relative h-32 w-full overflow-hidden rounded-xl pt-10 text-center";
  const textColor1 = num%2==0?" text-nowrap text-[18px] font-bold text-white" :" text-nowrap text-[18px] font-bold text-black";
  const textColor2 = num%2==0?" text-sm font-medium text-[10px] text-white" :" text-sm font-medium text-[10px] text-black";

  return (
    <div className={back}>
      <h2 className={textColor1}>{name}</h2>
      <p className={textColor2}>{location}</p>
      <img
        src={frame}
        alt="Amstel Royal Frame"
        className="absolute -bottom-0.5 -right-0.5 w-32"
      />
    </div>
  );
}

export default Bar;

