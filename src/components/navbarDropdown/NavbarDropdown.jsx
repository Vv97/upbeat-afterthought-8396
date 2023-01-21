import "./NavDropdown.css";

import React from "react";
import { Link } from "react-router-dom";

export const NavbarDropdown = () => {
  return (
    <div className="nDropdown">
      <div className="DropdownWrapper">
        <div className="navLogoTextcon">
          <div>
            <img
              src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg"
              alt=""
            />
          </div>
          <div className="navstrix">
            <p>
              Save an average of 15% on thousands of hotels when you're signed
              in
            </p>
          </div>
        </div>
        <div className="paddingNavDrop">
          <Link to="login">
            <button className="navDropdownSignBtn">Sign in</button>
          </Link>
          <div className="navDLogIn">
          <Link to="signup">
            <button className="navDropdownCreateAccBtn">Create a Free account</button>
          </Link>
            {/* <span>Create a Free account</span> */}
          </div>
        </div>

        <div className="navdropRewards">
          <p>List of favourites</p>
          <p>Expedia Rewards</p>
        </div>

        <hr />

        <div className="navDropDownFeedback">
          <p>Feedback</p>
        </div>
      </div>
    </div>
  );
};
