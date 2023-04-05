// let number1, number2;

// arr = [100,200,300,400];

//number1 = arr[0];
// // number2 = arr[1]; //bunun yerine destructing kullanıyoruz.

//Destructing 
//[number1, number2] = arr;

//console.log(number1,number2)

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1 ,c:number2,e:number3} = numbers;

console.log(number1, number2, number3)

//Function Destructing

const getLangs = () => ["Phyton", "Java", "C#"];

const [lang1 , lang2, lang3] = getLangs () ;
console.log(lang1, lang2, lang3)

//Obje 

const person = {
    name: "Mustafa Murat",
    year: 1993,
    salary: 3000,
    showInfos: () => console.log("Bilgiler gösteriliyor...")
}

const {
    name: isim, 
    year: yil, 
    salary: maas,
    showInfos: bilgileriGoser
} = person;

console.log(isim, yil,maas);
bilgileriGoser();