import React from "react";

const SearchItem = () => {
  return (
    <>
      <main className="md:w-3/4 py-2 m-auto">
        <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 border-r border-gray-200">
              <img
                className="mx-auto"
                src="https://source.unsplash.com/random/600x600?fruit"
                alt="Product name text"
              />
            </div>
            <div className="md:w-3/4">
              <div className="p-4">
                <a href="#" className="hover:text-blue-600">
                  Lorem ipsum dolor sit, amet consectetur a{" "}
                </a>
                <p className="mb-1">
                  <span className="text-lg font-semibold text-black">
                    $590.50
                  </span>
                </p>

               

                <p className="text-gray-500 mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos, eaque!Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dignissimos, eaque!Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Dignissimos, eaque!Lorem
                </p>
                <a className="text-blue-600 hover:text-blue-700" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default SearchItem;
