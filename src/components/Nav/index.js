import React, { Component } from "react";
import "./style.css"

class NavBar extends Component {
    
    render() {
        let currentPage = window.location.pathname;
        if(currentPage === "/") {
            let currentPage = "home"
            console.log(currentPage)
        } 
        if(currentPage === "/Contact") {
            let currentPage = "Contact"
            console.log(currentPage);
        }
    return (
        <header className="navbar navbar-expand-md navbar-light nav-cust">
            <div className="container-fluid d-flex px-5 py-2 bd-highlight">
                <a style={{"color": "rgb(190, 152, 221"}} href="/" className="navbar-brand" id="logo">&lt;DO&gt;</a>
                <div className="collapse navbar-collapse nav-right" id="navbarNav">
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/Portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                        <a className="nav-link" href='/resume.pdf' download>Resume</a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </header>
    );
    }
}


export default NavBar;