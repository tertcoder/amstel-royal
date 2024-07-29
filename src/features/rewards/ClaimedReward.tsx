interface RewardProps {

  title: string;
  description: string;
  img: string;
}


function ClaimedReward({ title, description, img }: RewardProps) {



  return (
    <>
      <div className="bg-text-black/70 flex items-center gap-3 rounded-xl p-3 shadow-sm-blur cursor-pointer">
        <img
          src={img}
          alt="Reward"
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <div>
            <h3 className="font-semibold text-text-white">{title}</h3>
            <p className="text-sm font-medium text-text-white">{description}</p>
          </div>
        </div>
      </div >
    </>
  );
}

export default ClaimedReward;
