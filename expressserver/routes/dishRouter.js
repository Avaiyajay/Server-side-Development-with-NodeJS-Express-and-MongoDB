const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");

route.use(bodyParser.json());

route.get("/", (req, res) => {
  res.send("here is all the dishes");
});

route.get("/:dishid", (req, res) => {
  res.send(`returning dish of id ${req.params.dishid}`);
});

route.post("/", (req, res) => {
  const { dishname, description } = req.body;
  res.send(
    `new item created of dishname :  ${dishname} and this is description : ${description}`
  );
});

route.put("/:dishid", (req, res) => {
  res.send(`dish updated of dishid ${req.params.dishid}`);
});

route.put("/", (req, res) => {
  res.send("put operation is not supported on this route");
});

module.exports = route;
