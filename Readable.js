// 无论输入什么就会得到相同的输出结果
// 我们把数据push进inStream,然后再pipe

const {Readable} = require('stream')

const inStream = new Readable()

inStream.push('ABCDEFGHIJKLM')
inStream.push('NOPQRSTUVWXYZ')

inStream.push(null) // No more data

inStream.on('data', (chunk)=>{
    process.stdout.write(chunk)
    console.log('写数据了')
})