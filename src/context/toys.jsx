import { createContext, useContext } from "react";

// 🎯 CREATE CONTEXT - This eliminates prop drilling!
export const ToyContext = createContext();

export const useToyContext = () => {
  const context = useContext(ToyContext);
  if (!context) {
    throw new Error("useToyContext must be used within a ToyContext.Provider");
  }
  return context;
};
