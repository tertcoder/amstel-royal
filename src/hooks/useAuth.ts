import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();

  const login = (userData: any) => {
    localStorage.setItem('loggedUser', JSON.stringify(userData));
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