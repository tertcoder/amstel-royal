import glass from "../assets/glass.webp";

function GlassProstSmall() {
  return (
    <div className="glass-container-small">
      <div className="glass-shadow"></div>
      <img src={glass} alt="Glass 1" className="glass glass-left w-8" />
      <img src={glass} className="glass glass-right w-8" />
    </div>
  );
}

export default GlassProstSmall
