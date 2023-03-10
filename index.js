import express, { json } from "express";
import morgan from "morgan";
import pkg from 'config';
import cors from "cors";

import RouterDistributer from "./src/api/v1/routes/distributeur.js";

const { get } = pkg;
const app = express();

app.use(cors());
app.use(json());
app.use(morgan("tiny"));

app.use("/distributeur", RouterDistributer);

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
app.listen(PORT, () => {
  console.log(`running on PORT : ${PORT} at : ${HOSTNAME}`);
});