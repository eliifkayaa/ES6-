//Sets= Kümeler. Bir değeri sadece bir defa taşır.

//oluşturma
const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1, b:2});

const myset2 = new Set([100,3.14,"Mustafa"])

console.log(myset);
console.log(myset2);

//Size
console.log(myset.size);

//Delete Metodu
myset.delete("Mustafa")
console.log(myset)

// Has Metodu
console.log (myset.has("Mustafa"));
console.log (myset.has(3.14));
console.log (myset.has(2000));
console.log (myset.has([1,2,3]));

//ForEach

myset.forEach(function(value){
    console.log(value)
})

//For of 

for(let value of myset) {
    console.log(value);
}

//Setlerden array oluşturma
const array = Array.from(myset);
console.log(array);

