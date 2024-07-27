function Promotion({
  image,
  title,
  description,
}: {
  image: string
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3">
      <img src={image} alt="Amstel Royal" className="w-16 h-16 rounded-full overflow-hidden object-cover" />
      <div className="flex flex-col">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-text-black/70">{description}</p>
      </div>
    </div>
  );
}

export default Promotion;
