import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./features/authentication/Login";
import AuthLayout from "./ui/AuthLayout";
import Signup from "./features/authentication/Signup";
import OtpVerification from "./features/authentication/OtpVerification";
import SignupSuccess from "./features/authentication/SignupSuccess";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
