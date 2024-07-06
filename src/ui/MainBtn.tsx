import { twMerge } from "tailwind-merge";

function MainBtn({
  text,
  onClick,
  type = "primary",
  disabled = false,
}: {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <button
      //  "
      // className="border border-text-black text-text-black"
      disabled={disabled}
      className={twMerge(
        "w-full rounded-lg py-3 duration-200 font-medium shadow-sm-blur",
        ` ${type === "primary" ? "bg-btn-color text-bg-one" : "border border-text-black text-text-black"} ${disabled ? "opacity-70 cursor-not-allowed" : ""}`,
      )}
      onClick={onClick}
    >
      {text}
    </button >
  );
}

export default MainBtn;
