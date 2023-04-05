//Spread Operator

const langs = ["Phyton", "C++", "Java", "Php"];

//console a langs olarak yazdığım da obje olarak gösterir.
//console.log(langs[0],langs[1], langs[2], langs[3])

//Yukarı da bu şekilde indis indis yazmak yerine spread operatörü kullanılır.
console.log(...langs)

const langs2 = ["Javascript", "C#",...langs];
console.log(langs2) //2 tane ögeyi bu şekilde diziye ekleyebiliriz.

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b,...numbers2] = numbers; //yanına başka bir dizi ekledik.

console.log(a,b);
console.log(numbers2);

const addNumbers = (a,b,c) => console.log (a+b+c);
const number = [100,200,300];

addNumbers(...number)