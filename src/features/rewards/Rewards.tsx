import Skeleton from '@mui/material/Skeleton';

import { useFetchRewards } from "../../data/useFetchReward";
import { useProfileData } from "../../hooks/useProfileData";
import Heading from "../../ui/Heading";
import Reward from "./Reward";
import { RewardType } from '../../utils/models';

function Rewards() {
  const { code, type, isLoading } = useProfileData();
  const { data } = useFetchRewards(code, type);

  return (
    <div className="h-screen overflow-y-auto px-4 pb-14">
      <Heading heading="Rewards" />
      <div className="space-y-4">
        {isLoading || (data || []).length < 1 ? <>
          <div className="flex items-center gap-3 p-3">

            <Skeleton variant="circular" width={64} height={64} />
            <div className="w-60">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">

            <Skeleton variant="circular" width={64} height={64} />
            <div className="w-60">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
          </div>
        </> : (data || [] as RewardType[]).map(reward => <Reward
          key={reward.idRew}
          idReward={reward.idRew}
          title={reward.titre}
          description={reward.description}
          img={reward.img}
        />)}
      </div>
    </div>
  );
}

export default Rewards;
