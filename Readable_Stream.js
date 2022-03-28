/*
* Readable 可读的
* 静止态 paused 和流动态 flowing
* 默认为静止态
* 添加data监听事件，就变成flowing态
* 删除data监听事件，就变成paused态
* pause()可以将它变成 paused
* resume()可以将它变成flowing
                   */
const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
    const stream =
        fs.createReadStream('./big_file.txt')
    stream.pipe(response)
    stream.pause()
    setTimeout(()=>{
        stream.resume()
    },3000)

})

server.listen(8888)