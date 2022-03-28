const http = require("http");
const fs = require("fs");

const server = http.createServer()

// 使用readFile读文件
server.on('request',(request,response)=>{
    fs.readFile('./big_file.text',(err,data)=>{
        if(err) throw err
        response.end(data)
        console.log('end')
    })
})

server.listen(8888)

//  使用createReadStream读文件     文件stream与 response stream通过管道相连
const server = http.createServer()
server.on('request', (request, response)=>{
    const stream = fs.createReadStream('./big_file.txt')
    stream.pipe(response)
})
server.listen(8888)

/*
* stream.pipe(response)就相当于
* stream.on('data',(chunk)=>{stream2.write(chunk)})
* */