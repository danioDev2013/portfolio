import React, { Component } from "react";
import "./style.css"

class NavBar3 extends Component {
    
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
        <nav className="navbar navbar-expand-md navbar-light nav-cust">
            <div className="container-fluid d-flex px-5 py-2 bd-highlight">
                <a className="navbar-brand" href="/" id="logo">&lt;DO&gt;</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse nav-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    }
}


export default NavBar3;
