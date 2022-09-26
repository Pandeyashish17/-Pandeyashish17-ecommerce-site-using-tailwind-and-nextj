import React from "react";
import Card from "./Card";
import { useStateContext } from "../context/StateContext";
const SearchPart = () => {
  const { search } = useStateContext();
  return <>{search === "" ? null : <Card />}</>;
};

export default SearchPart;
