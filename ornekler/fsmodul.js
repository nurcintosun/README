
const fs = require('node:fs');



/*fs.appendFile('./employees.txt', '\n {"name": "Employee 1 Name", "salary": 2000}', 'utf8', (error) => {
    if (error) {
        // Hata VARSA burası çalışır
        console.log("Dostum dosya eklenirken GERÇEKTEN bir hata oluştu:");
        console.log(error);
    } else {
        // Hata YOKSA (yani başarıyla eklendiyse) burası çalışır
        console.log('Verileriniz DOSYAYA GERÇEKTEN eklendi!');
    }
});
  */




fs.readFile('./employees.txt','utf8',(error,data)=>{
    if(error){
        console.log(error);
        console.log(data);
    }
else{
    console.log(data);
    console.log('Veriniz Okundu!!');
}
    })
/*
 //DOSYA SİLME
 fs.unlink('./trash.txt',(error)=>{
    if(error){
        console.log(error);
        console.log('Dosyanız silinemedi!!');
    }
    else{
        console.log('Dosyanız basarıyla silindi!!');
    }

 }); */
