import Heading from "../../ui/Heading";
import Notification from "./Notification";

const notifications = [
  {
    title: "Point Sent",
    description: "You’ve sent 30 points to your friend...",
    time: "Today",
  },
  {
    title: "Points Received",
    description: "You’ve received 10 points from Cozy Bar.",
    time: "Yesterday",
  },
];
function Notifications() {
  return (
    <div className="h-screen px-4 pb-14">
      <Heading heading="Notifications" />
      <div>
        {notifications.map((not) => (
          <Notification notif={not} key={not.description} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
