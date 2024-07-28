import Skeleton from '@mui/material/Skeleton';

import { useFetchNotifications } from "./useFetchNotifications";
import { useProfileData } from "../../hooks/useProfileData";
import Heading from "../../ui/Heading";
import Notification from "./Notification";

function Notifications() {
  const { code } = useProfileData();
  const { data, isLoading } = useFetchNotifications(code);
  
  return (
    <div className="h-screen px-4 pb-14">
      <Heading heading="Notifications" />
      <div>
        {isLoading ? <>
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
        </>
          : data && data.map((not) => (
            <Notification notif={{ description: not.msg, title: not.titre, time: not.dateNot, allCust: not.allCust, vue: not.vue, customer: not.customer }} key={not.idNot} />
          ))}
        {!isLoading && data!.length === 0 && (
          <div className="mt-6 text-center text-sm text-text-black/70">
            Pas de notification!
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
