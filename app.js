const express=require("express");
const app=express();
const bodyParser=require("body-parser");

var tasks=[];

app.listen(process.env.PORT || 3000);
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.render("index",{tasks:tasks});
});
app.post("/additem",function(req,res){
  const newItem=req.body.newItem;
  tasks.push(newItem);
  res.redirect("http://localhost:3000/");
});
app.get("/addItem",function(req,res){
  res.redirect("/");
});
