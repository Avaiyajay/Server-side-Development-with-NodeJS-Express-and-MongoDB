const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = "mongodb://127.0.0.1:27017/test";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => {
    const newdish = Dishes({
      dishname: "new dish",
      description: "this is first dish description",
    });
    newdish.save((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
      data.comments.push({ author : "jay" , comment : "this is first comment" })
      data.save();
      console.log(data);

      Dishes.updateOne({ dishname : "new dish" } , { description : "this is third dish updated description" } , (err , data) => {
          if(err) {
              console.log(err);
              return;
          }
          
          Dishes.findOne({ dishname : "new dish" }).exec((err , data) => {
              if(err) { 
                  console.log(err);
                  return;
              }
              console.log(data);
          })
 
          Dishes.deleteMany({ } , (err) => {
              if(err) {
                  console.log(err);
                  return;
              }
              console.log("all the item deleted");
              mongoose.connection.close();
          })
      })
    });
  })
  .catch((err) => console.log(err));
