const express = require("express");
const morgan = require("morgan");
const config = require("config");
const cors = require("cors");




const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
app.listen(PORT, () => {
  console.log(`${config.get("name")} running on PORT : ${PORT} at : ${HOSTNAME}`);
});