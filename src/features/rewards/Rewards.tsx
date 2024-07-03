import Heading from "../../ui/Heading";
import Reward from "./Reward";

function Rewards() {
  return (
    <div className="h-screen overflow-y-auto px-4 pb-14">
      <Heading heading="Rewards" />
      <div className="space-y-4">
        <Reward
          title="Win a T-Shirt"
          description="Reach 150 points and get a free t-shirt from Amstel Royal."
          type="win"
        />
        <Reward
          title="Bonus"
          description="Buy 4 beers in one time them get 200 points"
          type="bonus"
        />
      </div>
    </div>
  );
}

export default Rewards;
