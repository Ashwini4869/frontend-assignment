import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#21222a] items-center w-full mb-10 font-bold font-serif h-16 flex justify-between text-slate-200">
      <Link className="ml-6 hover:text-[#80ceff] text-2xl" to="/">
        OnlineStore
      </Link>
      <p className="font-mono text-lg">Happy Shopping!</p>
      <Link className="mr-6 text-xl hover:text-[#80ceff]" to="/search">
        Search
      </Link>
    </nav>
  );
};

export default Navbar;
