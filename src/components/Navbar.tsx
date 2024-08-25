import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {

  const user = false;
  return (
    <nav className="h-16 w-full flex justify-center text-center items-center pr-8 pl-8">
      <Button variant="secondary">
        <Link href="/create-help">Ask Help</Link>
      </Button>
      <Button variant="secondary" className="mr-4 ml-4">
        <Link href="/">About</Link>
      </Button>
      {!user ? (
        <div>
          <Button className="mr-4">
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      ) : (
        <div className="flex">
          <Button>
            <Link href="/help-others">Help Others</Link>
          </Button>
          <Button className="ml-4">
            <Link href="/">Active Account</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
