var http=require("http")
var path=require("path")
http.createServer((req,res)=>{
    console.log(path)
    var oldpath=path.resolve("./aa/bb")
    console.log(oldpath)
    res.end()
}).listen(3000)