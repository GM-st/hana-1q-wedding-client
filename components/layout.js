import React from "react";
import Header from "./header";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
