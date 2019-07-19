//http 模块    cmd   Amd的区别？
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/red"){
        fs.readFile("./red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("./green.html",(err,data)=>{
            res.end(data)
        })
    }else{
        res.end("你是个好人")
    }
    
// res.end("120")
}).listen(3000)
/*amd与cmd的区别
amd是提前执行，requrieJS从2.0开始延迟执行 推崇依赖前置，在定义模块的时候就要声明其依赖的模块 
cmd是延迟执行，推崇的是as lazy as possible 推崇依赖就近，只有再用到某个模块的时候再去require

import与requrie的区别
都是被模块化所使用
requrie是AMD规范引入方式
       是运行时调用，理论上可以运用到代码的任何地方
       是赋值过程，其实require的结果就是对象，数字，字符串，函数等再把函数赋值给变量
import是ES6的一个语言标准，如果兼容必须转化成ES5的语法
      是编译时调用，所以必须放在文件开头。
      是解构的过程，但是目前所有的引擎都还没有实现import。
       */