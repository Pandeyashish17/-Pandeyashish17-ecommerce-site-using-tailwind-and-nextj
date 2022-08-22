import React from "react";
import Link from "next/link";
const Banner = ({ data }) => {
  return (
    <>
      <section className="pt-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <article className="p-4 bg-white border border-gray-200 shadow-sm rounded-md">
            <div className="flex flex-col md:flex-row">
              <aside className="md:w-1/4 flex-auto mb-4 pr-4 md:mb-0">
                <ul>
                  {data.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={`/category/${item}`}>
                          <a className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600">
                            {item}{" "}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
              <main className="md:w-3/4 flex-auto">
                <article
                  className=" p-6 lg:p-16 rounded w-full h-full  "
                  style={{
                    backgroundImage: `url(https://sakah.co.ke/wp-content/uploads/2022/05/online-shopping-concept-3d-illustration-choosing-goods-web-page-store-online-ordering-payment-purchase-best-prices-internet-marketing-vector-illustration-modern-web-banner-design_198565-1719-1-900x500.webp)`,
                  }}
                >
                  <h1 className="text-3xl md:text-4xl text-blue-600 font-semibold">
                    Lorem, ipsum. <br />
                    Lorem ipsum dolor sit amet.{" "}
                  </h1>
                  <p className="text-lg text-blue-300 font-normal mt-4 mb-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.{" "}
                  </p>
                  <div>
                    <a
                      className="px-4 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                      href="#"
                    >
                      Discover
                    </a>
                    <a
                      className="px-4 py-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white"
                      href="#"
                    >
                      Learn more
                    </a>
                  </div>
                </article>
              </main>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Banner;
