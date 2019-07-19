var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
    var newDate={
        list:["1","2","3"]
    }
    fs.readFile("./2.ejs",(err,data)=>{
        var str=data.toString()
        var result=art.render(str,newDate)
        res.end(result)
    })
}).listen(3000)