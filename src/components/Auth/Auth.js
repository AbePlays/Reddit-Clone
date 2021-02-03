import { useAuth0 } from "@auth0/auth0-react";

import background from "../../assets/login-background.svg";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-gray-100 px-2 py-4 min-h-screen">
      <div className="mx-auto my-4 p-4 max-w-xl shadow bg-white rounded font-semibold text-gray-500 text-center">
        <img src={background} alt="security" />
        <div className="mt-8">
          <h1>To use the application, please login or create an account</h1>
          <div
            className="mt-4 flex justify-center items-center border border-gray-300 w-max mx-auto py-2 px-4 rounded-md tracking-widest uppercase text-xs cursor-pointer hover:bg-primary hover:text-white transition duration-300"
            onClick={() => loginWithRedirect()}
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="ml-2">Authenticate yourself</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
