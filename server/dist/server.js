"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// PORT
const port = process.env.PORT || 5001;
// create express app
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hellow");
});
app.listen(port, () => {
    console.log(`Server started successfuly on PORT: ${port}`);
});
