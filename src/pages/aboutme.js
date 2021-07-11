import React from "react";
import myPhoto from "../images/Profile_Pic_About_Me.jpg";
import "./projects.css";

function Aboutme() {
    return (
        <div className="container">
            {this.state.projects.map((projects) => (
                <div class="card">
                    <div class="card-image">
                        <img src={myPhoto}></img>
                    </div>
                    <div class="card-text">
                        <h2>About Me</h2>
                        <p>Hello! My name is Jonathan Drabot. I was born in Johannesburg, South Africa, and have lived in Charlotte for almost twenty five years. My interest in Web Development was sparked by my desire to continue furthering my education.
                            I believe that the skills neccessary to create and design web applications has benefits far surpassing computer science. While I have just begun my journey, I know that many differing experiences lay out before me.
                            Below, you will find a few of my projects I have been able to be a part of. These applications should show what I'm capable of in HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Aboutme;