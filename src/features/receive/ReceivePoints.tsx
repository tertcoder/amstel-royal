import { CopyToClipboard } from 'react-copy-to-clipboard';
import qr from "../../assets/qr.png";
import Heading from "../../ui/Heading";
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function ReceivePoints() {
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000)
  }

  const codeAdresse = "24001cjwbagecskenfhsyefshsk";

  return (
    <div className="h-screen overflow-y-auto px-4 pb-14">
      <Heading heading="Receive Points" />
      <div className="mx-auto flex w-56 flex-col items-center">
        <span className="font-medium text-text-black/70">Your address</span>
        <div className="mt-2 h-56 w-56 rounded-[20px] bg-input p-3 shadow-sm-blur">
          <img src={qr} />
        </div>
        <p className="mt-5 block font-medium text-text-black">
          24001cjwbagecske...
        </p>
        <CopyToClipboard text={codeAdresse} onCopy={onCopyText}>
          <button className={twMerge("mt-3 flex items-center justify-center gap-2 rounded-full duration-150 px-3 py-1.5 shadow-sm-blur", `${copyStatus ? "bg-btn-color" : "bg-input "}`)}>
            <span className={twMerge("text-text-black", `${copyStatus ? "text-text-white" : ""}`)}>{copyStatus ? "Copied" : "Copy"}</span>
            {copyStatus ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#EBE4D6" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312V11.3976V11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z"
                  fill="#2C1E0E"
                />
                <path
                  d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z"
                  fill="#2C1E0E"
                />
              </svg>)}
          </button>
        </CopyToClipboard>
      </div>
      <div className="mt-16">
        <h2 className="text-lg font-medium text-text-black">
          Receiving Points Guide
        </h2>
        <div className="mt-3">
          <h3 className="font-medium text-text-black">1. QR Code Method</h3>
          <ul className="list-disc pl-12 font-medium text-text-black/70">
            <li>Share your unique QR Code with the sender</li>
            <li>
              They can scan your QR Code using their app to send points directly
              to your account
            </li>
          </ul>
          <h3 className="mt-3 font-medium text-text-black">
            2. Address Method
          </h3>
          <ul className="list-disc pl-12 font-medium text-text-black/70">
            <li>
              Alternatively, share your receiving address with the sender.
            </li>
            <li>
              They can enter your address manually in their app to send points
              to your account.
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default ReceivePoints;
