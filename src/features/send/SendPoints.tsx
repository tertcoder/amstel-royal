import Heading from "../../ui/Heading";

function SendPoints() {
  return (
    <div className="h-screen px-4 pb-[70px]">
      <Heading heading="Send Points" />
      <div className="mt-16">
        <form>
          <div>
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#EBE4D6" />
                <path
                  d="M24.25 22.25C26.4591 22.25 28.25 20.4591 28.25 18.25C28.25 16.0409 26.4591 14.25 24.25 14.25C22.0409 14.25 20.25 16.0409 20.25 18.25C20.25 20.4591 22.0409 22.25 24.25 22.25Z"
                  fill="#2C1E0E"
                />
                <path
                  d="M24.25 33.25C28.116 33.25 31.25 31.4591 31.25 29.25C31.25 27.0409 28.116 25.25 24.25 25.25C20.384 25.25 17.25 27.0409 17.25 29.25C17.25 31.4591 20.384 33.25 24.25 33.25Z"
                  fill="#2C1E0E"
                />
              </svg>

              <div>
                <span>From</span>
                <h2>Arnaud Mugisha</h2>
              </div>
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendPoints;
