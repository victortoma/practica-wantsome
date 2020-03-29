// Cerinte:
// 1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
// numarul [index]” - Scrieti codul in doua variante

//ex1.1
function selfIteration(number) {
    for (var i = 0; i < number; i++) {
        console.log("sunt la iteratia " + i);
    }
}
selfIteration(5);

// ex1.2
function selfIteration2(number) {
    for (var i = number; i > 0; i--) {
        console.log("sunt la iteratia " + i);
    }
}
selfIteration2(10);

//ex1.3
function selfIteration3(number) {
    var index = 0;
    while (index < number) {
        index++;
        console.log("sunt la iteratia " + index);
    }
}
selfIteration3(5);

// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
// Scrieti codul in doua variante
//ex2.1
fruitsArray = ["bananas", "oranges", "apricots", "apples"];
function iteration(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
iteration(fruitsArray);

// //ex2.2
fruitsArray = ["Bananas", "Oranges", "Apricots", "Apples"];
function iteration2(array){
    for (i = array.length-1; i >= 0; i--){
    console.log(array[i] + " " +i);
    }
}
iteration2(fruitsArray);

// //ex2.3
fruitsArray = ["Bananas", "Oranges", "Apricots", "Apples"];
function iteration2(array){
  var i = array.length;
    do {
    console.log(array[i-1]+ " " + i);
    i--;
   }
    while(i > 0){
    }
}
iteration2(fruitsArray);

// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
// scrieti codul in doua variante
// // ex3.1
var angajat = {
    nume: "Gigi",
    varsta: 4,
    profesie: "angajat"
}
function iterationValues(numeObiect) {
    var valoriAngajat = Object.values(numeObiect);
    for (var i = 0; i < valoriAngajat.length; i++) {
        console.log(valoriAngajat[i] + " " + i);
    }
}
iterationValues(angajat);

// //ex3.2
function iterationValues2(numeObiect){
    var valoriAngajat = Object.values(numeObiect);
    var i = 0;
    while(i < valoriAngajat.length){
        i++;
        console.log(valoriAngajat[i-1]+ " " + i);
    }
}
iterationValues2(angajat);

//ex4
// ex4.1
// 1. 0 100 200 300 400 500 600 700 800 900 1000
function stepCount100(){
    var i = 0;
    for(i=0; i<1001; i+=100 ){
        console.log(i);
    }
}
stepCount100();

//ex4.2
// 2. 1 2 4 8 16 32 64 128
function countSquare(number) {
    for (i = 0; i < 8; i++) {
        console.log(Math.pow(number, i) + " " + i);
    }
}
countSquare(2);

// 4.3 0 2 4 6 8 10
function stepCount2(){
    for(i=0; i <= 10; i+=2){
    console.log(i);
    }
}
stepCount2();

// 4.4. 3 6 9 12 15
function multiplyByI(number){
    for(i=1; i < 6; i++){
        console.log(i*number + " " + i)
    }
}
multiplyByI(3);

// 4.5. 9 8 7 6 5 4 3 2 1 0
function decrement(number) {
    for (i = 0; i <= number; i++){
    console.log(number - i);
    }
}
decrement(9);

// 4.6. 1 1 1 2 2 2 3 3 3 4 4 4
function multipleLog(){
        for(i = 1; i < 5; i++){
            var loop = 0;
            while(loop<3){
                loop++;
            // for(index=0; index<3;index++){
            console.log(i);
        }
    }
}
multipleLog();

// 4.7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
function multipleLog2(){
    var loop=0
    while(loop<3){
        for(i=0; i < 5; i++){
            console.log(i)
        }
        loop++;
    }
}
multipleLog2();

// //ex5
// // Implementati functia stream. Trebuie sa:
// // ● accepte ca argumente 2 functii: conditionalFn, actionFn.
// // ● apeleaza actionFn pana cand conditionalFn returneaza fals
// // ● nu returneaza nimic
// // Exemplu 1:

//5.1
var conditionalFn = function () { return false; };
var actionFn = function () {
    console.log("Vreau sa ies la tabla!");
};

function stream(fn1, fn2) {
    var i = 0;
    do {
        fn2();
        i++;
    }
    while (i < 10) {
        console.log(fn1());
    }
}
stream(conditionalFn, actionFn);

//5.2
var conditionalFn = function () { return false; };
var actionFn = function () {
    console.log("Vreau sa ies la tabla!");
};

function stream2(fn1, fn2){
    var i=0;
    while (i < 10) {
         fn2();
        i++;
    }
    console.log(fn1());
    }
stream2(conditionalFn, actionFn);

// ex5.Exemplu2:
var counter = 10;
var conditionalFn = function() {
 counter--;
 return counter >= 0;
};
var actionFn = function () {
        console.log("Vreau sa ies la tabla!");
}

function stream(fn1, fn2){
    while(conditionalFn()){
        actionFn();
    }
}
stream(conditionalFn, actionFn); 

//ex6.1
function computeSumOfArrayElements(numbersArray){
    var suma = 0;
    for(i=0; i <= i; i+=numbersArray.shift()){
        suma = i;
    }
    console.log(suma);
}

//ex6.2
function computeSumOfArrayElements(numbersArray){
        var suma = 0;
        var i = 0;
        while(i < numbersArray.length){
            suma += numbersArray[i];
            i++;
            console.log(suma);
        }
    }
computeSumOfArrayElements([2,3,7,12, 23, 100]);

//7 
// Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for
//7.1
function oddIteration() {    //am declarat functia 
    for (i = 0; i < 21; i++) {    //am declarat conditia pentru iteratie
        if (i % 2 === 0) {      //verificam de cate ori se cuprinde 2 in "i", functioneaza si cu impartirea numarului
            console.log(i + " este par");//daca nu ramane rest, inseamna ca numarul este par, afisam in consola.
        } else {
            console.log(i + " nu este par");//daca ramane rest 1(singura varianta), afisam in consola
        }
    }
}
oddIteration(); //invocam functia

//7.2
function oddIteration2() {
    var i = 0;
    while (i < 21) {
        if (i % 2 === 0) {
            console.log(i + " par");
        } else {
            console.log(i + " nu e par");
        }
        i++;
    }
}
oddIteration2();

//8
// Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
//  Scrieti functia in doua variante: while si for

// //ex8.1
function multiplyBy9(){  //am declarat functia;
    var multiplied;      //am declarat variabila multiplied 
    for(i=0; i < 11; i++){//am declarat conditia de iteratie "<11" si iteratia;
         multiplied = i*9;//inmultim pe i cu 9 si stocam rezultatul;
         console.log(i+"*9=" + multiplied);//afisam rezultatul in consola;
    }
}
multiplyBy9();// invocam functia neaparat;

//ex8.2
function multiplyByNine(){
    var multiplied;
    var i=0;
    while(i<11){
        multiplied = i*9;
        console.log(i+"*9="+ multiplied);
        i++; 
    }
}
multiplyByNine();

//ex9
//3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”
// (exemplu: 1 * 0 = 0; 1 * 1 = 1; 1 * 10 = 10 )

function multiplyTable(){
    for(i=1; i<11; i++){
        for(j=0; j<11; j++){
            console.log(i + "*" + j + "=" + i*j);
        }
    }
}
multiplyTable();

// //ex10
// Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
// dezvoltate la tema anterioara

var calificativ = function (nota) {//am modificat return in console.log
    for (nota = 0; nota < 11; nota++) {
        if (nota === 0) {
            console.log("1 din oficiu pentru tine")
        }
        else if (nota <= 3) {
            console.log('Calificativul corespunzator punctajului ' + nota + ' este "E"');
        }
        else if (nota <= 6) {
            console.log('Calificativul corespunzator punctajului ' + nota + ' este "D"');
        }
        else if (nota <= 8) {
            console.log('Calificativul corespunzator punctajului ' + nota + ' este "B"');
        }
        else if (nota === 9) {
            console.log('Calificativul corespunzator punctajului ' + nota + ' este "A"');
        }
        else if (nota === 10) {
            console.log('Calificativul corespunzator punctajului ' + nota + ' este "A+"');
        }
        else { console.log("Bravo superman!"); }
    }
}
calificativ(7);
