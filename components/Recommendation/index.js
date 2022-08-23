import { Swiper, SwiperSlide } from "swiper/react";
import { GiSelfLove } from "react-icons/gi";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Link from "next/link";
import "swiper/css";
import Image from "next/image";

import React from "react";

const Index = ({ data }) => {
  return (
    <>
      <div className="h-5 mb-12">
        {" "}
        <h1 className="text-4xl font-bold ml-6">Recommendation</h1>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className=" group">
                <Link href={`/product/${item.id}`}>
                  <article className="  p-3  shadow-sm rounded-lg bg-white border border-gray-200">
                    <div className="relative  p-1 flex justify-center items-center">
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        className="flex justify-center items-center transition-all duration-500 rounded-lg mx-auto w-auto group-hover:scale-105 "
                        alt={item.title}
                      />
                      <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full absolute left-3 top-3">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-4 border-t border-t-gray-200">
                      <a
                        className="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                        href="#"
                      >
                        <GiSelfLove />{" "}
                      </a>
                      <h6>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-500 capitalize line-clamp-2"
                        >
                          {item.title}
                        </a>
                      </h6>
                      <p className="text-sm text-gray-400 line-clamp-3 hover:text-blue-300 cursor-pointer">
                        {item.description}
                      </p>

                      <span className="font-semibold">${item.price}</span>
                    </div>
                  </article>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Index;
