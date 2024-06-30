import { useEffect, useState } from "react";
import ad1 from "../../assets/ads-1.webp";
import ad2 from "../../assets/Ads-2.webp";
import ad3 from "../../assets/Ads_3.webp";
import ad4 from "../../assets/ads_4.webp";

const ads: string[] = [ad1, ad2, ad3, ad4];

function FeaturedAds() {
  const [curr, setCurr] = useState(0);

  // const prev = () => {
  //   setCurr((curr) => (curr === 0 ? ads.length - 1 : curr - 1));
  // };
  const next = () => {
    setCurr((curr) => (curr === ads.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-medium text-text-black">Featured Ads</h2>
      <div className="flex flex-col gap-4">
        <div className="w-full max-w-screen-lg overflow-hidden rounded-xl bg-input">
          {/* Carrousel */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {ads.map((p) => (
              <img
                src={p}
                alt="Amstel Royal Ads"
                className="object-cover"
                key={p}
              />
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 justify-self-center">
          {ads.map((_, i) => (
            <button
              onClick={() => setCurr(i)}
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ease-out ${curr === i ? "border-main-two bg-main-two p-[5px]" : "border-main-one bg-opacity-50"}`}
              key={i}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedAds;
