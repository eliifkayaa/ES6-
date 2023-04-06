class Person { //Super Class, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log ("İsim: " + this.name + " Yaş:" + this.age)
    }
}
class Employee extends Person { //DerivedClass , Subclass , ChildClass
    constructor(name, age ,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age) //Person constructorı kullanmka istediğimi söyler 
        this.salary = salary;
    }
    showInfos() {//Overriding
        console.log ("İsim: " + this.name + " Yaş:" + this.age + " Maaş:" +this.salary)
    }
    toString() {//Overriding
        console.log("Employee")
    }

    raiseSalary(amount) { //Ekstra
        this.salary += amount;
    }
}

const emp = new Employee ("Mustafa", 25,4000);
emp.raiseSalary(500);
//console.log(emp)
emp.showInfos();
emp.toString();


