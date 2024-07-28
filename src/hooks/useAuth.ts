import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { LoggedUser } from "../utils/models";

function useAuth() {
  const navigate = useNavigate();
  const [, setLoggedUser] = useLocalStorage<LoggedUser[]>('loggedUser', []);

  const login = (userData: LoggedUser[]) => {
    // localStorage.setItem('loggedUser', JSON.stringify(userData));

    setLoggedUser(userData);
    localStorage.setItem('loginTimestamp', Date.now().toString());

    navigate("/home", { replace: true })
  }
  const logout = () => {
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('loginTimestamp');
    navigate("/", { replace: true })

  }

  return { login, logout }
}
export default useAuth;