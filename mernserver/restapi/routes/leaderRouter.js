const express = require('express');
const router = express.Router();
const Leader = require('../models/leader');

router.get("/", (req, res) => {
    Leader.find({}).exec((err, leader) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(leader);
      }
    });
  });
  
  router.post("/", (req, res) => {
    const newleader = Leader({
       name : req.body.name,
       image : req.body.image,
       designation : req.body.designation,
       abbr : req.body.abbr,
       description : req.body.description,
       featured : req.body.featured 
    });
  
    newleader.save((err, leader) => {
      if (err) {
        return res.send(err);
      } else {
        res.send(leader);
        return;
      }
    });
  });
  
  router.put("/", (req, res) => {
    res.send("put operation not supported on this route");
    return;
  });
  
  router.delete("/", (req, res) => {
    Leader.deleteMany({}).exec((err) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        res.send("all item got deleted");
      }
    });
  });
  
  router.get("/:leaderid", (req, res) => {
    Leader.findById({ _id: req.params.leaderid }, (err, leader) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(leader);
      }
    });
  });
  
  router.put("/:leaderid", (req, res) => {
    Leader.findByIdAndUpdate(
      req.params.leaderid,
      { $set: req.body },
      { new: true },
      (err, leader) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(leader);
        }
      }
    );
  });
  
  router.delete("/:leaderid", (req, res) => {
    Leader.findOneAndDelete(req.params.leaderid, (err, leader) => {
      if (err) {
        return res.send(err);
      }
      console.log("itemdeleted");
      return res.send(leader);
    });
  });
  
  router.post("/:leaderid", (req, res) => {
    return res.send("post reqest not supported on this route");
  });

  
module.exports = router;