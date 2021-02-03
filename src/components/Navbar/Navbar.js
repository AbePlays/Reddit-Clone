import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import RedditLogo from "../../assets/reddit-logo.png";
import LogoutButton from "../Auth/Logout";

const Navbar = () => {
  const { user } = useAuth0();

  return (
    <div className="shadow">
      <div className="max-w-screen-xl mx-auto py-2 px-4 flex justify-between items-center">
        <NavLink to="/">
          <div className="w-24">
            <img src={RedditLogo} alt="logo" />
          </div>
        </NavLink>
        <div className="flex">
          {user && (
            <>
              <div className="bg-red-100 w-8 h-8 mr-2 rounded-md overflow-hidden">
                <img
                  src={user.picture}
                  className="w-full h-full object-cover"
                  alt="username"
                />
              </div>
              <LogoutButton className="ml-2" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
