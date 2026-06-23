const promise1=new Promise((resolve,reject)=>{
resolve('Veriler alındı');
})
console.log(promise1);
//resolve olumlu sonuc
//reject olumsuz durum 

promise1.then(value => {
    console.log(value);
})
//value aslında veriler alındı mesajımız
promise1.catch(error=>{
    console.log(error);
}) //bu ifade rejectle kullanılır altta erdiği hatayı ortadan kaldırır
//hem resolve hem reject beraber kullanılsa bile basta resolve
//aldığımız içi çözülmüş kodun cevabını verir bize.

