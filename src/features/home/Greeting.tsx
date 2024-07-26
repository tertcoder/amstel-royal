import { useFetchName } from "../../data/useFetchName";
import useLocalStorage from "../../hooks/useLocalStorage";
import { LoggedUser } from "../../utils/data";

export function Greeting() {
  const [loggedUser] = useLocalStorage<LoggedUser[]>('loggedUser', []);

  return <div>
    <span className="font-medium text-text-black/70">Welcome back!</span>
    <h2 className="text-lg font-medium text-text-black"> {loggedUser ? `${loggedUser[0].Fname} ${loggedUser[0].Lname}` : "No Name Found!"}
    </h2>
  </div>;
}
