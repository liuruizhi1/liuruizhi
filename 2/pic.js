var http = require("http")
var fd = require("formidable")
var sd = require("silly-datetime")
var path = require("path")
var fs = require("fs")
// console.log(fd)
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    if (req.url == "/upload") {
        var form = new fd.IncomingForm()
        form.uploadDir = './upload'
        form.parse(req, function (err, fields, files) {
            var oldpath = files.pic.path
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(), "YYYYMMDDhhmmss")
            var newpath = 'upload/' + tt + extname
            fs.rename(oldpath, newpath, (err) => {
                res.end("success")
            })
        })
    }
}).listen(3000, () => {
    console.log("好的")
})