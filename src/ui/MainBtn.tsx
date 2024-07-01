import { twMerge } from "tailwind-merge";

function MainBtn({
  text,
  onClick,
  type = "primary",
}: {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
}) {
  return (
    <button
      //  "
      // className="border border-text-black text-text-black"
      className={twMerge(
        "w-full rounded-lg py-3 font-medium shadow-sm-blur",
        ` ${type === "primary" ? "bg-btn-color text-bg-one" : "border border-text-black text-text-black"}`,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default MainBtn;
