import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", 
    //you can add functionality by passing into object here
        { name: "res.body[name]" });
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});