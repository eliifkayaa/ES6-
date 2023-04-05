//Mapler - Key(Anahtar)- Value (Değer)

let myMap = new Map(); //Map Oluşturma
console.log(myMap);

const key1 = "Elif"
const key2 = {a:10, b:20};
const key3 = () => 2;

//Mape eklemek için set fonksiyonu kullanılır. 2 parametre alır.
//Set
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Litearl Değer");
myMap.set(key3, "Function Değer");

//get

console.log(myMap.get(key1))
console.log(myMap.get(key2))
console.log(myMap.get(key3))

console.log(myMap);

//Map Boyutu
console.log(myMap.size);

//**************************************************** */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const cities = new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

//ForEach

cities.forEach(function(value,key) {
    console.log (key,value);
})

//For Of

for(let [key,value] of cities) { //DEstructing yapısı var 
    console.log(key,value);
}

//Map Keys

for(let key of cities.keys()){
    console.log(key);
}

//Map Values

for(let value of cities.values()) {
    console.log(value)
}

//Arraylerden Map oluşturma
const array = [["key1", "value1"],["key2", "value2"]];
const lastMap = new Map(array);
console.log(lastMap);

//Maplerden Array Oluşturma:
const city = new Map();
city.set("Ankara",5);
city.set("İstanbul",15);
city.set("İzmir",4);

const arr = Array.from(city);
console.log(arr);



