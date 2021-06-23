import React, { Component } from "react";
import "./style.css"
class RecentWork extends Component {
 

  render() {
  return (
    <section className="works scroll">
      <article className="p-2">
        <h2 className="text-center p-2">Most Recent Work</h2>
        {/*row 1*/}
                <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12" id="live">
                        <a href="https://rate--a--date.herokuapp.com/" target="_blank">
                            <div className="block hover">
                                <div className="works-thumb" id="work-1"></div>
                            </div>
                            <h5 className="text-center">
                                <a href="https://rate--a--date.herokuapp.com/" target="_blank">Spark</a>
                            </h5>
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
                            <h5 className="text-center">
                                <a href="https://morning-savannah-50964.herokuapp.com/signin/" target="_blank">Whatsinmybel.ly</a>
                            </h5>
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
                            <h5 className="text-center">
                                <a href="https://fierce-dawn-00831.herokuapp.com/dashboard" target="_blank">Tech Babble</a>
                            </h5>
                            <div className="text-center">
                                <a href="https://github.com/dorley1993/tech_blog" target="_blank" className="works-caption2 live"><i className="fab fa-github fa-2x"></i></a>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="justify-content-center d-flex col-12 mt-3">
                  <a href="/Portfolio" className="viewMore p-2" id="morePs">more</a>
                </div>
      </article>
    </section>
    );
  }
};

export default RecentWork;