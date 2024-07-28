"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type GlobalContextType = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthAndRedirect: () => void;
};

const defaultContextValue: GlobalContextType = {
  userAuth: false,
  setUserAuth: () => {},
  checkAuthAndRedirect: () => {},
};

export const GlobalContext =
  createContext<GlobalContextType>(defaultContextValue);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [userAuth, setUserAuth] = useState(false);

  const checkAuthAndRedirect = () => {
    if (!userAuth) {
      // Add your redirect logic here
    }
  };

  return (
    <GlobalContext.Provider
      value={{ userAuth, setUserAuth, checkAuthAndRedirect }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
