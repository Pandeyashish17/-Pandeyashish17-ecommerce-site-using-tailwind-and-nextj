import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/BannerPart/Banner";
import Card from "../components/Card";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
export default function Home({ data, category }) {
  const { search } = useStateContext();
  return (
    <>
      {search === "" ? (
        <>
          <Banner data={category} />
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </>
      ) : (
        <Card />
      )}
    </>
  );
}

export async function getStaticProps() {
  const data = await axios("https://fakestoreapi.com/products");
  const categories = await axios(
    "https://fakestoreapi.com/products/categories"
  );
  return {
    props: {
      data: data.data,
      category: categories.data,
    },
    revalidate: 60,
  };
}
