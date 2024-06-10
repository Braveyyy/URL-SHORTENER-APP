import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/databaseConfig";
import shortUrl from "./routes/shortUrl";

dotenv.config();
connectDB();
// PORT
const port = process.env.PORT || 5001;
// create express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

app.use("/api/", shortUrl);

app.listen(port, () => {
    console.log(`Server started successfuly on PORT: ${port}`);
})