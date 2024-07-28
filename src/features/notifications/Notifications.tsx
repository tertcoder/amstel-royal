import { useFetchNotifications } from "../../data/useFetchNotifications";
import { useProfileData } from "../../hooks/useProfileData";
import Heading from "../../ui/Heading";
import Notification from "./Notification";

// const notifications = [
//   {
//     title: "Point Sent",
//     description: "You’ve sent 30 points to your friend...",
//     time: "Today",
//   },
//   {
//     title: "Points Received",
//     description: "You’ve received 10 points from Cozy Bar.",
//     time: "Yesterday",
//   },
// ];
function Notifications() {
  const { code } = useProfileData();
  const { data } = useFetchNotifications(code);
  console.log(data)
  return (
    <div className="h-screen px-4 pb-14">
      <Heading heading="Notifications" />
      <div>
        {data && data.map((not) => (
          <Notification notif={{ description: not.msg, title: not.titre, time: not.dateNot }} key={not.idNot} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
