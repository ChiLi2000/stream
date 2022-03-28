
const { Readable } = require("stream");

const inStream = new Readable({
    read(size) {
        const char = String.fromCharCode(this.currentCharCode++)
        this.push(char);
        console.log(`推了 ${char}`)
        if (this.currentCharCode > 90) { // Z
            this.push(null);
        }
    }
})

inStream.currentCharCode = 65 // A

inStream.pipe(process.stdout)