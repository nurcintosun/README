const PrimeNumbers=require('./primeNumbers');
//PrimeNumbers artık bir nesne oldu
PrimeNumbers.showPrimeNumbers(10.22);
//nesnenin içindeki fonskiyonu cagırıyoruz

const{showPrimeNumbers, showFivePrimes}= require('./primeNumbers');
// tüm paket yerine paketin icindern ihtiyacımız olanı aldık
//artık cagırırken baslarına primenumbers yazmama gerek yok
showPrimeNumbers(10,22);
showFivePrimes();

module.exports={
    showPrimeNumbers,
    showFivePrimes
} //burada export ile açtığımız diğer belgelerdeki fonk cağırıyoruz
//birden fazla fonk cagırırken bunu kullanabiliriz

