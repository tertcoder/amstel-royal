import { useFetchAds } from "../data/useFetchAds";
import FeaturedAds from "../features/home/FeaturedAds";
import Overview from "../features/home/Overview";
import SpecialPromotions from "../features/home/SpecialPromotions";
import Welcome from "../features/home/Welcome";

function Home() {
  const { data, isLoading } = useFetchAds();

  return (
    <div className="h-full overflow-y-auto">
      <Welcome />
      <Overview />
      <FeaturedAds isLoading={isLoading} ads={data || []} />
      <SpecialPromotions />
    </div>
  );
}

export default Home;
