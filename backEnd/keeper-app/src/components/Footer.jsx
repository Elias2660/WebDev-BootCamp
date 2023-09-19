import React from "react";

function Footer() {
    var d = new Date();
    var footer = (
        <footer> 
        <p> Copyright  {d.getFullYear()} </p>
        </footer>
    );
    return footer;
}

export default Footer;