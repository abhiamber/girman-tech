// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./atoms/button";
import { Input } from "./atoms/input";

const SearchBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-white">
      <nav className="flex-1 mx-6">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2"
        />
      </nav>
    </header>
  );
};

export default SearchBar;
