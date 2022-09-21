import React from "react";
import { HomeProvider } from "./context";
import { HomePage } from "./pages/home/home";

export const App: React.FC = () => {
  return (
    <HomeProvider>
      <HomePage />
    </HomeProvider>
  );
};
