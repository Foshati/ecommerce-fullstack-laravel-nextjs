"use client";

import React from "react";
import { Menu, Utensils } from "lucide-react";
import NavbarList from "./NavbarList"; // Import the NavbarList component

function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full mx-auto transition-all bg-black bg-opacity-50 isSticky">
      {/* navbar */}
      <div className="bg-black bg-opacity-50 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden btn-circle"
            >
              <Menu />
            </div>
            <div className="ml-4">
              <NavbarList />
            </div>
          </div>
          <Utensils />
        </div>
        <div className="hidden navbar-center lg:flex">
          <NavbarList />
        </div>
        {/* navbar-end */}
        <div className="flex gap-4 navbar-end">
          {/* Search */}
          <div className="hidden form-control lg:block">
            <input
              type="text"
              placeholder="Search"
              className="w-24 input input-bordered md:w-auto"
            />
          </div>
          {/* Sign in */}
          <a className="btn">Sign in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
