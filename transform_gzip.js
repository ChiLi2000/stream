// 将文件压缩并加密

const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2];
const crypto = require("crypto");


const { Transform } = require("stream");

const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write(".");
        callback(null, chunk);
    }
});


fs.createReadStream(file)
    .pipe(crypto.createCipher("aes192", "123456"))
    .pipe(zlib.createGzip())
    .pipe(reportProgress)
    .pipe(fs.createWriteStream(file + ".gz"))
    .on("finish", () => console.log("Done"));