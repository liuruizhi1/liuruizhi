var http=require('http')
var url=require('url')
// var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    var obj={
        username:'tom',
        password:'123456'
        }
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
        var query=url.parse(req.url,true).query
        if(query.username==obj.username&&query.password==obj.password){
            // console.log()
            res.end('提交成功')
            // return
        }else{
            res.end('提交失败')
            // return
        }
}).listen(3000)
