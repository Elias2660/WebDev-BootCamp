import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";


function App(){
    var app = (
        <div> 
        <Header  />
        <Note />
        <Footer />
        </div>
    );
    return app;
}

export default App;