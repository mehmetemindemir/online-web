import Header from "../Header/Header";
import React from "react";
import Footer from "../Footer/Footer";

const LayoutHome = ({ children, aboutOverlay ,menu}) => {
    return (
        <div>
            <Header  aboutOverlay={aboutOverlay} menu={menu}/>
            {children}
            <Footer />
        </div>
    );
};

export default LayoutHome;