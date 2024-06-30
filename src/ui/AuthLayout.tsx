import { Outlet } from "react-router-dom";
import image from "../assets/auth_img.webp";
import logo from "../assets/logo-1.webp";
import glass from "../assets/small_glass.svg";

function AuthLayout() {
  return (
    <div className="relative h-screen w-full">
      <img
        src={image}
        className="w-full -translate-y-20"
        alt="Amstel Royal Login or Sign up"
      />
      <div className="absolute bottom-0 flex w-full flex-col items-center rounded-t-[30px] bg-bg-one px-8 pb-8 pt-16">
        <img
          src={logo}
          alt="Amstel Royal Logo"
          className="absolute left-1/2 w-[120px] -translate-x-1/2 -translate-y-[115px]"
        />
        <div className="flex items-center">
          <h2 className="text-2xl font-medium">Welcome back! </h2>
          <img src={glass} alt="Amstel Royal Glass" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
