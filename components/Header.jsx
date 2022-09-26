import React from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useStateContext } from "../context/StateContext";
import { useUser, UseUser } from "@auth0/nextjs-auth0";
import Loader from "./Loader";
const Navbar = () => {
  const { setSearch } = useStateContext();
  const { user, error, loading } = useUser();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header className="bg-white  py-3 border-b">
        <div className="container max-w-screen-xl mx-auto px-4 ">
          <div className="flex flex-wrap items-center ">
            <div className="flex-shrink-0 mr-5 ">
              {" "}
              <Link href="/">
                <a className=" flex items-center justify-center ">
                  FindYourThings
                </a>
              </Link>{" "}
              {user && <h2 className="capitalize">{user.given_name}</h2>}
            </div>

            <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <input
                className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                type="text"
                placeholder="Search..
                "
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center space-x-2 ml-auto">
              {user ? (
                <Link href="/api/auth/logout">
                  <a className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
                    <AiOutlineUser className="lg:inline ml-1" />{" "}
                    <span className="hidden lg:inline ml-1">Sign out</span>
                  </a>
                </Link>
              ) : (
                <Link href="/api/auth/login">
                  <a className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
                    <AiOutlineUser className="lg:inline ml-1" />{" "}
                    <span className="hidden lg:inline ml-1">Sign in</span>
                  </a>
                </Link>
              )}
              <Link href="/wishlist">
                <a className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
                  <GiSelfLove className="lg:inline ml-1" />{" "}
                  <span className="hidden lg:inline ml-1">Wishlist</span>
                </a>
              </Link>
              <Link href="/my-cart">
                <a className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
                  <AiOutlineShoppingCart className="lg:inline ml-1" />{" "}
                  <span className="hidden lg:inline ml-1">My cart</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
