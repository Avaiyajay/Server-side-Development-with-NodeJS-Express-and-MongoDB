const express = require("express");
const router = express.Router();
const Promo = require("../models/promo");

router.get("/", (req, res) => {
  Promo.find({}).exec((err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  const newpromo = Promo({
     name : req.body.name,
     image : req.body.image,
     label : req.body.label,
     price : req.body.price,
     description : req.body.description,
     featured : req.body.featured 
  });

  newpromo.save((err, promo) => {
    if (err) {
      return res.send(err);
    } else {
      res.send(promo);
      return;
    }
  });
});

router.put("/", (req, res) => {
  res.send("put operation not supported on this route");
  return;
});

router.delete("/", (req, res) => {
  Promo.deleteMany({}).exec((err) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      res.send("all item got deleted");
    }
  });
});

router.get("/:promoid", (req, res) => {
  Promo.findById({ _id: req.params.promoid }, (err, promo) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(promo);
    }
  });
});

router.put("/:promoid", (req, res) => {
  Promo.findByIdAndUpdate(
    req.params.promoid,
    { $set: req.body },
    { new: true },
    (err, promo) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(promo);
      }
    }
  );
});

router.delete("/:promoid", (req, res) => {
  Promo.findOneAndDelete(req.params.promoid, (err, promo) => {
    if (err) {
      return res.send(err);
    }
    console.log("itemdeleted");
    return res.send(promo);
  });
});

router.post("/:promoid", (req, res) => {
  return res.send("post reqest not supported on this route");
});


module.exports = router;