import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="border-b bg-blue-600 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="hidden lg:flex flex-1 items-center py-1">
            <Link href="/">
              <a className="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
                Category
              </a>
            </Link>
            <Link href="/products">
              <a className="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
                Products
              </a>
            </Link>

            <Link href="/offers">
              <a className="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
                Offers
              </a>
            </Link>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
