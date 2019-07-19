//引入服务器引擎
var http=require("http")
//ejs    模板引擎
var ejs=require("ejs")
//  fs
var fs=require("fs").
http.createServer((req,res)=>{
    var list=["1","2","3"]
    fs.readFile("./1.ejs",(err,data)=>{
        var str=data.toString()
        var result=ejs.render(str,{lists:list})
        res.end(result)
    })
}).listen(3000)