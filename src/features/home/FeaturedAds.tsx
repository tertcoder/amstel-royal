import { useCallback, useEffect, useState } from "react";
import { Ad } from "../../utils/data";

function FeaturedAds({ ads = [] }: { ads: Ad[] }) {
  const [curr, setCurr] = useState(0);

  const next = useCallback(() => {
    setCurr((curr) => (curr === ads.length - 1 ? 0 : curr + 1));
  }, [ads]);

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, [next]);

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
                src={p.img}
                alt="Amstel Royal Ads"
                className="object-cover"
                key={p.img}
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
