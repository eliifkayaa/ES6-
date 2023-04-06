//Static Metodlar

class Matematik {

    sqrt(x) {
        console.log(x*x)
    }

   static cube(x) { //static anahtar kelimesi kullanınca obje oluşturmaya gerek yok.
        console.log(x*x*x);
    }
}

const math = new Matematik(); //obje

Matematik.cube(3)
console.log(math)

//math.cube(4) //obje üzerinden değil sınıf üzerinden erişilir. Çünkü static

math.sqrt(4);
//Matematik.sqrt(5); static olmadığı için çalışmaz obje olması gerekir.
console.log(Math.sqrt(4)) //Math objesi