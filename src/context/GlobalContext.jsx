import React, { createContext, useReducer, useState } from "react";

const initialState = {
  // Define your initial state here
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [pointer, setPointer] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        pointer,
        setPointer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
