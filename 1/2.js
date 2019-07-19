var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    // console.log(url.parse(req.url))
    // var oldquery=url.parse(req.url).query
    //url.parse（解析地址栏）的第二个值为true是则会转为对象
    // var query=url.parse(req.url,true).query
    //url.resolve（解析）将多端路径合并
    // var query1=url.resolve("http://127.0.0.1:3000","/aaa/bb")
    //序列化   参数    对象
    var query2=url.format({
        protocol: null,
        slashes: null,
        auth: null,
        host: "http:172.0.0.1",//主机
        port: "3000",
        hostname: null,
        hash: null,
        search: "?name=tom&age=12",
        query:  "name=tom&age=12",
        pathname: '/',
        path:  "?name=tom&age=12",
        href:  "?name=tom&age=12" 
    })
    // console.log(oldquery)
    // console.log(query)
    // console.log(query1)
    console.log(query2)
    res.end()
}).listen(3000)