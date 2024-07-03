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
import Authentication from "./ui/Authentication";
import Application from "./ui/Application";
import SendPoints from "./features/send/SendPoints";
import SendPointsSuccess from "./features/send/SendPointsSuccess";
import ReceivePoints from "./features/receive/ReceivePoints";
import Rewards from "./features/rewards/Rewards";
import Notifications from "./features/notifications/Notifications";
import Forgot from "./ui/Forgot";
import ProvidePhone from "./features/forgotPassword/ProvidePhone";
import OtpVerificationOnForgotPassword from "./features/forgotPassword/OtpVerification";
import PasswordReset from "./features/forgotPassword/PasswordReset";

const router = createBrowserRouter([
  {
    element: <Authentication />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/",
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
        element: <Forgot />,
        children: [
          {
            path: "/step_1_phone",
            element: <ProvidePhone/>,
          },
          {
            path: "/step_2_otp_verification",
            element: <OtpVerificationOnForgotPassword/>,
          },
          {
            path: "/step_3_password_reset",
            element: <PasswordReset/>,
          },
        ],
      },
    ],
  },
  {
    element: <Application />,
    children: [
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
      {
        path: "/send_points",
        element: <SendPoints />,
      },
      {
        path: "/send_points_success",
        element: <SendPointsSuccess />,
      },
      {
        path: "/receive_points",
        element: <ReceivePoints />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
