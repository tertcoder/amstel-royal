import { Link, useNavigate } from "react-router-dom";
import MainBtn from "../../ui/MainBtn";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="mt-2 flex flex-col items-center">
      <p className="text-text-black/70 text-center text-sm">
        Log in to start earning points with every sip of Amstel!
      </p>
      <form action="" className="mt-6 w-full space-y-5">
        <div className="flex flex-col gap-4">
          <div className="bg-input focus-within:border-text-black/70 shadow-sm-blur flex justify-between rounded-xl px-4 py-3 duration-150 focus-within:border">
            <input
              type="text"
              placeholder="Identifier"
              className="text-text-black placeholder:text-text-black/70 flex-1 bg-inherit outline-none"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 10.2402C14.2091 10.2402 16 8.44937 16 6.24023C16 4.0311 14.2091 2.24023 12 2.24023C9.79086 2.24023 8 4.0311 8 6.24023C8 8.44937 9.79086 10.2402 12 10.2402Z"
                fill="#2C1E0E"
              />
              <path
                d="M12 21.2402C15.866 21.2402 19 19.4494 19 17.2402C19 15.0311 15.866 13.2402 12 13.2402C8.13401 13.2402 5 15.0311 5 17.2402C5 19.4494 8.13401 21.2402 12 21.2402Z"
                fill="#2C1E0E"
              />
            </svg>
          </div>
          <div className="bg-input focus-within:border-text-black/70 shadow-sm-blur flex justify-between rounded-xl px-4 py-3 duration-150 focus-within:border">
            <input
              type="text"
              placeholder="Telephone"
              className="text-text-black placeholder:text-text-black/70 flex-1 bg-inherit outline-none"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0376 5.5564L10.6866 6.71933C11.2723 7.76881 11.0372 9.14555 10.1147 10.068C10.1147 10.068 8.99588 11.187 11.0245 13.2157C13.0525 15.2437 14.1722 14.1255 14.1722 14.1255C15.0947 13.203 16.4714 12.9679 17.5209 13.5536L18.6838 14.2026C20.2686 15.087 20.4557 17.3094 19.0628 18.7024C18.2258 19.5394 17.2004 20.1907 16.0669 20.2336C14.1588 20.306 10.9183 19.8231 7.6677 16.5725C4.41713 13.3219 3.93421 10.0815 4.00655 8.17332C4.04952 7.03983 4.7008 6.01446 5.53781 5.17746C6.93076 3.78451 9.15317 3.97167 10.0376 5.5564Z"
                fill="#2C1E0E"
              />
            </svg>
          </div>

          <div className="bg-input focus-within:border-text-black/70 shadow-sm-blur flex justify-between rounded-xl px-4 py-3 duration-150 focus-within:border">
            <input
              type="password"
              placeholder="Password"
              className="placeholder:text-text-black/70 text-text-black auto flex-1 bg-inherit outline-none"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_59)">
                <path
                  d="M10.4377 4.8756C12.9761 2.3372 17.0917 2.3372 19.6301 4.8756C22.1685 7.41401 22.1685 11.5296 19.6301 14.068C17.7528 15.9453 15.0147 16.4329 12.6905 15.5361L12.4213 15.4264L12.4015 15.4215H11.7913V16.9999C11.7913 17.6472 11.2994 18.1795 10.6691 18.2435L10.5413 18.2499H8.96286V19.8284C8.96286 20.4756 8.47098 21.008 7.84066 21.072L7.71286 21.0784H3.73022C3.20968 21.0784 2.78098 20.6845 2.72614 20.1786L2.72021 20.0685V17.4571C2.72021 17.109 2.84121 16.7734 3.05991 16.5065L3.15956 16.3964L8.6602 10.8957L8.66937 10.8585C8.67195 10.8378 8.67242 10.8099 8.66583 10.7776C8.24427 8.71367 8.83365 6.47968 10.4377 4.8756ZM14.6804 7.70408C14.0946 8.28987 14.0946 9.23962 14.6804 9.8254C15.2662 10.4112 16.216 10.4112 16.8017 9.8254C17.3875 9.23962 17.3875 8.28987 16.8017 7.70408C16.216 7.1183 15.2662 7.1183 14.6804 7.70408Z"
                  fill="#2C1E0E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_59">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.507935)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <MainBtn
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              navigate("/otp_verification");
            }}
            text="Sign up"
          />
          <Link
            to="/login"
            className="text-text-black/70 self-end text-sm underline"
          >
            I already have an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
