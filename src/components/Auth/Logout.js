import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div
      className="h-8 w-8 flex justify-center items-center ml-2 border border-border rounded-md tracking-widest uppercase text-xs cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition duration-300"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <svg
        className="w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  );
};

export default Logout;
