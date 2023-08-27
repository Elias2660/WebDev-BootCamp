//  for more info go to https://expressjs.com/
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {  //callback telling us that everthing is working
  console.log(`Server running on port ${port}.`);
});


