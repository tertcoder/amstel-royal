import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./features/authentication/Login";
import AuthLayout from "./ui/AuthLayout";
import Signup from "./features/authentication/Signup";
import OtpVerification from "./features/authentication/OtpVerification";
import SignupSuccess from "./features/authentication/SignupSuccess";
import AppLayout from "./ui/AppLayout";
import Home from "./Screen/Home";
import Bars from "./Screen/Bars";
import Profile from "./Screen/Profile";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/otp_verification",
    element: <OtpVerification />,
  },
  {
    path: "/signup_success",
    element: <SignupSuccess />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/bars",
        element: <Bars />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
