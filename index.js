import express from "express";
import path from "path";
import url from "url";

const port = process.env.port || 5000;
const app = new express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.use(express.static(path.join(__dirname,'public','html')))
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','html','login.html'))
    res.sendFile(path.join(__dirname,'public','css','login.css'));
})


app.listen(port,()=>{
    console.log(`sever is ruuning on ${port}`);
})