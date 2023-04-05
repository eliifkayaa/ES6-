
//Arrow Function

// const merhaba = () => {
//     console.log("Merhaba");

// }
// merhaba();

const merhaba = (firstName,lastname) => console.log("Merhaba" , firstName,lastname);

merhaba("Elif");

const cube = function(x) {
    return x*x*x;
}
console.log(cube(4));

const cub = x => x*x*x;
console.log(cube(4));