import React from "react";
import "./style.css"

function About(props) {
    return (
        <div className="container text-center" id="aboutMe">
            <h2 className="text-center" id="title1">About</h2>
            <h2 className="abtMe text-center" id="aboutTitle2">let me introduce myself...</h2>
            <img src="https://avatars.githubusercontent.com/u/73144003?v=4" className="img-fluid" alt="Danielle Orley" id="me" 
            style={{"borderRadius": "50%", "maxWidth": 200}} /><br />
            <div
            style={{"maxWidth": "60%", "marginLeft": "auto", "margin-right": "auto"}}>
                <p className="my-5"> Hello! My name is Danielle Orley, and I’m a detail oriented Full-Stack Web Developer. I
                recently earned a certificate in web development, from the University of Washington. Currently I'm a freelancer 
                based in Washington, US. I want to keep learning and push myself to be a better Web Developer. I take pride in my 
                work and the websites I’ve worked on. Working in the military, retail, and quality control has taught me to stay calm, 
                react quickly, and take initiative. I’m a hard worker and strive for excellence.
                                    <br /><br />
                I have a diverse set of skills, from designing the front-end of the website (HTML, CSS, JavaScript) to the functionality of the website using back-end
                technologies (Express, Node.js, MongoDB, MySql, PHP, React.js ). I’m always learning and experimenting with different languages and tools, and I never get bored. 
                Below you can view some of my completed projects. If you want to get ahold of me fill out the form on my contact page or email me.
                                </p>

            </div>
            </div>
    );
}


export default About;