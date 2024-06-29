import Bar from "../features/bars/Bar";

const barsObject: { name: string; location: string }[] = [
  { name: "Arena", location: "Mukaza, Rohero II, Bicor" },
  { name: "Guerra Plaza", location: "Ntahangwa, Kamenge, Kavumu, 3eme Av." },
  { name: "Mutwenzi Bar", location: "Ntahangwa, Kamenge, Heha, Gard du nord" },
  {
    name: "Messe des Officiers",
    location: "Mukaza, Rohero, Rohero,Mwezi Gisabo",
  },
  {
    name: "Sky Star",
    location: "Mukaza, Rohero, Kabondo, Boulevard du Japon",
  },
  {
    name: "Chez Gerard",
    location: "Ntahangwa, Ntahangwa, Kigobe, Mwezi Gisabo",
  },
  { name: "Ikindi", location: "Mukaza, Rohero, Kabondo, Boulevard du Japon" },
  { name: "Chez Watos", location: "Rohero, Mukaza, Rohero, Moso" },
  { name: "La Détente", location: "Rohero, Mukaza, Kabondo, Large" },
  {
    name: "Petit Seminaire de Kanyosha",
    location: "Kanyosha, Muha, Kanyosha, Rumonge",
  },
  { name: "Nonita Bar", location: "Rohero, Mukaza, Mutanga Sud, Sanzu" },
  { name: "Molena City Bar", location: "Rohero, Mukaza, Nyakabiga, 8" },
  {
    name: "Foyer d'accueil kwa Buyoya",
    location: "Rohero, Rohero, Rohero, Rwego",
  },
  { name: "DCA", location: "Ntahangwa, Ntahangwa, Kigobe, Kigobe" },
  { name: "Kumusasa Bar", location: "Rohero, Rohero, Bwiza, 8eme Av." },
];
function Bars() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto">
      <h2 className="mt-8 text-2xl font-medium text-text-black">
        Bars we work with
      </h2>
      <div className="mt-6 w-full space-y-5">
        {barsObject.map((bar) => (
          <Bar name={bar.name} key={bar.name} location={bar.location} />
        ))}
      </div>
    </div>
  );
}

export default Bars;
