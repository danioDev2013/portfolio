import React from "react";
import NavBar2 from "../components/Nav/index2";
import About from "../components/About"
import Typewriter from "typewriter-effect";
import RecentWork from "../components/RecentWork/index";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


function ContactPage() {

  return (
      <div id="b2">
          <div style={{ "paddingBottom": "10%" }}>
              <NavBar2 />
              <section className="container">
                <Contact />
              </section>
          </div>
      </div>
      
  );
}


export default ContactPage;