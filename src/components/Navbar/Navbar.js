import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Logout } from "../Auth";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const { user } = useAuth0();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const className = document.querySelector("html").className;
    document.querySelector("html").className =
      className === "dark" ? "" : "dark";

    setDarkMode((prev) => !prev);
  };

  return (
    <div className="shadow bg-white dark:bg-background-secondary text-text-primary dark:text-white-dark transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto py-2 px-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="uppercase tracking-widest font-thin text-lg text-black dark:text-white-dark"
        >
          <h1>Reddit</h1>
        </NavLink>
        <div className="flex">
          {user && (
            <div className="bg-red-100 w-8 h-8 rounded-md overflow-hidden">
              <img
                src={user.picture}
                className="w-full h-full object-cover"
                alt="username"
              />
            </div>
          )}
          <div onClick={toggleDarkMode}>
            <DarkMode isDark={darkMode} />
          </div>
          {user && <Logout className="ml-2" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
