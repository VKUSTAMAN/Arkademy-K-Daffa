//proses pengambilan library fs
const fs = require('fs')

console.log('start reading a file...')

//proses readfile text,txt menggunakan library fs
fs.readFile('text.txt', 'utf-8', (err, content) => {
    if(err){
        console.log('error happened during reading the file')
        return console.log(err)
    } 

    
    //lakukan sesuatu disini kalau berhasil

    //jika berhasil rename text.txt ke terserah.txt
    fs.rename('text.txt', 'terserah.txt', (err) =>{
        if(err) console.log("Gagal Rename!"+err);
    
    console.log("yeay, berhasil!");
})

})
    console.log('end of the file')