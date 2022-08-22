import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
const category = ({ data }) => {
  return (
    <>
    
      <main className="md:w-3/4 py-2 m-auto">
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/product/${item.id}`}>
              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 cursor-pointer">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 border-r border-gray-200 flex items-center justify-center">
                    <Image
                      className="mx-auto"
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
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
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default category;

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products/categories");
  const data = res.data;

  const paths = data.map((curElem) => {
    return {
      params: {
        category: curElem,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const res = await axios(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = res.data;

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
