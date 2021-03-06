const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');


//importing routers
const indexRouter = require("./routes/index");
const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionRouter");
const leaderRouter = require("./routes/leaderRouter");

const app = express()
//app setup 
app.set("view engine" , "ejs");
app.set('views' , __dirname + "/views");
app.set('layout',"layouts/layout");
app.use(expressLayouts);



// app.use(express.static(__dirname+'/public'));
// app.use('/',indexRouter);
app.use("/dishes" , dishRouter);
app.use("/promotions" , promotionRouter);
app.use("/leaders" , leaderRouter);




app.listen(process.env.PORT || 3000)
