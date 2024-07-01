const express= require("express");
const db = require("./router/db-config");

const port = process.env.port || 5000;
const app = new express();

app.use(express.json());

db.connect((err)=>{
    if(err) throw err;
    console.log("database is connected");
})


app.use("/js",express.static(__dirname+'/public/js'))
app.use("/css",express.static(__dirname+'/public/css'))
app.use("/",require('./router/pages'))

app.use("/api",require("./controllers/auth"))

app.listen(port,()=>{
    console.log(`sever is runing on ${port}`);
})