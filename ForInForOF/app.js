//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const person = {
    name: "Mustafa Murat",
    age: 25,
    salary: 3000
};

const langs = ["Phyton", "Java", "C++", "Php"];

const name = "Mustafa";

//For In 
//Obje üzerinde gezinme
for (let prop in person)  {
    console.log(prop, person[prop]);
}

//Array üzerinde gezinme
for (let index in langs)  {
    console.log(index, langs[index]);
}

//String üzerinde gezinme

for (let index in name) {
    console.log(index, name[index])
}

//For Of = Gezinme yapamıyoruz. Sadece arraye benzeyen veri tipleri ve stringler üzerinde gezinirler.

//Obje üzerinde gezinme
// for (let prop of person)  {
//     console.log(prop, person[prop]);
// }
//Hata verdi.

//Array üzerinde gezinme
for (let index of langs)  {
    console.log(index, langs[index]);
}

//String üzerinde gezinme
for (let index of name) {
    console.log(index, name[index])
}


