const obj = {
    test1 : function() {
        console.log("Test 1")
    },
    test2 : function() {
        console.log("Test 2")
    },
}

//console.log(obj)

const emp = Object.create(obj); 
//bizim bir objemizi oluşturuyor. proto özelliği diğer objeyle bağlanmasını sağlıyor.
emp.name = "Elif";
emp.age = 25;
//console.log(emp)

//----------------------Kalıtım-----------------

function Person() {

}
Person.prototype.test3 = function() {
    console.log("Test 1")
}
Person.prototype.test4 = function() {
    console.log("Test 2")
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}
//employee prototype'ı person prototype ile bağladık
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function () {
    console.log("My Test")
}
const emp1 = new Employee("Mustafa", 25)

console.log(emp1)
//emp1.test1;
