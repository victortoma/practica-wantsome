// // Ex1
// // Creati un obiect "car"
// // Adaugati proprietatea name si valoarea Tesla
// // Adaugat proprietatea wheels si valoarea 4
// // Schimbati valoarea name sa fie Mercedes
// // Stergeti proprietatea name

// var car = {
//     name: "Tesla",
//     wheels: 4
// }
// car.name = "Mercedes",  
//     delete car.name;
// console.log(car);

// //Ex2
// // // Creati un obiect cu 4 proprietati
// // // Stocati "key"-urile intr-o variabila noua
// // // intr-o alta variabila vreau sa am toate key-urile cu litere marif
// // // Stocati valorile intr-o variabila noua
// // // intr-o alta variabila vreau sa am toate valorile cu litere mici
// // // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

// var obiectul = {
//     key1: "Value1",
//     key2: "Value2",
//     key3: "Value3",
//     key4: "Value4"
// }
// var stocareKeys = Object.keys(obiectul);
// var stocareKeysUpper = stocareKeys.join(" ").toUpperCase();
// console.log(stocareKeysUpper);
// var stocareValues = Object.values(obiectul);
// var stocareValuesLower = stocareValues.join(' ').toLowerCase();
// console.log(stocareValuesLower);
// console.log(stocareValues.join(' ') + " reprezinta valorile obiectului");

// //Ex3
// // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
// var obiect = {
//     key1: "Want",
//     key2: "some",
//     key3: function () {
//         console.log(this.key1 + this.key2);
//     }
// }
// obiect.key3();

// // //Ex4 
// // // Creati un obiect cu cateva proprietati
// // // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// // // Pe obiectul nou adaugam 2 noi proprietati
// // // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
// myHouse = {
//     rooms: 3,
//     zona: "Bucium",
//     suprafata: "120m"
// }
// var copieMyHouse = Object.assign({}, myHouse);
// console.log(copieMyHouse);
// copieMyHouse.keys1 = "room1";
// copieMyHouse.keys2 = "room2";
// copieMyHouse.keys3 = "bath1";
// console.log(copieMyHouse);
// var mergeObiecte = { ...myHouse, ...copieMyHouse };
// console.log(mergeObiecte);
// mergeObiecte.keys4 = "garaj";
// console.log(mergeObiecte);

// // Ex5 
// // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
// var obiectProba = {
//     key1: "proprietate1",
//     key2: "proprietate2",
//     key3: {
//         key4: "proprietate3",
//         key5: "proprietate4",
//     }
// }
// var stocare = Object.values(obiectProba.key3);
// console.log(stocare.join(" si ") + " apartin obiectuluiProba");

// //Ex6
// // Avem obiectul : 
// myObject = {
//     name: "John",
//     surname: "Applegate",
//     metoda: function () {
//         console.log(Object.values(myObject).sort())
//     }
// }
// myObject.metoda();
// // Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

// //Ex7 
// //Faceti o functie constructor
// // Cu functia constructor creati 3 obiecte cu valori diferite
// // Pentru toate valorile din acele obiecte transformatile in litere mari.
// function Car(roti, culoare, tip) {
//     this.roti = roti,   
//     this.culoare = culoare,
//     this.tip = tip
// }

// var masina1 = new Car(6, "maro", "mica");
// var masina2 = new Car(4, "galben", "sport");
// var masina3 = new Car("mari", "rosu", "familie");
// var allValues = Object.values(masina1) + " " + Object.values(masina2) + " " + Object.values(masina3);
// var valuesUpper = allValues.toUpperCase();
// console.log(valuesUpper);

// //Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
// var myArray = ["hot", "dog", "cat", "horse", "pig"]
// console.log("Lungimea arrayului este de " + myArray.length)

// //Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
// var array1 = ['Car', 'Vehicle'];
// var array2 = ['House', 'Job'];
// console.log(array1.concat(array2));

// //Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
// var notArray = 0;
// var array = ["unu", "doi"];
// console.log(Array.isArray(notArray));
// console.log(Array.isArray(array));

// //Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// // fara sa modificati variabila initiala
// var numbers = ['one', 'two', 'three', 'four', 'five'];
// console.log(numbers.join(' and '));

// //Ex5: Adaugati 2 elemente noi in arrayul de mai jos
// var cars = ['Tesla', 'Dacia'];
// cars.push("Audi"); cars.push("Smart");
// console.log(cars)

// //Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
// cars.pop();
// console.log(cars);

// //Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
// cars.unshift("Dodge");
// console.log(cars);

// //Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
// console.log(cars.reverse());

// //Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
// cars.splice(2, 2, "Porsche", "Vw");
// console.log(cars);

// //Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
// var arrayNumbers = [1, 5, 20 ,30, 100];
// console.log(arrayNumbers.sort(function(a, b){
//     return a - b;
// }));

// //Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
// var fruitsArray = ["Apple", "Lemon", "Banana", "Bere", "Mici"];
// function sort(array){
//     console.log(array.sort());
// }
// sort(fruitsArray);
