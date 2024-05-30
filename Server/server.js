import express from "express";
import cors from "cors";
import dbConnect from "./Configs/connectDB.js";
import initRoute from "./Router/index.js";
import { config } from "dotenv";
import bodyParser from "body-parser";
config();

const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
initRoute(app);
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
