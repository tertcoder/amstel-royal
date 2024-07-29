import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function Promotion({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center gap-3 p-3">
      {isModalOpen && (
        <div className={twMerge("fixed inset-0 z-50 flex items-center backdrop-blur-sm justify-center bg-black/75 transition-opacity duration-300", isModalOpen ? "opacity-100" : "opacity-0")}>
          <div className="relative">
            <img src={image} alt="Amstel Royal" className="max-h-[80vh] max-w-[80vw] rounded-lg" />
            <button
              onClick={handleModalToggle}
              className="absolute -top-2 -right-2 rounded-full w-10 h-10 transition duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#EBE4D6"></path> </g></svg>
            </button>
          </div>
        </div>
      )}
      <img
        src={image}
        alt="Amstel Royal"
        className="w-16 h-16 rounded-full overflow-hidden object-cover cursor-pointer"
        onClick={handleModalToggle}
      />
      <div className="flex flex-col">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-text-black/70">{description}</p>
      </div>
    </div>
  );
}

export default Promotion;
