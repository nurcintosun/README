//kullanılmaya hazır modüllerdir.
//ezberleyemmeyiz dokümandan cekmeliyiz
//node içinde olduklarından onun dokümasyonlarıdır 
const fs = require('node:fs');
//./ lı bir işe gerek yok bunlar hazır kodlar. çekirdek modül

//DOSYA OKUMAK

fs.readFile('./modelsfs/password.txt','utf8',(error,data)=>{
    //./ odaklandıgımız klasörü göstermek aslında calsıması için buna odaklan gibi
    if(error){
        console.log(error);
        console.log(data);
        console.log('Hata yaptınız!!');
    }
    else{
        console.log(data);
    }
})

//fs.readFile('okumak sitediğimiz belgemiz',utf8,callabck);*/


//VERİ EKLEME Password txtsine
fs.appendFile('password.txt','\n kodluyoruz 01010110','utf8',(error) => {
    if(error) console.log(error);
    console.log('Yeni veri eklendi!!!');
});

//DOSYA SİLME
fs.unlink('example.txt',(error)=>{
     if(error) console.log(error);
    console.log('Dosya silindi!!!');
})