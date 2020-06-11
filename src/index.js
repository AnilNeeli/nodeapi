const express = require("express");
const app = express();
const teacherRouter = require("./router/teacherRoute");
const body = require("body-parser");
app.use(body.json());
app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});
app.get("/teacher", (req, res) => {
  res.send("Home");
});

app.use("/teacher", teacherRouter);

app.listen(8080, () => {
  console.log("server is running");
});
