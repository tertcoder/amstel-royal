import Overview from "../features/home/Overview";
import Welcome from "../features/home/Welcome";

function Home() {
  return (
    <div className="h-full overflow-y-auto">
      <Welcome />
      <Overview />
    </div>
  );
}

export default Home;
