var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //   读文件
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     res.end(data.toString())
    // })
    //    复制
    // fs.copyFile("./static/1.txt","./static/3.txt",(err)=>{
    //     res.end("成功")
    // })
    //    改名
    // fs.rename("./static/1.txt","./static/11.txt",(err)=>{
    //     res.end("成功")
    // })
    //  删除
    // fs.unlink("./static/2.txt",(err)=>{
    //     res.end("成功")
    // })
    // 创建目录
    // fs.mkdir("./aa",(err)=>{
    //     res.end("成功")
    //})
    // 删除目录
    // fs.rmdir("./aa",(err)=>{
    //     res.end("成功")
    // })
    // 读取目录
    // fs.readdir("./static",(err,data)=>{
    //     res.end(data.toString())
    // })
    // 查看目录信息
    // fs.stat("./static/aa",(err,stats)=>{
    //     console.log(stats.isFile())
    //     console.log(stats.isDirectory())
    //     res.end()
    // })
    //文件流
    var stream=fs.createReadStream("./static/1.txt")
    var content=""
    stream.on("data",(chunk)=>{
        // console.log(chunk)
        content+=chunk
    })
    stream.on("end",(chunk)=>{
        console.log("接受完成"+content)
    })
    res.end()
}).listen(3000)