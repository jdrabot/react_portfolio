import React from "react";

function Wrapper(props) {
    return
    <main className="wrapper"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "600px" }}>
        {props.children}</main>
}

export default Wrapper;