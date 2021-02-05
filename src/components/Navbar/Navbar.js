import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Logout } from "../Auth";
import DarkMode from "./DarkMode";

const UserAvatar = (user) => (
  <div className="w-8 h-8 rounded-md overflow-hidden">
    <img
      src={user.picture}
      className="w-full h-full object-cover"
      alt="username"
    />
  </div>
);

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
    <div className="background-secondary text-color-secondary shadow">
      <div className="max-w-screen-xl mx-auto py-2 px-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="font-thin text-lg uppercase tracking-widest "
        >
          <h1 className="text-black dark:text-white transition-colors duration-500">
            Reddit
          </h1>
        </NavLink>
        <div className="flex">
          {user && UserAvatar(user)}
          <DarkMode isDark={darkMode} onClickHandler={toggleDarkMode} />
          {user && <Logout className="ml-2" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
