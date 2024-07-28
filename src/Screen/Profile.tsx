import Skeleton from '@mui/material/Skeleton';


import ProfileCard from "../features/profile/ProfileCard";
import Activity from "../features/profile/Activity";
import useAuth from "../hooks/useAuth";
import { useProfileData } from "../hooks/useProfileData";
import { useFetchPointHistory } from "../data/useFetchPointHistory";

function Profile() {
  const { logout } = useAuth();
  const profileInfo = useProfileData();
  const { data, isLoading } = useFetchPointHistory(profileInfo.code || "");

  return (
    <div className="flex flex-col overflow-y-auto">
      <button className="mb-6 mt-8 self-end" onClick={logout}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.66669C6.93913 2.66669 5.92172 3.08811 5.17157 3.83826C4.42143 4.58841 4 5.60582 4 6.66669V25.3334C4 26.3942 4.42143 27.4116 5.17157 28.1618C5.92172 28.9119 6.93913 29.3334 8 29.3334H16C17.0609 29.3334 18.0783 28.9119 18.8284 28.1618C19.5786 27.4116 20 26.3942 20 25.3334V6.66669C20 5.60582 19.5786 4.58841 18.8284 3.83826C18.0783 3.08811 17.0609 2.66669 16 2.66669H8ZM21.724 9.72402C21.974 9.47406 22.3131 9.33364 22.6667 9.33364C23.0202 9.33364 23.3593 9.47406 23.6093 9.72402L28.9427 15.0574C29.1926 15.3074 29.333 15.6465 29.333 16C29.333 16.3536 29.1926 16.6926 28.9427 16.9427L23.6093 22.276C23.3579 22.5189 23.0211 22.6533 22.6715 22.6503C22.3219 22.6472 21.9875 22.507 21.7402 22.2598C21.493 22.0126 21.3528 21.6782 21.3498 21.3286C21.3467 20.979 21.4811 20.6422 21.724 20.3907L24.7813 17.3334H13.3333C12.9797 17.3334 12.6406 17.1929 12.3905 16.9428C12.1405 16.6928 12 16.3536 12 16C12 15.6464 12.1405 15.3073 12.3905 15.0572C12.6406 14.8072 12.9797 14.6667 13.3333 14.6667H24.7813L21.724 11.6094C21.474 11.3593 21.3336 11.0202 21.3336 10.6667C21.3336 10.3131 21.474 9.97406 21.724 9.72402Z"
            fill="#2C1E0E"
          />
        </svg>
      </button>
      <ProfileCard {...profileInfo} />
      <div className="mt-10">
        <h2 className="text-xl font-medium text-text-black">
          Historique des activités
        </h2>
        <div className="mt-3 flex flex-col divide-y divide-text-black/30">
          {isLoading ? <>
            <div className="flex justify-between p-2">
              <div className="flex gap-3">
                <Skeleton variant="circular" width={40} height={40} />
                <div className="w-60">
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </div>
              </div>
              <Skeleton variant="rounded" width={48} height={14} />
            </div>
            <div className="flex justify-between p-2">
              <div className="flex gap-3">
                <Skeleton variant="circular" width={40} height={40} />
                <div className="w-60">
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </div>
              </div>
              <Skeleton variant="rounded" width={48} height={14} />
            </div>
          </> : data!.map(h => (<Activity key={h.idHist} activity={`Envoyé à ${h.codeReceiver}`} time={h.dateSent} sent={h.sentPoints} />))}

        </div>
      </div>
    </div>
  );
}

export default Profile;
