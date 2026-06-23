function getData(data){
    return new Promise((resolve,reject)=>{
        console.log('Veriler alınmaya çalışılıyor...');
        if(data){
            resolve('Veriler Alındı!!');
        }
        else{
            reject('Veriler Alınamadı!!!');
        }
    })
}

function cleanData(recivedData){
    return new Promise((resolve,reject)=>{
        console.log('Veriler düzenleniyor...');

        if(recivedData){
        resolve('Veriler düzenlendi.');
    }
        else{
    reject('Veriler düzenlenemedi');
}
})
}

/*getData(true)
    .then(result=>{
    console.log(result);
    return cleanData(true)
}) 
.then(result=>{
    console.log(result);
}) 
.catch(error=>{
    console.log(error);
})
*/

async function processData(){
    try{
    const recievedData=await getData(false);
    //await işlemi bitene kadar asağıdaki işleme geçiş yapılamaz
    console.log(recievedData);
    const cleanedData=await cleanData(true);
    console.log(cleanedData);
}
catch(error){
    console.log(error);
}}
processData();
//try ve cath blogunu promise değil de async kullandığımızda
//kullanmamız gerekir bir hata varsa belirleme işini promise yapabilir
//async yapamaz o yüzden try catch ile destek veriririz
