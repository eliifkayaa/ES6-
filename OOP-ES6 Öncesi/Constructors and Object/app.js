//console.log(window)
//console.log(this) //Kendi objelerimizi yazdığımız da objelerimiz gelir

//Object Literal
const emp1 = {
    name: "Mustafa",
    age: 25,
    showInfos: function () {
        console.log("Bilgiler Gösteriliyor");
    }
};
const emp2 = {
    name: "Mustafa",
    age: 25
};

console.log(emp1);

//Burada biz 100den fazla obje oluşturmak istersek o zaman u obje tanımlama yöntemi çok mantıklı değil.
//Bir tane yapıcı obje oluşturuyoruz ve işlemlerimizi onun üzerinden yapıyoruz.

//Yapıcı fonksiyon - Constructor
function Employee(name, age , salary) { 
    this.name = name; //this burada ki objemi gösterir.
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name, this.age, this.salary)
    }

    // console.log(this);
}

const emp = new Employee("Mustafa", 25, 4000)
const emp3 = new Employee("Ahmet", 20, 5000)

emp.showInfos();
emp3.showInfos();

// console.log(emp)
// console.log(emp3)


