var express=require("express")
//基于node封装的上层服务框架
var path=require("path")
var app=express()
console.log(__dirname)
var publicpath=path.resolve(__dirname,"public")
app.use(express.static(publicpath))
app.listen(3000)