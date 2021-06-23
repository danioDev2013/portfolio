import React from "react";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Work from "../components/Work";


function Portfolio() {

  return (
      <div>
          <div style={{ "paddingBottom" : "10%"}}>
              <NavBar />
              <Work />
          </div>
          <Footer />
      </div>
      
  );
}


export default Portfolio;