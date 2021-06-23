import React from "react";
import NavBar from "../components/Nav";
import About from "../components/About"
import Typewriter from "typewriter-effect";
import RecentWork from "../components/RecentWork/index";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


function ContactPage() {

  return (
      <div id="b2">
          <div style={{ "paddingBottom": "10%" }}>
              <NavBar />
              <section className="container">
                <Contact />
              </section>
          </div>
      </div>
      
  );
}


export default ContactPage;