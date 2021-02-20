const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");

route.use(bodyParser.json());

route.get("/", (req, res) => {
  res.send("here is all the dishes");
});

route.post("/", (req, res) => {
  const { promotionname , description } = req.body;
  res.send(
    `new item created of promotionname  :  ${promotionname } and this is description : ${description}`
  );
});

route.put("/", (req, res) => {
  res.send("put operation is not supported on this route");
});


route.delete("/", (req, res) => {
    res.send("delete all the promos");
  });
  

route.get("/:promotionid", (req, res) => {
  res.send(`returning promotion of id ${req.params.promotionid}`);
});

route.put("/:promotionid", (req, res) => {
  res.send(`dish updated of promotionid ${req.params.promotionid}`);
});

route.delete("/:promoId", (req, res) => {
    res.send(`promo deleted with id ${promoId}`);
});


module.exports = route;
