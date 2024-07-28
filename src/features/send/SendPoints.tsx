import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Heading from "../../ui/Heading";
import MainBtn from "../../ui/MainBtn";
import QRCodeScanner from "./QRCodeScanner";
import { useName } from "../../data/useFetchName";
import { useProfileData } from "../../hooks/useProfileData";
// import { PointsToSendType } from "../../utils/models";
// import useLocalStorage from "../../hooks/useLocalStorage";
import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import PopupPassword from "./PopupPassword";
import { useSendPointAgent } from "./useSendPointAgent";
import GlassProstSmall from "../../ui/GlassProstSmall";

interface FormData {

  identifier: string;
  points?: number;
  amount?: number;
  file?: FileList;
}

function SendPoints() {
  const [sendingPoints, setSendingPoints] = useState<boolean>(false);
  const { fullName: full_name, yourPoints, type, code } = useProfileData();

  const [searchParam, setSearchParam] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const { fullName, name, isLoading } = useName();
  const [isScanning, setIsScanning] = useState(false);
  const [codeReceiver, setCodeReceiver] = useState("");
  const [dataToSend, setDataToSend] = useState<{
    codeSender: string,
    codeReceiver: string,
    points: number,
    type: number,
    qty: number | null,
    invoice: null,
  }>({} as {
    codeSender: string,
    codeReceiver: string,
    points: number,
    type: number,
    qty: number | null,
    invoice: null,
  });
  const { control, handleSubmit, setValue, } = useForm<FormData>();
  const { isLoading: sending } = useSendPointAgent();

  const handleScan = (data: string | null) => {
    if (data) {
      name({ code: data });
      setIsScanning(false);
      setCodeReceiver(data);
      setValue('identifier', data);
    }
  };



  const onSubmit = (data: FormData) => {
    const toSend = {
      ...data, codeSender: code,
      codeReceiver: codeReceiver,
      points: data.points || 0,
      type: type,
      qty: data.amount || null,
      // invoice: data.file ? data.file[0] : null,
      invoice: null,
    }
    console.log("Default: ", toSend);

    setDataToSend(toSend as {
      identifier: string,
      codeSender: string,
      codeReceiver: string,
      points: number,
      type: number,
      qty: number,
      invoice: null,
    })




  };

  useEffect(() => {
    if (fullName) {
      setValue('identifier', fullName);
    }
  }, [fullName, setValue]);


  return (
    <div className="h-screen overflow-y-auto px-4 pb-14">

      <div className={twMerge("inset-x-0 z-50 bg-bg-one/20 absolute flex items-center max-h-screen h-full justify-center duration-200 transition-opacity backdrop-blur-sm", `${sendingPoints ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="flex flex-col items-center justify-center">
          <GlassProstSmall />
          <span className="text-text-black font-medium">Chargement</span>
        </div>
      </div>
      <Heading heading="Send Points" />
      <div className="mt-16">
        <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="number" hidden value={type} {...register("type")} /> */}
          <div className="flex justify-between self-stretch">
            <div className="flex gap-2">
              <div className="drop-shadow-sm-blur">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#E8E8E8" />
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
              <div>
                <span className="text-sm font-medium text-text-black/70">
                  From
                </span>
                <h2 className="font-semibold text-text-black">
                  {full_name}
                </h2>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-text-black/70">
                Points
              </span>
              <h2 className="font-semibold text-text-black">{yourPoints}</h2>
            </div>
          </div>
          <div className="relative mx-2 w-full max-w-80">
            <div className="mx-auto w-min translate-y-1/2">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_104_233)">
                  <rect
                    x="0.5"
                    y="48"
                    width="48"
                    height="48"
                    rx="24"
                    transform="rotate(-90 0.5 48)"
                    fill="#EBE4D6"
                  />
                  <path
                    d="M44.5 24C44.5 35.046 35.546 44 24.5 44C13.454 44 4.5 35.046 4.5 24C4.5 12.954 13.454 4 24.5 4C35.546 4 44.5 12.954 44.5 24ZM18.5 24V32H22.5L22.5 14L12.5 24H18.5ZM26.5 34L36.5 24L30.5 24V16H26.5V34Z"
                    fill="#2C1E0E"
                  />
                  <rect x="0.5" width="48" height="48" rx="24" fill="#EBE4D6" />
                  <rect
                    x="1"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#2C1E0E"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M30.3333 33.3333V19.3333M30.3333 33.3333L26.25 29.25M30.3333 33.3333L34.4167 29.25M18.6667 29.8333V14.6666M18.6667 14.6666L14.5833 18.75M18.6667 14.6666L22.75 18.75"
                    stroke="#2C1E0E"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_233">
                    <rect
                      x="0.5"
                      y="48"
                      width="48"
                      height="48"
                      rx="24"
                      transform="rotate(-90 0.5 48)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="border-t border-text-black"></div>
          </div>
          <div className="mt-10 flex justify-between gap-3 self-stretch">
            <div className="flex flex-1 gap-2">
              <div className="drop-shadow-sm-blur">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#E8E8E8" />
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
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium text-text-black/70">
                  To
                </span>
                {isLoading ? (
                  <Skeleton variant='rounded' width={72} height={14} animation="wave" />
                ) : (
                  <Controller
                    name="identifier"
                    control={control}
                    rules={{ required: 'Identifier is required' }}
                    render={({ field }) => (
                      <input
                        // onChange={(e) => setTypedCode(e.target.value)}
                        placeholder="Scan Code"
                        className="bg-inherit text-text-black outline-none placeholder:text-sm placeholder:text-text-black/70"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                )}
              </div>
            </div>
            <button onClick={(e) => { e.preventDefault(); setIsScanning(s => !s); }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 28H5.33333C4.97971 28 4.64057 27.8596 4.39052 27.6095C4.14047 27.3595 3.99999 27.0203 3.99999 26.6667V21.3334C3.99999 20.9798 3.85952 20.6406 3.60947 20.3906C3.35942 20.1405 3.02028 20 2.66666 20C2.31304 20 1.9739 20.1405 1.72385 20.3906C1.4738 20.6406 1.33333 20.9798 1.33333 21.3334V26.6667C1.33333 27.7276 1.75476 28.745 2.5049 29.4951C3.25505 30.2453 4.27246 30.6667 5.33333 30.6667H10.6667C11.0203 30.6667 11.3594 30.5262 11.6095 30.2762C11.8595 30.0261 12 29.687 12 29.3334C12 28.9798 11.8595 28.6406 11.6095 28.3906C11.3594 28.1405 11.0203 28 10.6667 28ZM29.3333 20C28.9797 20 28.6406 20.1405 28.3905 20.3906C28.1405 20.6406 28 20.9798 28 21.3334V26.6667C28 27.0203 27.8595 27.3595 27.6095 27.6095C27.3594 27.8596 27.0203 28 26.6667 28H21.3333C20.9797 28 20.6406 28.1405 20.3905 28.3906C20.1405 28.6406 20 28.9798 20 29.3334C20 29.687 20.1405 30.0261 20.3905 30.2762C20.6406 30.5262 20.9797 30.6667 21.3333 30.6667H26.6667C27.7275 30.6667 28.7449 30.2453 29.4951 29.4951C30.2452 28.745 30.6667 27.7276 30.6667 26.6667V21.3334C30.6667 20.9798 30.5262 20.6406 30.2761 20.3906C30.0261 20.1405 29.687 20 29.3333 20ZM26.6667 1.33337H21.3333C20.9797 1.33337 20.6406 1.47385 20.3905 1.7239C20.1405 1.97395 20 2.31309 20 2.66671C20 3.02033 20.1405 3.35947 20.3905 3.60952C20.6406 3.85957 20.9797 4.00004 21.3333 4.00004H26.6667C27.0203 4.00004 27.3594 4.14052 27.6095 4.39056C27.8595 4.64061 28 4.97975 28 5.33337V10.6667C28 11.0203 28.1405 11.3595 28.3905 11.6095C28.6406 11.8596 28.9797 12 29.3333 12C29.687 12 30.0261 11.8596 30.2761 11.6095C30.5262 11.3595 30.6667 11.0203 30.6667 10.6667V5.33337C30.6667 4.27251 30.2452 3.25509 29.4951 2.50495C28.7449 1.7548 27.7275 1.33337 26.6667 1.33337ZM2.66666 12C3.02028 12 3.35942 11.8596 3.60947 11.6095C3.85952 11.3595 3.99999 11.0203 3.99999 10.6667V5.33337C3.99999 4.97975 4.14047 4.64061 4.39052 4.39056C4.64057 4.14052 4.97971 4.00004 5.33333 4.00004H10.6667C11.0203 4.00004 11.3594 3.85957 11.6095 3.60952C11.8595 3.35947 12 3.02033 12 2.66671C12 2.31309 11.8595 1.97395 11.6095 1.7239C11.3594 1.47385 11.0203 1.33337 10.6667 1.33337H5.33333C4.27246 1.33337 3.25505 1.7548 2.5049 2.50495C1.75476 3.25509 1.33333 4.27251 1.33333 5.33337V10.6667C1.33333 11.0203 1.4738 11.3595 1.72385 11.6095C1.9739 11.8596 2.31304 12 2.66666 12ZM13.3333 6.66671H8C7.64637 6.66671 7.30723 6.80718 7.05719 7.05723C6.80714 7.30728 6.66666 7.64642 6.66666 8.00004V13.3334C6.66666 13.687 6.80714 14.0261 7.05719 14.2762C7.30723 14.5262 7.64637 14.6667 8 14.6667H13.3333C13.687 14.6667 14.0261 14.5262 14.2761 14.2762C14.5262 14.0261 14.6667 13.687 14.6667 13.3334V8.00004C14.6667 7.64642 14.5262 7.30728 14.2761 7.05723C14.0261 6.80718 13.687 6.66671 13.3333 6.66671ZM12 12H9.33333V9.33337H12V12ZM18.6667 14.6667H24C24.3536 14.6667 24.6928 14.5262 24.9428 14.2762C25.1929 14.0261 25.3333 13.687 25.3333 13.3334V8.00004C25.3333 7.64642 25.1929 7.30728 24.9428 7.05723C24.6928 6.80718 24.3536 6.66671 24 6.66671H18.6667C18.313 6.66671 17.9739 6.80718 17.7239 7.05723C17.4738 7.30728 17.3333 7.64642 17.3333 8.00004V13.3334C17.3333 13.687 17.4738 14.0261 17.7239 14.2762C17.9739 14.5262 18.313 14.6667 18.6667 14.6667ZM20 9.33337H22.6667V12H20V9.33337ZM13.3333 17.3334H8C7.64637 17.3334 7.30723 17.4739 7.05719 17.7239C6.80714 17.9739 6.66666 18.3131 6.66666 18.6667V24C6.66666 24.3537 6.80714 24.6928 7.05719 24.9429C7.30723 25.1929 7.64637 25.3334 8 25.3334H13.3333C13.687 25.3334 14.0261 25.1929 14.2761 24.9429C14.5262 24.6928 14.6667 24.3537 14.6667 24V18.6667C14.6667 18.3131 14.5262 17.9739 14.2761 17.7239C14.0261 17.4739 13.687 17.3334 13.3333 17.3334ZM12 22.6667H9.33333V20H12V22.6667ZM18.6667 21.3334C19.0203 21.3334 19.3594 21.1929 19.6095 20.9429C19.8595 20.6928 20 20.3537 20 20C20.3536 20 20.6928 19.8596 20.9428 19.6095C21.1929 19.3595 21.3333 19.0203 21.3333 18.6667C21.3333 18.3131 21.1929 17.9739 20.9428 17.7239C20.6928 17.4739 20.3536 17.3334 20 17.3334H18.6667C18.313 17.3334 17.9739 17.4739 17.7239 17.7239C17.4738 17.9739 17.3333 18.3131 17.3333 18.6667V20C17.3333 20.3537 17.4738 20.6928 17.7239 20.9429C17.9739 21.1929 18.313 21.3334 18.6667 21.3334ZM24 17.3334C23.6464 17.3334 23.3072 17.4739 23.0572 17.7239C22.8071 17.9739 22.6667 18.3131 22.6667 18.6667V22.6667C22.313 22.6667 21.9739 22.8072 21.7239 23.0572C21.4738 23.3073 21.3333 23.6464 21.3333 24C21.3333 24.3537 21.4738 24.6928 21.7239 24.9429C21.9739 25.1929 22.313 25.3334 22.6667 25.3334H24C24.3536 25.3334 24.6928 25.1929 24.9428 24.9429C25.1929 24.6928 25.3333 24.3537 25.3333 24V18.6667C25.3333 18.3131 25.1929 17.9739 24.9428 17.7239C24.6928 17.4739 24.3536 17.3334 24 17.3334ZM18.6667 22.6667C18.403 22.6667 18.1452 22.7449 17.9259 22.8914C17.7066 23.0379 17.5357 23.2462 17.4348 23.4898C17.3339 23.7334 17.3075 24.0015 17.3589 24.2602C17.4104 24.5188 17.5374 24.7564 17.7239 24.9429C17.9103 25.1293 18.1479 25.2563 18.4065 25.3078C18.6652 25.3592 18.9333 25.3328 19.1769 25.2319C19.4205 25.131 19.6288 24.9601 19.7753 24.7408C19.9218 24.5215 20 24.2638 20 24C20 23.6464 19.8595 23.3073 19.6095 23.0572C19.3594 22.8072 19.0203 22.6667 18.6667 22.6667Z"
                  fill="#2C1E0E"
                />
              </svg>
            </button>
          </div>
          {isScanning && <QRCodeScanner onScan={handleScan} />}
          {type === 1 ? (
            <div className="flex max-w-60 w-full my-6 flex-col gap-4">
              <Controller
                name="points"
                control={control}
                render={({ field }) => (
                  <input
                    placeholder="Entrez les points ici..."
                    className="bg-input px-2 rounded-md shadow-sm-blur text-text-black outline-none placeholder:text-sm placeholder:text-text-black/70 py-1"
                    type="number"
                    {...field}
                  />
                )}
              />
              <Controller
                name="amount"
                control={control}
                rules={{ required: 'Amount is required' }}
                render={({ field }) => (
                  <input
                    inputMode="numeric"
                    placeholder="Entrez la quantite"
                    className="bg-input px-2 rounded-md shadow-sm-blur text-text-black outline-none placeholder:text-sm placeholder:text-text-black/70 py-1"
                    type="number"
                    {...field}
                  />
                )}
              />
              {/* <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col border border-input px-2 rounded-md shadow-sm-blur">
                    <label className="text-sm font-medium text-text-black/70 mb-1">Choose File</label>
                    <input
                      type="file"
                      className="text-text-black p-2"
                      onChange={(e) => {
                        const fileList = e.target.files;
                        if (fileList) {
                          field.onChange(fileList);
                        }
                      }}
                    />
                  </div>
                )}
              /> */}
            </div>
          ) : (
            <div className="mb-16 mt-6 flex flex-col items-center">
              <h2 className="font-medium text-text-black/70">Amount</h2>
              <Controller
                name="points"
                control={control}
                rules={{ required: 'Amount is required' }}
                render={({ field }) => (
                  <div>
                    <input
                      inputMode="numeric"
                      type="number"
                      className="w-14 border-b border-text-black/70 bg-inherit text-center text-2xl duration-150 focus:border-text-black focus:outline-none"
                      {...field}
                    />
                    <span className="text-sm font-medium text-text-black/70"> points</span>
                  </div>
                )}
              />
            </div>
          )}
          <MainBtn text="Send" onClick={() => { setSearchParam("?confirm=true"); }} />
        </form>
      </div>

      <div className={twMerge("inset-0 bg-bg-one/20 absolute flex items-center justify-center duration-200 transition-opacity backdrop-blur-sm", `${searchParam.get('confirm') === 'true' ? 'opacity-100 scale-100' : 'scale-0 opacity-0'}`)}>
        <div className="relative">

          <button className="w-12 absolute -top-1 right-0 rounded-full h-12 z-10 bg-red- border border-text-black text-text-black text-lg font-medium flex items-center justify-center" onClick={() => setSearchParam("?confirm=false")}> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#2C1E0E"></path> </g></svg></button>
          <PopupPassword setSearchParam={setSearchParam} searchParam={searchParam}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            sending={sending}
            setSendingPoints={setSendingPoints} dataToSend={dataToSend} />
        </div>

      </div>
    </div>
  );
}

export default SendPoints;

