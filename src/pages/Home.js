import React from "react";
import NavBar from "../components/Nav";
import About from "../components/About"
import Typewriter from "typewriter-effect";
import RecentWork from "../components/RecentWork/index";
import Footer from "../components/Footer";


function Home() {

  return (
      <div>
          <div id="background">
              <NavBar />
              <section className="text-center" id="intro-pad">
                  <h1 className="intro-pad">
                      <div id="title">
                          <Typewriter
                              onInit={(Typewriter) => {
                                  Typewriter
                                      .typeString("Hi, I'm Danielle!")

                                      .pauseFor(1000)
                                      .typeString('<br>')
                                      .typeString(" A Full-Stack Web Developer.")
                                      .start();
                              }}
                          />
                      </div>
                  </h1>
              </section>
          </div>
          <About />
          <RecentWork />
          <Footer />
          
      </div>
      
  );
}


export default Home;