import Skeleton from '@mui/material/Skeleton';

import { useFetchRewards } from "../../data/useFetchReward";
import { useFetchClaimedRewards } from "../../data/useFetchClaimedRewards";
import { useProfileData } from "../../hooks/useProfileData";
import Heading from "../../ui/Heading";
import Reward from "./Reward";
import ClaimedReward from "./ClaimedReward";
import { RewardType } from '../../utils/models';

function Rewards() {
  const { code, type } = useProfileData();
  const { data: toClaim, isLoading: loadingRewards } = useFetchRewards(code, type);
  const { data: claimed, isLoading: loadingClaimed } = useFetchClaimedRewards(code, type);

  return (
    <div className="h-screen overflow-y-auto px-4 pb-14">
      <Heading heading="Prix" />
      {((!toClaim || (toClaim || []).length < 1) && !loadingRewards) && <div className="mt-6 text-center text-sm text-text-black/70">
        Aucun Prix à réclamer pour le moment.
      </div>}
      {((toClaim || []).length > 0) && <> <h2 className='text-xl text-text-black/70 font-medium mb-2'>Prix à réclamer</h2>
        <div className="space-y-4">
          {loadingRewards || (toClaim || []).length < 1 ? <>
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
          </> : (toClaim || [] as RewardType[]).map(reward => <Reward
            key={reward.idRew}
            idReward={reward.idRew}
            title={reward.titre}
            description={reward.description}
            img={reward.img}
          />)}
        </div></>}
      {((claimed || []).length > 0) && <><h2 className='text-xl mt-8 text-text-black/70 font-medium mb-2'>Prix déjà réclamés</h2>
        <div className="space-y-4">
          {loadingClaimed || (claimed || []).length < 1 ? <>
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
          </> : (claimed || [] as RewardType[]).map(reward => <ClaimedReward
            key={reward.idRew}
            title={reward.titre}
            description={reward.description}
            img={reward.img}
          />)}
        </div></>}
    </div >
  );
}

export default Rewards;
