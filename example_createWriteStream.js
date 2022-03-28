const fs = require('fs')
const stream = fs.createWriteStream('./big_file.text')

for(let i=0;i<1000;i++){
    stream.write(`这是第${i}行内容，我们需要回车\n`)
}
stream.end()
console.log('end')