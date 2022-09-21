import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const HomeContext = createContext({ name: "sexo" });

export const HomeProvider = ({ children }: Props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Fodasi");
  }, [name]);

  return (
    <HomeContext.Provider value={{ name }}>{children}</HomeContext.Provider>
  );
};
