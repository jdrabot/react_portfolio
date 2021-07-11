import React from "react";
import "./footer.css";
import resume from "../../images/jonathandrabotresume.pdf";


function Footer() {
    return (
        <nav className="footer">
            <form className="form">
                <a href={resume}><button className="button" type="button">Resume</button></a>
                <a href="mailto:jdrabot@hotmail.com"><button className="button" type="button">E-mail</button></a>
                <a href="https://github.com/jdrabot"><button className="button" type="button">Github Profile</button></a>
                <a href="https://www.linkedin.com/in/jonathan-drabot-873466170/"><button className="button" type="button">LinkedIn</button></a>
            </form>
        </nav>
    )
}

export default Footer;