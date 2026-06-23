const promise1=new Promise((resolve,reject)=>{
resolve('Veriler alındı');
})
console.log(promise1);
//resolve olumlu sonuc
//reject olumsuz durum 

promise1.then(value => {
    console.log(value);
})