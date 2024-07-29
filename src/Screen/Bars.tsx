import Skeleton from '@mui/material/Skeleton';

import { useFetchBars } from "../data/useFetchBars";
import Bar from "../features/bars/Bar";


function Bars() {
  const { data: bars, isLoading } = useFetchBars();
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto">
      <h2 className="mt-8 text-2xl font-medium text-text-black">
        Bars en parternariat
      </h2>
      <div className="mt-6 w-full space-y-5">
        {isLoading ? <><Skeleton animation="wave" variant="rounded" width="100%" height={208} className=' rounded-xl' /><Skeleton animation="wave" variant="rounded" width="100%" height={208} /> </> : (bars || []).map((bar) => (
          <Bar name={bar.nameBar} key ={bar.idBar} num={bar.idBar} location={`${bar.communeBar}, ${bar.zoneBar}, ${bar.quartierBar}, ${bar.avenuBar}`} />
        ))}

      </div>
    </div>
  );
}

export default Bars;
