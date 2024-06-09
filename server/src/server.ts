import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// PORT
const port = process.env.PORT || 5001;
// create express app
const app = express();

app.get("/", (req, res) => {
    res.send("Hellow");
});

app.listen(port, () => {
    console.log(`Server started successfuly on PORT: ${port}`);
})