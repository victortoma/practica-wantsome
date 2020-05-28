//   // The Car and the Truck class have similar behavior and properties.
//   // Rewrite them in a way such that they share those properties.

var Vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function (mph) {
        this.speed = mph;
        return this.driver + ' driving at ' + mph + ' miles per hour';
    };
};

var Car = new Vehicle("marcel")

var Truck = new Vehicle("mirel");

Truck.cargo = ["mere", "cartofi"];
Truck.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
};

Truck.unloadCargo = function () {
    return this.cargo.pop();
};

console.log(Truck.loadCargo('pere'))
// console.log(Truck.unloadCargo())


//2
//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
//[nume trainer] is now teaching [subject]

var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

var Trainer = new Person();
Trainer.initialize("Marcel", 33)

Trainer.teach = function (string) {
    console.log(`${this.name} is now teaching ${string}`)
}
Trainer.teach('javascript')


//3 triunghi.constructor;                 // Triangle(a, b, c)   
//forma.isPrototypeOf(triunghi);        // true
//triunghi.getPerimeter();              // 48
//triunghi.getType();                   // "triunghi"

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triunghi'
}

const forma = {
    getType: function () {
        return this.type;
    }
}

Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(2, 4, 6);
triunghi.getPerimeter = function () {
    return this.a + this.b + this.c;
}
console.log(triunghi.getPerimeter())
console.log(forma.isPrototypeOf(triunghi))
console.log(triunghi.getType())