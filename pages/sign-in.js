import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useStateContext } from "../context/StateContext";
const Signin = () => {
  const { aFunctionHandler } = useStateContext();
  return (
    <>
      <section className="bg-gray-100 py-10" style={{ minHeight: "86vh" }}>
        <div className="container max-w-screen-xl mx-auto px-4">
          <div
            style={{ maxWidth: "360px" }}
            className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
          >
            <form action="">
              <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>

              <div className="mb-4">
                <label className="block mb-1"> Email </label>
                <input
                  onChange={aFunctionHandler}
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="text"
                  placeholder="Type here"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1"> Password </label>
                <input
                  onChange={aFunctionHandler}
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="password"
                  placeholder="Type here"
                />
              </div>

              <label className="flex items-center w-max mb-5">
                <input
                  onChange={aFunctionHandler}
                  checked
                  name=""
                  type="checkbox"
                  className="h-4 w-4"
                />
                <span className="ml-2 inline-block text-gray-500">
                  {" "}
                  Remember me{" "}
                </span>
              </label>

              <button
                type="submit"
                className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                href="#"
              >
                {" "}
                Sign in{" "}
              </button>

              <div
                className="text-center border-b my-5"
                style={{ lineHeight: " 0.1rem" }}
              >
                <span className="px-3 bg-white text-gray-400">or</span>
              </div>

              <a
                href="#"
                className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
              >
                <FcGoogle className="mr-3" />
                Continue with Google
              </a>

              <a
                href="#"
                className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
              >
                <BsFacebook className="mr-3 text-blue-500" />
                Continue with Facebook
              </a>

              <p className="text-center mt-5">
                Don’t have an account?{" "}
                <Link href="/sign-up">
                  <a className="text-blue-500">Sign up</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
