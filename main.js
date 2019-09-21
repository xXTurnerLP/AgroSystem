const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const router_index = require("./routes/index.js");
const router_onClick = require("./routes/onClick.js");

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layout.ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", router_index);
app.use("/", router_onClick);

app.listen(80);