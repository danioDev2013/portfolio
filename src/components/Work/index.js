import React, { Component } from "react";
import "./style.css"
class Work extends Component {
 

  render() {
  return (
    <section className="works scroll">
      <article className="p-2">
        <h1 className="text-center p-5" id="titleWork">Some of my Master Pieces</h1>
        {/*row 1*/}
                <div className="row" style={{ "paddingBottom" : 6 }}>
                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://rate--a--date.herokuapp.com/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-1"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://rate--a--date.herokuapp.com/" target="_blank">Spark</a>
                            </h4>
                            <div className="text-center">
                                <p>A full-stack react application that allows users to post date ideas and locations, as well as rating and commenting. <br></br>Tech used: Axios, MERN Stack, Bcrypt, Morgan, Mongoose, and Passport</p>
                            </div>
                            <div className="text-center"> 
                                <a href="https://github.com/Connerjm/Rate-a-Date" target="_blank" className="works-caption"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://morning-savannah-50964.herokuapp.com/signin/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-2"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://morning-savannah-50964.herokuapp.com/signin/" target="_blank">Whatsinmybel.ly</a>
                            </h4>
                            <div className="text-center">
                                <p>A full-stack food tracker. The technologies used on this group project are: MySQL, Express, Handlebars and Node. </p>
                            </div>
                            <div className="text-center">
                                <a href="https://github.com/dorley1993/whatsinmybel.ly" target="_blank" className="works-caption2 live"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://fierce-dawn-00831.herokuapp.com/dashboard" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-3"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://fierce-dawn-00831.herokuapp.com/dashboard" target="_blank">Tech Babble</a>
                            </h4>
                            <div className="text-center">
                                <p>A CMS-style blog site.<br></br> Tech used: MySQL, Sequelize, and Handlebars.</p>
                            </div>
                            <div className="text-center">
                                <a href="https://github.com/dorley1993/tech_blog" target="_blank" className="works-caption2 live"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>
                </div>

                {/*row 2*/}
                <div className="row" style={{ "paddingTop" : 6, "paddingBottom" : 6 }}>
                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://obrienceob.github.io/LostNoMore/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-4"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://obrienceob.github.io/LostNoMore/" target="_blank">Lost No More</a>
                            </h4>
                            <div className="text-center">
                                <p>A travel app that uses openweather and google api's. <br></br>Tech used: Api's, HTML, CSS, JavaScript, and Bulma</p>
                            </div>
                            <div className="text-center"> 
                                <a href="https://github.com/dorley1993/LostNoMore" target="_blank" className="works-caption"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://tracktheburn.herokuapp.com/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-5"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://tracktheburn.herokuapp.com/" target="_blank">Track the Burn</a>
                            </h4>
                            <div className="text-center">
                                <p>A full-stack fitness tracker.<br></br> Tech Used: Express.js, MongoDB, Mongoose, Node.js, and deployed on Heroku.</p>
                            </div>
                            <div className="text-center"> 
                                <a href="https://github.com/dorley1993/Track_the_Burn" target="_blank" className="works-caption"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://dorley1993.github.io/Weather_Dashboard/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-6"></div>
                            </div>
                            <h4 className="text-center">
                                <a href="https://dorley1993.github.io/Weather_Dashboard/ " target="_blank">Weather App</a>
                            </h4>
                            <div className="text-center">
                                <p>Weather application using API calls to grab current weather conditions and a 5 day forecast.<br></br> Tech used: API's, Javascript, HTML, and CSS</p>
                            </div>
                            <div className="text-center">
                                <a href="https://github.com/dorley1993/Weather_Dashboard"  target="_blank" className="works-caption2 live"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row" id="border" style={{ "background" : "rgb(190, 152, 221" }}>
                    <div id="text" className="text-center">
                        <p id="textB">
                            <h3 style={{ "fontFamily": "'Shadows Into Light Two', cursive"}}>view more of my projects on my github page
                            </h3>
                            <br></br>
                            <a href="https://github.com/dorley1993" target="_blank" className="works-caption"><i className="fab fa-github fa-2x" style={{ "color" : "white"}}></i></a>
                        </p>
                    </div>
                </div>
      </article>
    </section>
    );
  }
};

export default Work;