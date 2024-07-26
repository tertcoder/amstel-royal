import { useEffect } from "react";
import useAuth from "./useAuth";

function useAutoLogout() {
  const { logout } = useAuth();

  useEffect(() => {
    const checkSessionTimeout = () => {
      const loginTimestamp = localStorage.getItem('loginTimestamp');
      if (loginTimestamp) {
        const currentTime = Date.now()
        const sessionDuration = currentTime - parseInt(loginTimestamp, 10);
        if (sessionDuration > 600000) { // 10 minutes
          logout();
        }
      }
    }

    const intervalId = setInterval(checkSessionTimeout, 60000);

    return () => {
      clearInterval(intervalId);
    }
  }, [logout]);

  return null;
}

export default useAutoLogout;