import qrcode from "../../assets/qrcode.svg";
import frame from "../../assets/frame.png";

function ProfileCard() {
  return (
    <div className="gold-gradient relative h-56 w-full overflow-hidden rounded-xl p-5">
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            width="68"
            height="69"
            viewBox="0 0 68 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_297_1545)">
              <circle cx="34" cy="34.5" r="24" fill="#EBE4D6" />
              <path
                d="M34.25 32.75C36.4591 32.75 38.25 30.9591 38.25 28.75C38.25 26.5409 36.4591 24.75 34.25 24.75C32.0409 24.75 30.25 26.5409 30.25 28.75C30.25 30.9591 32.0409 32.75 34.25 32.75Z"
                fill="#2C1E0E"
              />
              <path
                d="M34.25 43.75C38.116 43.75 41.25 41.9591 41.25 39.75C41.25 37.5409 38.116 35.75 34.25 35.75C30.384 35.75 27.25 37.5409 27.25 39.75C27.25 41.9591 30.384 43.75 34.25 43.75Z"
                fill="#2C1E0E"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_297_1545"
                x="0"
                y="0.5"
                width="68"
                height="68"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.172549 0 0 0 0 0.117647 0 0 0 0 0.054902 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_297_1545"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_297_1545"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-text-white">Arnaud Mugisha</h3>
            <p className="text-sm text-text-white/90">24001</p>
          </div>
        </div>
        {/* QR Code */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[10px] bg-bg-one">
          <img src={qrcode} alt="Amstel Royal App" />
        </div>
      </div>
      <span className="text-text-white/90">Your points</span>
      <h2 className="text-xl font-semibold text-white">500.00</h2>
      <span className="text-text-white/90">Your level</span>
      <h2 className="text-xl font-semibold text-white">Gold</h2>
      {/* frame */}
      <img
        src={frame}
        alt="Amstel Royal App Frame"
        className="absolute -bottom-0.5 -right-0.5 w-52"
      />
    </div>
  );
}

export default ProfileCard;
