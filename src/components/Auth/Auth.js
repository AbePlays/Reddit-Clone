import { useAuth0 } from "@auth0/auth0-react";

import background from "../../assets/login-background.svg";
import { Wrapper } from "../Utility";
import { LockSvg } from "./index";

const AuthButton = ({ loginWithRedirect }) => (
  <div
    className="flex justify-center items-center border w-max mx-auto py-2 px-4 mt-4 rounded-md tracking-widest uppercase text-xs cursor-pointer hover:bg-primary hover:text-white hover:border-primary text-color-secondary"
    onClick={loginWithRedirect}
  >
    <LockSvg />
    <p className="ml-2">Authenticate yourself</p>
  </div>
);

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="background-secondary shadow p-4 rounded font-semibold text-center">
        <img src={background} alt="security" />
        <div className="mt-8 font-medium">
          <h1 className="text-color-secondary">
            To use the application, please login or create an account
          </h1>
          <AuthButton loginWithRedirect={loginWithRedirect} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Auth;
