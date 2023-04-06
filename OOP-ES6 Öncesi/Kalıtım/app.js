//Kalıtım kullanılmıyor ama yine de bilmek gerekir.

//Prototype tabanlı kalıtım

//Kalıtım -Inheritance = Bir objenin başka bir objeden özelliklerini miras almasıdır.

function Person(name, age) {
this.name = name ,
this.age = age
}

Person.prototype.showInfos = function() {
    console.log ("İsim: " + this.name + " Yaş:" + this.age)
}

const person = new Person("Mustafa" , 25);
console.log(person)

function Employee (name, age, salary) {
   // this.name = name;
   // this.age = age;
   Person.call(this,name,age) //employee thisin yerine geçmiş olur.
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function() {
    console.log("Employee")
}

const emp = new Employee ("Mustafa",25, 4000);
emp.showInfos();
console.log(emp.toString())
console.log(emp)