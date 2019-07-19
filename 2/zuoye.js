var http = require('http');
var url = require('url');
var fs = require('fs')
var arr = {
    "teacher": [
        {
            username: '赵',
            password: '111',
            id: '1'
        }, {
            username: '钱',
            password: '222',
            id: '2'
        }
    ],
    "student": [
        {
            username: '孙',
            password: '111',
            id: '1'
        }, {
            username: '李',
            password: '222',
            id: '2'
        }
    ]
}

// console.log(arr.student[1])
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    if (req.url == "/favicon.ico") {
        return
    }
    fs.readFile('', (err, data) => {
        var query = url.parse(req.url, true).query
                console.log(arr[query.bumen].length)
                for (var i = 0; i < arr[query.bumen].length; i++) {
                    // console.log(query.username == arr[query.bumen][i].username && query.password == arr[query.bumen][i].password)
                if (query.username == arr[query.bumen][i].username && query.password == arr[query.bumen][i].password) {
                    res.end('你是'+query.bumen+'你的工号是'+arr[query.bumen][i].id)
                }
            }
        })
}).listen(3000)
