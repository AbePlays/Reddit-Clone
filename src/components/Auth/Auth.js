import { useAuth0 } from "@auth0/auth0-react";

import background from "../../assets/login-background.svg";
import { Wrapper } from "../Utility";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="shadow bg-white dark:bg-background-secondary transition-colors duration-500 p-4 rounded font-semibold text-center">
        <img src={background} alt="security" />
        <div className="mt-8 font-medium">
          <h1>To use the application, please login or create an account</h1>
          <div
            className="flex justify-center items-center border w-max mx-auto py-2 px-4 mt-4 rounded-md tracking-widest uppercase text-xs cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition duration-300"
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
    </Wrapper>
  );
};

export default Auth;
