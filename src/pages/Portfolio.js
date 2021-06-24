import React from "react";
import NavBar3 from "../components/Nav/index3";
import Footer from "../components/Footer";
import Work from "../components/Work";


function Portfolio() {

  return (
      <div>
          <div style={{ "paddingBottom" : "10%"}}>
              <NavBar3 />
              <Work />
          </div>
          <Footer />
      </div>
      
  );
}


export default Portfolio;