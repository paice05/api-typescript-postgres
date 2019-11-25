const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
routes.forEach(item => app.use(item.routes()));

app.listen(3333, () => console.log("server online in port 3333"));
