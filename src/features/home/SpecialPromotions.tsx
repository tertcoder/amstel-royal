import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

import { useFetchPromotions } from "../../data/useFetchPromotions";
import { PromotionType } from "../../utils/models";
import Promotion from "./Promotion";

function SpecialPromotions() {
  const { data, isLoading } = useFetchPromotions();

  return (
    <div className="mb-2 mt-8">
      <h2 className="text-xl font-medium text-text-black">
        Promotions spéciales
      </h2>
      {/* Special Promotions are not yet available */}
      <div className="flex flex-col divide-y divide-text-black/30">
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
          :
          (data || [] as PromotionType[]).map((promotion: PromotionType) => <Promotion key={promotion.idProm} image={promotion[5]} title={promotion.nameBar} description={promotion.description} />)
        }
        {!isLoading && data.length === 0 && (
          <div className="mt-6 text-center text-sm text-text-black/70">
            Aucune promotion spéciale disponible pour le moment.
          </div>
        )}

      </div>
      <div className="mt-2 flex items-center gap-5 border-t border-text-black/10 p-3 pt-3">
        <p className="text-text-black">
          Découvrez les bars où vous pouvez obtenir ces promotions (Partenariat)
        </p>
        <Link
          to="/bars"
          className="flex shrink-0 items-center font-medium underline"
        >
          <span>
            Découvrir les bars</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0625 9.5625H2.8125C2.66332 9.5625 2.52024 9.50324 2.41475 9.39775C2.30926 9.29226 2.25 9.14918 2.25 9C2.25 8.85082 2.30926 8.70774 2.41475 8.60225C2.52024 8.49676 2.66332 8.4375 2.8125 8.4375H14.0625C14.2117 8.4375 14.3548 8.49676 14.4602 8.60225C14.5657 8.70774 14.625 8.85082 14.625 9C14.625 9.14918 14.5657 9.29226 14.4602 9.39775C14.3548 9.50324 14.2117 9.5625 14.0625 9.5625Z"
              fill="#2C1E0E"
            />
            <path
              d="M13.8296 9.00002L9.16422 4.33577C9.0586 4.23015 8.99926 4.08689 8.99926 3.93752C8.99926 3.78815 9.0586 3.64489 9.16422 3.53927C9.26984 3.43365 9.4131 3.37431 9.56247 3.37431C9.71184 3.37431 9.8551 3.43365 9.96072 3.53927L15.0232 8.60177C15.0756 8.65402 15.1172 8.7161 15.1455 8.78443C15.1739 8.85277 15.1885 8.92603 15.1885 9.00002C15.1885 9.07401 15.1739 9.14727 15.1455 9.21561C15.1172 9.28395 15.0756 9.34602 15.0232 9.39827L9.96072 14.4608C9.8551 14.5664 9.71184 14.6257 9.56247 14.6257C9.4131 14.6257 9.26984 14.5664 9.16422 14.4608C9.0586 14.3551 8.99926 14.2119 8.99926 14.0625C8.99926 13.9131 9.0586 13.7699 9.16422 13.6643L13.8296 9.00002Z"
              fill="#2C1E0E"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SpecialPromotions;
