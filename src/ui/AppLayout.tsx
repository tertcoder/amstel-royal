import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

function AppLayout() {
  return (
    <div className="relative h-screen px-4 pb-[70px]">
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default AppLayout;
