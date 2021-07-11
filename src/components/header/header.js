import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <nav className="header">
            <form className="form">
                <Link to="/" className={window.location.pathname === "/"}>
                    <button className="button" type="button">Home</button></Link>
                <Link to="/projects" className={window.location.pathname === "/projects"}>
                    <button className="button" type="button">Projects</button></Link>
                <Link to="/aboutme" className={window.location.pathname === "/aboutme"}>
                    <button className="button" type="button">About Me</button></Link>
            </form>
        </nav>
    )
}

export default Header;