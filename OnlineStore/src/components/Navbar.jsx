import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 w-full h-7 flex justify-between text-white">
      <Link to="/">Online Store</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Navbar;
