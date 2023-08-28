import express from "express";
const app = express();
const port = 3000

//add code that sends a message back to the website
app.get("/",(req, res) => {
    res.send("<h1> Hello World </h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1> About Me </h1>");
});


app.get("/contact", (req, res) => {
    res.send("<h1> Contact </h1>");
});

app.listen(port, () => {
    console.log(`Server Running at Port ${port}`);
});