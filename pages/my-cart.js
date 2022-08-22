import React from "react";
import Link from "next/link";
const mycart = () => {
  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                  <div className="w-full lg:w-2/5 xl:w-2/4">
                    <figure className="flex leading-5">
                      <div>
                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <img src="https://source.unsplash.com/random/?fruit" alt="Title" />
                        </div>
                      </div>
                      <figcaption className="ml-3">
                        <p>
                          <a href="#" className="hover:text-blue-600">
                            Guava{" "}
                          </a>
                        </p>
                        <p className="mt-1 text-gray-400"> Description </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="">
                    <div className="w-24 relative">
                      <select className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="leading-5">
                      <p className="font-semibold not-italic">$1156.00</p>
                      <small className="text-gray-400">
                        {" "}
                        $460.00 / per item{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                    
                      <a
                        className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                        href="#"
                      >
                        {" "}
                        Remove{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
              </article>
            </main>
            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>$245.97</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Discount:</span>
                    <span className="text-green-500">- $60.00</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$420.00</span>
                  </li>
                </ul>

                <Link href="/checkout">
                  <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700">
                    {" "}
                    Checkout{" "}
                  </a>
                </Link>
                <Link href="/">
                  <a className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100">
                    {" "}
                    Back to shop{" "}
                  </a>
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default mycart;
