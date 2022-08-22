import React from "react";
import axios from "axios";
import Image from "next/image";
const index = ({ data }) => {
  return (
    <>
      <main className="md:w-3/4 py-2 m-auto">
        {data.map((item) => {
          return (
            <article
              className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5"
              key={item.id}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex justify-center items-center md:w-1/4 border-r border-gray-200">
                  <Image
                    className="mx-auto"
                    src={item.image}
                    alt={item.title}
                    height={200}
                    width={200}
                  />
                </div>
                <div className="md:w-3/4">
                  <div className="p-4">
                    <a href="#" className="hover:text-blue-600">
                      {item.title}{" "}
                    </a>
                    <p className="mb-1">
                      <span className="text-lg font-semibold text-black">
                        {item.price}{" "}
                      </span>
                    </p>

                    <p className="text-gray-500 mb-2 line-clamp-3">
                      {item.description}
                    </p>
                    <a className="text-blue-600 hover:text-blue-700" href="#">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const data = await axios("https://fakestoreapi.com/products");
  return {
    props: {
      data: data.data,
    },
  };
}
