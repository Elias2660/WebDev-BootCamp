import express from "express";

const app = express();
const port = 3000;


//custom middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); //helps help send the handler
}