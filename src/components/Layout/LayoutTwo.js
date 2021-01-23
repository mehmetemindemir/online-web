import Header from "../Header/Header";
import React from "react";
import Footer from "../Footer/Footer";

const LayoutTwo = ({ children, aboutOverlay,menu }) => {
  return (
    <div>
        <Header  aboutOverlay={aboutOverlay} menu={menu}/>
        {children}
        <Footer />
    </div>
  );
};

export default LayoutTwo;
