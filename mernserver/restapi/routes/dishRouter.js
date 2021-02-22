const express = require("express");
const router = express.Router();
const Dishes = require("../models/dishes");

router.get("/", (req, res) => {
  Dishes.find({}).exec((err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  const newdish = Dishes({
    dishname: req.body.dishname,
    description: req.body.description,
    price: req.body.price,
  });

  newdish.save((err, dish) => {
    if (err) {
      return res.send(err);
    } else {
      res.send(dish);
      return;
    }
  });
});

router.put("/", (req, res) => {
  res.send("put operation not supported on this route");
  return;
});

router.delete("/", (req, res) => {
  Dishes.deleteMany({}).exec((err) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      res.send("all item got deleted");
    }
  });
});

router.get("/:dishid", (req, res) => {
  Dishes.findById({ _id: req.params.dishid }, (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(data);
    }
  });
});

router.put("/:dishid", (req, res) => {
  Dishes.findByIdAndUpdate(
    req.params.dishid,
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(data);
      }
    }
  );
});

router.delete("/:dishid", (req, res) => {
  Dishes.findOneAndDelete(req.params.dishid, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    console.log("itemdeleted");
    return res.send(doc);
  });
});

router.post("/:dishid", (req, res) => {
  return res.send("post reqest not supported on this route");
});

//comments route

router.get("/:dishid/comments", (req, res) => {
  Dishes.findById(req.params.dishid).exec((err, dish) => {
    if (err) {
      return res.send(err);
    } else if (dish != null) {
      return res.send(dish.comments);
    } else {
      res.statusCode = 404;
      return res.send("dish does not exist");
    }
  });
});

router.post("/:dishid/comments", (req, res) => {
  Dishes.findById(req.params.dishid).exec((err, dish) => {
    if (err) {
      return res.send(err);
    } else if (dish != null) {
      console.log(dish);
      let comment = {
        author: req.body.author,
        comment: req.body.comment,
      };
      console.log(comment);
      dish.comments.push(comment);
      console.log(dish);
      dish.save((err, dish) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(dish);
        }
      });
    } else {
      res.statusCode = 404;
      return res.send("dish does not exist");
    }
  });
});

router.put("/:dishid/comments", (req, res) => {
  res.send("put operation not supported on this route");
  return;
});

router.delete("/:dishid/comments", (req, res) => {
  Dishes.findById(req.params.dishid).exec((err, dish) => {
    if (err) {
      return res.send(err);
    } else if (dish != null && dish.comments.id(req.params.commentid) != null) {
      for (var i = dish.comments.length -1 ; i>= 0; i--) {
        dish.comments.id(dish.comments[i]._id).remove();
      }
      dish.save((err , dish) => {
          if(err) 
          {
              return res.send(err);
          }
          else{
              return res.send(dish)
          }
      })
    }
    else if(dish == null) {
        return res.send("dish does not exist");
    }
    else if(dish.comments.id(req.params.commentid) == null) 
    {
        return res.send("there is no comment exist to delete");
    }
    else {
      res.statusCode = 404;
      return res.send("dish does not exist");
    }
  });
});

router.get("/:dishid/comments/:commentid", (req, res) => {
    Dishes.findById(req.params.dishid).exec((err, dish) => {
        if (err) {
          return res.send(err);
        } else if (dish != null && dish.comments.id(req.params.commentid) != null) {
            return res.send(dish.comments.id(req.params.commentid));
        }
        else if(dish == null) {
            return res.send("dish does not exist");
        }
        else if(dish.comments.id(req.params.commentid) == null) 
        {
            return res.send("dish does not exist");
        }
        else {
          res.statusCode = 404;
          return res.send("something went wrong");
        }
      });
});

router.put("/:dishid/comments/:commentid", (req, res) => {
    Dishes.findById(req.params.dishid).exec((err, dish) => {
        if (err) {
          return res.send(err);
        } else if (dish != null && dish.comments.id(req.params.commentid) != null) {
            dish.comments.id(req.params.commentid).comment = req.body.comment;
            dish.save((err , dish) => {
                if(err) 
                {
                    return res.send(err);
                }
                else{
                    return res.send(dish);
                }
            })
        }
        else if(dish == null) {
            return res.send("dish does not exist");
        }
        else if(dish.comments.id(req.params.commentid) == null) 
        {
            return res.send("dish does not exist");
        }
        else {
          res.statusCode = 404;
          return res.send("something went wrong");
        }
      });
});

router.delete("/:dishid/comments/:commentid", (req, res) => {
    Dishes.findById(req.params.dishid).exec((err, dish) => {
        if (err) {
          return res.send(err);
        } else if (dish != null && dish.comments.id(req.params.commentid) != null) {
            dish.comments.id(req.params.commentid).remove();
            dish.save((err , dish) => {
                if(err) 
                {
                    return res.send(err);
                }
                else{
                    return res.send(dish);
                }
            })
        }
        else if(dish == null) {
            return res.send("dish does not exist");
        }
        else if(dish.comments.id(req.params.commentid) == null) 
        {
            return res.send("dish does not exist");
        }
        else {
          res.statusCode = 404;
          return res.send("something went wrong");
        }
      });
});

router.post("/:dishid/comments/:commentid", (req, res) => {
  return res.send("post reqest not supported on this route");
}); 

module.exports = router;
