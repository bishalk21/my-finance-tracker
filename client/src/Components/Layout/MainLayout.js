import React from "react";
import { Header } from "./header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}{" "}
    </div>
  );
};
