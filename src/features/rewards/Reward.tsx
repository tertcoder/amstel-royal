import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useFetchBars } from "../../data/useFetchBars";
import { Bar } from "../../utils/models";
import { useForm, Controller } from "react-hook-form";
import { useProfileData } from "../../hooks/useProfileData";
import useClaimReward from "./useClaimReward";

interface RewardProps {
  idReward: number;
  title: string;
  description: string;
  img: string;
}

interface FormData {
  code: string;
}

function Reward({ idReward, title, description, img }: RewardProps) {
  const { code } = useProfileData();
  const { data } = useFetchBars();
  const bars = data || [] as Bar[];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { claim, isClaiming } = useClaimReward(setIsModalOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [barError, setBarError] = useState<string | null>(null);
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      code: code || "",
    }
  });
  const handleModalToggle = () => {
    setSelectedBar(null);
    reset();

    setIsModalOpen(!isModalOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBarSelect = (idBar: number) => {
    setSelectedBar(idBar);
    setIsDropdownOpen(false);
    setBarError(null); // Clear error on selection
  };

  const onSubmit = (data: FormData) => {
    if (selectedBar === null) {
      setBarError('Sélectionnez un bar');
      return;
    }

    const formData = {
      idReward,
      idBar: selectedBar,
      code: data.code,
    };
    claim(formData);
    reset();
    setSelectedBar(null);
  };

  return (
    <>
      {isModalOpen && (
        <div className={twMerge("fixed inset-0  z-50 flex items-center backdrop-blur-sm justify-center bg-black/75 transition-opacity duration-300", isModalOpen ? "opacity-100" : "opacity-0")}>

          <div className="relative w-full mx-5 bg-bg-one p-6 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4 text-text-black">{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="idBar" className="block text-sm font-medium text-text-black">Sélectionner un bar</label>
                <div className="relative">
                  <div
                    className="w-full bg-inherit text-text-black outline-none placeholder:text-text-black/70 rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70 cursor-pointer"
                    onClick={handleDropdownToggle}
                  >
                    {selectedBar !== null ? bars.find(bar => bar.idBar === selectedBar)?.nameBar || "BRARUDI" : "Sélectionnez un bar"}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md max-h-56 overflow-y-auto">
                      {bars.map((bar) => (
                        <div
                          key={bar.idBar}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleBarSelect(bar.idBar)}
                        >
                          {bar.nameBar}
                        </div>
                      ))}
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleBarSelect(0)}
                      >
                        BRARUDI
                      </div>
                    </div>
                  )}
                </div>
                {barError && <span className="text-red-500 text-sm">{barError}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="code" className="block text-sm font-medium text-text-black">Code</label>
                <Controller
                  name="code"
                  control={control}
                  rules={{ required: 'Entrez le code' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="code"
                      disabled={code ? true : false}
                      className="w-full bg-inherit text-text-black outline-none placeholder:text-text-black/70 rounded-xl bg-input px-4 py-3 shadow-sm-blur duration-150 focus-within:border focus-within:border-text-black/70"
                    />
                  )}
                />
                {errors.code && <span className="text-red-500 text-sm">{errors.code.message}</span>}
              </div>
              <button type="submit" className="bg-btn-color text-white py-2 px-4 rounded-md">
                {isClaiming ? "En attente..." : "Réclamez"}
              </button>
            </form>
            <button
              onClick={handleModalToggle}
              className="absolute -top-2 -right-2 rounded-full w-10 h-10 transition duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96963 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#c7c4be"></path> </g></svg>
            </button>
          </div >
        </div >
      )}
      <div className="linear flex items-center gap-3 rounded-xl p-3 shadow-sm-blur cursor-pointer" onClick={handleModalToggle}>
        <img
          src={img}
          alt="Reward"
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <div>
            <h3 className="font-semibold text-text-white">{title}</h3>
            <p className="text-sm font-medium text-text-white">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reward;
