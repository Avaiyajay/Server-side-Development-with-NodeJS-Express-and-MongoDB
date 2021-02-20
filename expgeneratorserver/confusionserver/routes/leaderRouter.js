const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");

route.use(bodyParser.json());

route.get("/", (req, res) => {
    res.send("here is all the leaders");
});


route.post("/", (req, res) => {
  const { leadername, description } = req.body;
  res.send(
    `new item created of leadername :  ${leadername} and this is description : ${description}`
  );
});

route.put("/", (req, res) => {
    res.send("put operation is not supported on this route");
});


route.delete("/", (req, res) => {
    res.send("all the leaders will get deleted");
});
  

route.get("/:leaderid", (req, res) => {
  res.send(`returning dish of id ${req.params.leaderid}`);
});

route.put("/:leaderid", (req, res) => {
  res.send(`dish updated of leaderid ${req.params.leaderid}`);
});


route.delete("/:leaderId", (req, res) => {
    res.send(`leader deleted with id ${leaderId}`);
});

module.exports = route;
