import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const user = true;
  return (
    <nav className="dark bg-[#333333] h-16 w-full flex justify-between text-center items-center pr-8 pl-8 border border-t-0 border-r-0 border-l-0 border-b-2 border-white">
      <div>
        <Button variant="ghost" className="text-white">
          <Link href="/">Gian Ho App</Link>
        </Button>
      </div>
      <div className="flex">
        <Button variant="secondary">
          <Link href="/">Dashboard</Link>
        </Button>
        <Button variant="secondary" className="mr-4 ml-4">
          <Link href="/">About</Link>
        </Button>
        {user ? (
          <div>
            <Button className="mr-4">
              <Link href="/">Login</Link>
            </Button>
            <Button>
              <Link href="/">Sign-up</Link>
            </Button>
          </div>
        ) : (
          <Button>
            <Link href="/">Profile</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
