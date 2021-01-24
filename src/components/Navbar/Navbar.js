import { NavLink } from "react-router-dom";

import RedditLogo from "../../assets/reddit-logo.png";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="max-w-screen-xl mx-auto py-2 px-4">
        <NavLink to="/">
          <div className="w-24">
            <img src={RedditLogo} alt="logo" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
