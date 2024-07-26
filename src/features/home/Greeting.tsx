import { useFetchName } from "../../data/useFetchName";
import useLocalStorage from "../../hooks/useLocalStorage";
import { LoggedUser } from "../../utils/data";

export function Greeting() {
  const [loggedUser] = useLocalStorage<LoggedUser[]>('loggedUser', []);
  const { data } = useFetchName(loggedUser[0].code);

  return <div>
    <span className="font-medium text-text-black/70">Welcome back!</span>
    <h2 className="text-lg font-medium text-text-black"> {data ? `${data}` : "No Name Found!"}
    </h2>
  </div>;
}
