import React from "react";
import backgroundPic from "../images/boatpic.jpg";

function Home() {
    return (
        <img class="displayed"
            width="100%"
            height="100%"
            src={backgroundPic}
            alt="Imagine a beautiful boat on the sea at sunrise">
        </img>
    )
}

export default Home;