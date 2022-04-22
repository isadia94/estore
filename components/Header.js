import React from "react";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between ">
        <div className="logo">
          <h1 className="text-2xl">Online Duka</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar
            src="./images/profile.jpg"
            sx={{
              width: 35,
              height: 35,
            }}
          />
          <img className="pr-6" src="./images/cart.svg" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
