import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";
const Signup = () => {
  const { aFunctionHandler } = useStateContext();
  return (
    <>
      <section className="bg-gray-100 py-10" style={{ minHeight: "86vh" }}>
        <div className="container max-w-screen-xl mx-auto px-4">
          <div
            style={{ maxWidth: "480px" }}
            className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
          >
            <form action="">
              <h2 className="mb-5 text-2xl font-semibold">Sign up</h2>

              <div className="grid md:grid-cols-2 gap-x-2">
                <div className="mb-4">
                  <label className="block mb-1"> First name </label>
                  <input
                    onChange={aFunctionHandler}
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    type="text"
                    placeholder="Type here"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1"> Last name </label>
                  <input
                    onChange={aFunctionHandler}
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1"> Phone </label>

                <div className="flex  w-full">
                  <input
                    onChange={aFunctionHandler}
                    className="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                    type="text"
                    placeholder="Code"
                    value="+971"
                  />
                  <input
                    onChange={aFunctionHandler}
                    className="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                    type="text"
                    placeholder="Type phone"
                  />
                </div>
              </div>

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
                <label className="block mb-1"> Create password </label>
                <input
                  onChange={aFunctionHandler}
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="password"
                  placeholder="Type here"
                />
              </div>

              <button
                type="submit"
                className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                {" "}
                Register{" "}
              </button>

              <label className="flex items-center w-max my-4">
                <input
                  checked
                  name=""
                  type="checkbox"
                  onChange={aFunctionHandler}
                  className="h-4 w-4"
                />
                <span className="ml-2 inline-block">
                  {" "}
                  I agree with Terms and Conditions{" "}
                </span>
              </label>

              <hr />

              <p className="text-center mt-5">
                Already have an account?{" "}
                <Link href="/sign-in">
                  <a className="text-blue-500">Sign in</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
