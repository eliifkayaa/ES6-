const object = new Object(); //Object Literal
const object2 = new Object()
object.name = "Mustafa"
//console.log(object);

function Employee (name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gösteriliyor...")
    }
}
const emp1 = new Employee ("Mustafa",25)
//console.log(emp1)

//Her objenin bir prototype var , o prototypende bir objesi var.
//Prototype objeler arası kalıtım yapmamızı sağlıyor.
//Object prototypenden miras alıyor.

//metot içinde fonksiyon çağırdığımız da belleği gereksiz yere işgal eder.
//prototype içine yazarsak bu sorunu çözmüş oluruz.
function Employe (name, age) {
    this.name = name;
    this.age = age;
    // this.showInfos = function() {
    //     console.log("İsim:" + this.name + "Yaş: " + this.age) }
    }

    //Prototype içinde bu fonksiyon tanımlanır.
    Employe.prototype.showInfos = function () {
        console.log("İsim:" + this.name + "Yaş: " + this.age)
    }

emp3.showInfos();
const emp3 = new Employe("Mustafa",25)
const emp4 = new Employe("Oğuz",25)
console.log(emp3)
console.log(emp4)
