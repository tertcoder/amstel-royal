import { Navigate, Outlet } from "react-router-dom";
import useAutoLogout from "../hooks/useAutoLogout.ts";
import useLocalStorage from "../hooks/useLocalStorage.ts";

function ProtectedRoute() {
  useAutoLogout();
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  return loggedUser ? <Outlet /> : <Navigate to="/" />

}

export default ProtectedRoute
