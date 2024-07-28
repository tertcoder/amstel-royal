import Skeleton from '@mui/material/Skeleton';


import frame from "../../assets/frame.png";
import { QRCode } from "react-qrcode-logo";
type profileDetailsTypes = {
  type: number,
  code: string,
  fullName: string,
  yourPoints: number,
  receivedPoints: number | undefined,
  yourLevel: string | undefined,
  isLoading: boolean,
  error: Error | null,
}
function ProfileCard({ type, code, fullName, yourPoints, receivedPoints, yourLevel, isLoading }: profileDetailsTypes) {
  return (
    <div className="gold-gradient relative h-56 w-full overflow-hidden rounded-xl p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="drop-shadow-sm-blur flex items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#EBE4D6" />
              <path
                d="M24.25 22.25C26.4591 22.25 28.25 20.4591 28.25 18.25C28.25 16.0409 26.4591 14.25 24.25 14.25C22.0409 14.25 20.25 16.0409 20.25 18.25C20.25 20.4591 22.0409 22.25 24.25 22.25Z"
                fill="#2C1E0E"
              />
              <path
                d="M24.25 33.25C28.116 33.25 31.25 31.4591 31.25 29.25C31.25 27.0409 28.116 25.25 24.25 25.25C20.384 25.25 17.25 27.0409 17.25 29.25C17.25 31.4591 20.384 33.25 24.25 33.25Z"
                fill="#2C1E0E"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center">
            {isLoading ? <Skeleton animation="wave" variant="rounded" height={14} width={72} /> : <h3 className="font-semibold text-text-white">{fullName}</h3>}
            {isLoading ? <Skeleton animation="wave" variant="rounded" className='mt-2' height={14} width={72} /> : <p className="text-sm text-text-white/90">{code}</p>}
          </div>
        </div>
        {/* QR Code */}
        <div className="flex h-20 w-20  shrink-0 items-center justify-center rounded-[10px] overflow-hidden bg-bg-one ">

          {isLoading ? <Skeleton animation="wave" variant='rounded' width={80} height={80} /> : <QRCode size={64} bgColor='#EBE4D6' ecLevel='H' fgColor='#2C1E0E' eyeColor="#2C1E0E" eyeRadius={20} value={code} />}
        </div>
      </div>
      <div className='flex max-w-60 justify-between w-full'>
        <div>
          <span className="text-text-white/90">Vos points</span>

          {isLoading ? <Skeleton animation="wave" variant="rounded" height={14} width={72} /> : <h2 className="text-xl font-semibold text-white">{yourPoints * 1}</h2>}
        </div>
        {type === 0 && <div>
          <span className="text-text-white/90">Points Reçu</span>

          {isLoading ? <Skeleton animation="wave" variant="rounded" height={14} width={72} /> : <h2 className="text-xl font-semibold text-white">{receivedPoints! * 1}</h2>}
        </div>}
      </div>
      {type === 0 && <><span className="text-text-white/90">Votre niveau</span>
        {isLoading ? <Skeleton animation="wave" variant="rounded" height={14} width={72} /> : <h2 className="text-xl font-semibold text-white">{yourLevel}</h2>}</>}
      {/* frame */}
      <img
        src={frame}
        alt="Amstel Royal App Frame"
        className="absolute -bottom-0.5 -right-0.5 w-52"
      />
    </div >
  );
}

export default ProfileCard;
