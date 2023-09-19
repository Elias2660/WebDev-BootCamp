import Express  from "express";
import cors from "cors";
const port = 8000;
const app = Express();
app.use(cors());
app.use(Express.json());


app.get("/message", (req, res) => {
    res.json({message: "Hello World"});
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});