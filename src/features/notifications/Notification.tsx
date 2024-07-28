type notifType = {
  title: string;
  description: string;
  time: string;
};
function Notification({ notif }: { notif: notifType }) {
  return (
    // bg-text-black/5
    <div className="flex items-center gap-3 border-b border-text-black/70 p-2">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7036 40.4836C18.3858 42.622 21.0284 44 24 44C26.9716 44 29.6142 42.622 31.2964 40.4836C26.4528 41.14 21.5472 41.14 16.7036 40.4836Z"
          fill="#2C1E0E"
        />
        <path
          d="M37.4982 18V19.4082C37.4982 21.0982 37.9806 22.7504 38.8844 24.1564L41.0992 27.6024C43.1224 30.7498 41.578 35.0278 38.0592 36.0232C28.8546 38.6268 19.1455 38.6268 9.94072 36.0232C6.4221 35.0278 4.87764 30.7498 6.90072 27.6024L9.1156 24.1564C10.0194 22.7504 10.5017 21.0982 10.5017 19.4082V18C10.5017 10.268 16.5451 4 24 4C31.4548 4 37.4982 10.268 37.4982 18Z"
          fill="#2C1E0E"
        />
      </svg>
      <div className="flex-1">
        {/* <div className="flex items-center justify-between"> */}
        <h3 className="font-medium text-text-black">{notif.title}</h3>
        {/* </div> */}
        <p className="text-sm text-text-black/70">{notif.description}</p>
        <span className="text-xs text-text-black/70">{notif.time}</span>
      </div>
    </div>
  );
}

export default Notification;
