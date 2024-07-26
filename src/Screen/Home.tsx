import { useFetchAds } from "../data/useFetchAds";
import FeaturedAds from "../features/home/FeaturedAds";
import Overview from "../features/home/Overview";
import SpecialPromotions from "../features/home/SpecialPromotions";
import Welcome from "../features/home/Welcome";

function Home() {
  const { data } = useFetchAds();
  console.log(data);
  return (
    <div className="h-full overflow-y-auto">
      <Welcome />
      <Overview />
      <FeaturedAds ads={data} />
      <SpecialPromotions />
    </div>
  );
}

export default Home;
