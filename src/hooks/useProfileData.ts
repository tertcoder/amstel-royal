import { LoggedUser } from "../utils/models";
import useLocalStorage from "./useLocalStorage";
import { useFetchName } from "../data/useFetchName";
import { useFetchPoints } from "../data/useFetchPoints";
import { useFetchLevel } from "../data/useFetchLevel";
import { useFetchReceivedPoints } from "../data/useFetchReceivedPoints";

export function useProfileData() {
  const [loggedUser] = useLocalStorage<LoggedUser[]>("loggedUser", []);

  const code = loggedUser[0]?.code;
  const type = loggedUser[0]?.type;

  const { data: fullName, isLoading: isNameLoading, error: nameError } = useFetchName(code);

  const { data: yourPoints, isLoading: isPointsLoading, error: pointsError } = useFetchPoints(code);

  const { data: receivedPoints, isLoading: isReceivedPointsLoading, error: receivedPointsError } = useFetchReceivedPoints(code);

  const { data: yourLevel, isLoading: isLevelLoading, error: levelError } = useFetchLevel(code);

  const isLoading = isNameLoading || isPointsLoading || isLevelLoading || isReceivedPointsLoading;
  const error = nameError || pointsError || levelError || receivedPointsError;

  return {
    type,
    code,
    fullName,
    yourPoints,
    yourLevel,
    receivedPoints,
    isLoading,
    error,
  };
}
