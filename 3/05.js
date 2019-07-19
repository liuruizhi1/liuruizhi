var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("首页")
}).get("/new",(req,res)=>{
    console.log(req.query)
    res.send("接受成功")
})
app.listen(3000)