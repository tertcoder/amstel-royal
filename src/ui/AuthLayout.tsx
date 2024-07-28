import { Navigate, Outlet } from "react-router-dom";
import image from "../assets/auth_img.webp";
import logo from "../assets/logo-1.webp";

function AuthLayout() {
  // const navigate = useNavigate()
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  if (loggedUser) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="relative h-screen w-full">

      <img
        src={image}
        className="w-full -translate-y-20"
        alt="Amstel Royal Login or Sign up"
      />{" "}
      <div className="stops absolute inset-0 bg-gradient-to-t from-text-black"></div>
      <div className="absolute bottom-0 flex w-full flex-col items-center rounded-t-[30px] bg-bg-one px-8 pb-3 pt-16">
        <img
          src={logo}
          alt="Amstel Royal Logo"
          className="absolute left-1/2 w-[120px] -translate-x-1/2 -translate-y-[115px]"
        />

        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
