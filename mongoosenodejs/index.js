const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = "mongodb://127.0.0.1:27017/test";
mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
  }
);

const adddata = () => {
  const newdata = new Dishes({
    dishname: "jay dish",
    description: "this is jay dish and it is delisious",
  }).save((error, doc) => {
    if (error) console.log(error);
    console.log(doc);
    mongoose.connection.close();
  });
};

adddata();
