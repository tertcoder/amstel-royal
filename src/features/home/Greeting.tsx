import Skeleton from '@mui/material/Skeleton';

import { useFetchName } from "../../data/useFetchName";
import useLocalStorage from "../../hooks/useLocalStorage";
import { LoggedUser } from "../../utils/models";

export function Greeting() {
  const [loggedUser] = useLocalStorage<LoggedUser[]>('loggedUser', []);
  const { data, error, isLoading } = useFetchName(loggedUser[0].code);

  return <div>
    <span className="font-medium text-text-black/70">Content de te revoir!</span>
    {isLoading ? <Skeleton animation="wave" /> : error ? "" : <h2 className="text-lg font-medium text-text-black"> {data ? `${data}` : "No Name Found!"}
    </h2>
    }
  </div>;
}
