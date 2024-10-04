import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("static/dist"));

app.get("/", (req, res) => {
 res.send("Hello World!");
});

app.listen(4000, () => {
 console.log("Server is running on port 4000");
});

export default app;
