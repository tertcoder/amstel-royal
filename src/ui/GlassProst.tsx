import glass from "../assets/glass.webp";

function GlassProst() {
  return (
    <div className="glass-container">
      <div className="glass-shadow"></div>
      <img src={glass} alt="Glass 1" className="glass glass-left w-16" />
      <img src={glass} className="glass glass-right w-16" />
    </div>
  );
}

export default GlassProst;
