// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
  name: "Tesla",
  wheels: 4,
  
}

car.name = "Mercedes";
delete car.name
console.log(car)


//Ex2
// // Creati un obiect cu 4 proprietati
// // Stocati "key"-urile intr-o variabila noua
// // intr-o alta variabila vreau sa am toate key-urile cu litere mari
// // Stocati valorile intr-o variabila noua
// // intr-o alta variabila vreau sa am toate valorile cu litere mici
// // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var obiect = {
  cheie1: "valoare1",
  cheie2: "valoare2",
  cheie3: "valoare3",
  cheie4: "valoare4",
}
var xas = Object.keys(obiect);
var y = Object.values(obiect);
// console.log(y);
var up = [
 obiect.cheie1.toUpperCase(), 
 obiect.cheie2.toUpperCase(), 
 obiect.cheie3.toUpperCase(), 
 obiect.cheie4.toUpperCase()
]
console.log(up);
console.log(up.join(" ") + " reprezinta")
//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var obi = {
  che1: "val1",
  che2: "val2",
  che3: function(){
var x = this.che1 + this.che2;
    return x;
  }
}
console.log(obi.che3());

// //Ex4 
// // Creati un obiect cu cateva proprietati
// // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// // Pe obiectul nou adaugam 2 noi proprietati
// // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
  rooms: 3,
  zone: "Bucium",
  animals: 1
}

var copie = Object.assign({}, myHouse);
console.log(copie);
copie.cheie1 = "valoare1";
copie.cheie2 = "valoare2";
copie.cheie3 = "val2";
console.log(copie)

var merge = {...myHouse, ...copie};
console.log(merge);
merge.cheie4 = "val3";
console.log(merge);

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var obi = {
  che1: "valo1",
  che2: "valo2",
  che3: {
      che4: "valo4",
      che5: "valo5",
}
}
var stocare = Object.values(obi.che3);
console.log(stocare.join(" si ") + " apartin obiectului obi");


//Ex6
// Avem obiectul : 
myObject = {
name: "John",
surname: "Applegate",
cheie: "valoarea",
metoda: function(){
console.log(Object.values(myObject).sort())
}
}
console.log(myObject.metoda());
console.log(Object.values(myObject).sort());
console.log(myObject);
// Adaugati o metoda care sa sorteze cele 2 valori ale numelui.


//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.
function Car(roti, culoare, tip){
   this.roti = roti.toUpperCase(),
   this.culoare = culoare.toUpperCase(),
   this.tip = tip.toUpperCase()
}

  var noua = new Car(2, "maro", "mica");
  console.log(noua);
  var noua2 = new Car(4,"galben", "sport");
  var noua3 = new Car("mari", "rosu", "familie");
  console.log(noua2, noua3, Car);
