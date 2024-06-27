import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 flex h-[70px] w-full items-center justify-center gap-4 bg-bg-one shadow-sm-blur">
      <NavLink
        to="/home"
        className="link flex items-center gap-1 rounded-md px-[6px] py-1"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.93905 9.12657C2.33331 10.2332 2.33331 11.5681 2.33331 14.2379V16.0125C2.33331 20.5635 2.33331 22.8391 3.70014 24.2528C5.06699 25.6667 7.26687 25.6667 11.6666 25.6667H16.3333C20.733 25.6667 22.933 25.6667 24.2998 24.2528C25.6666 22.8391 25.6666 20.5635 25.6666 16.0125V14.2379C25.6666 11.5681 25.6666 10.2332 25.0609 9.12657C24.4552 8.01995 23.3486 7.33314 21.1353 5.95951L18.802 4.51139C16.4623 3.05938 15.2925 2.33337 14 2.33337C12.7074 2.33337 11.5376 3.05938 9.19801 4.51139L6.86468 5.95953C4.65142 7.33314 3.54478 8.01995 2.93905 9.12657ZM10.5 20.125C10.0167 20.125 9.62498 20.5168 9.62498 21C9.62498 21.4833 10.0167 21.875 10.5 21.875H17.5C17.9832 21.875 18.375 21.4833 18.375 21C18.375 20.5168 17.9832 20.125 17.5 20.125H10.5Z"
          />
        </svg>
        <span className="label font-semibold">Home</span>
      </NavLink>

      <NavLink
        to="/bars"
        className="link flex items-center gap-1 rounded-md px-[6px] py-1"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.8374 9.37573V7.66638H7.16265V9.37573H13.1453V20.7713H11.1511V22.4806H16.8489V20.7713H14.8547V9.37573H20.8374Z" />
          <path d="M24.3995 12.7944L25.6667 5.82504L23.9849 5.51929L22.9729 11.0851H18.5583V12.7944H20.5524V20.7713H18.5583V22.4806H24.256V20.7713H22.2618V12.7944H24.3995Z" />
          <path d="M9.44175 12.7944V11.0851H5.02701L4.01511 5.51929L2.33333 5.82504L3.60044 12.7944H5.73822V20.7713H3.744V22.4806H9.44175V20.7713H7.44757V12.7944H9.44175Z" />
        </svg>

        <span className="label font-semibold">Bars</span>
      </NavLink>

      <NavLink
        to="/profile"
        className="link flex items-center gap-1 rounded-md px-[6px] py-1"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 11.6667C16.5773 11.6667 18.6667 9.57737 18.6667 7.00004C18.6667 4.42271 16.5773 2.33337 14 2.33337C11.4227 2.33337 9.33334 4.42271 9.33334 7.00004C9.33334 9.57737 11.4227 11.6667 14 11.6667Z" />
          <path d="M14 24.5001C18.5103 24.5001 22.1667 22.4107 22.1667 19.8334C22.1667 17.2561 18.5103 15.1667 14 15.1667C9.48968 15.1667 5.83334 17.2561 5.83334 19.8334C5.83334 22.4107 9.48968 24.5001 14 24.5001Z" />
        </svg>

        <span className="label font-semibold">Profile</span>
      </NavLink>
    </div>
  );
}

export default BottomNav;
