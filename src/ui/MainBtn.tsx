function MainBtn({
  text,
  onClick,
}: {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="shadow-sm-blur text-bg-one bg-btn-color rounded-lg py-3 font-medium"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default MainBtn;
