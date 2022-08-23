import axios from "axios";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Recommendation from "../../components/Recommendation"
const Id = ({ data ,recommendationData}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className="bg-gray-50 py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="bg-white border border-gray-200 shadow-sm rounded mb-5 p-4 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <aside>
                <div className="border flex justify-center items-center border-gray-200 p-7 text-center  mb-5 rounded-lg">
                  <Image
                    className="object-cover inline-block rounded-lg transition-all duration-300 hover:scale-105"
                    src={data.image}
                    alt={data.title}
                    height={400}
                    width={400}
                  />
                </div>
              </aside>
              <main>
                <h2 className="font-semibold text-2xl mb-4">{data.title} </h2>

                <p className="mb-4 font-semibold text-xl">
                  {data.price}{" "}
                  <span className="text-base font-normal">/1 box</span>
                </p>

                <p className="mb-4 text-gray-500">{data.description}</p>

                <ul className="mb-5">
                  <li className="mb-1">
                    {" "}
                    <b className="font-medium w-36 inline-block">Model#:</b>
                    <span className="text-gray-500">Lorem, ipsum.</span>
                  </li>

                  <li className="mb-1">
                    {" "}
                    <b className="font-medium w-36 inline-block">Delivery:</b>
                    <span className="text-gray-500">
                      Butwal, Kathmandu & Dang
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col lg:flex-row mb-4"></div>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600"
                    href="#"
                  >
                    Buy now
                  </a>

                  <a
                    className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                    href="#"
                  >
                    Add to cart
                  </a>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
      <Recommendation data={recommendationData} />
    </>
  );
};

export default Id;

export const getStaticPaths = async () => {
  const res = await axios("https://fakestoreapi.com/products");
  const data = res.data;

  const paths = data.map((curElem) => {
    return {
      params: {
        id: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios(`https://fakestoreapi.com/products/${id}`);
  const data = res.data;
  const recommendation = await axios(`https://fakestoreapi.com/products`);
  const recommendationData = recommendation.data;


  return {
    props: {
      data,
      recommendationData,
    },
    revalidate: 60,
  };
};
