import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([])
  const aFunctionHandler = (e) => {
    console.log(e.target.value);
  };

  
  return (
    <Context.Provider
      value={{ aFunctionHandler, setSearch, search }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
