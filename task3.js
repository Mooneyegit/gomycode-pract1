const fs = require('fs')
const path = require('path')


fs.readFile('./file.txt', ({encoding : 'utf-8'}), (err, data)=>{
    if (err) err;
    console.log(data);
})