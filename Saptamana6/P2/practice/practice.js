// ex1
function greatestBetween(numb1, numb2) {
    if (numb1 > numb2) {
        console.log("Numarul mai mare este " + numb1);
    }
    else {
        console.log("Numarul mai mare este " + numb2);
    }
}
greatestBetween(5, 6);

// ex2

var helloWorldLang = function (numb1) {
    if (numb1 === "en") {
        console.log("Hellow");
    }
    else if (numb1 === "ro") {
        console.log("salut");
    }
    else if (numb1 === "China") {
        console.log("???");
    }
    else {
        console.log("Hi");
    }   
}

helloWorldLang("China");

function hello(lang) {
        switch (lang) {
            case "en": console.log("Hi");
                break;
            case "ro": console.log("salut");
                break;
            case "china": console.log("???");
                break;
            default: console.log("hello");

    }
}
hello("ads");


// ex3 

function pluralizeWord(animal, number) {
    if (animal === "sheep") {
        console.log(number + " " + animal);
        return;
    }

    if (animal === "goose") {
        console.log(number + " geese");
        return;
    }
    if
        (number > 1) {
        console.log(number + " " + animal + "s");
    }

    else {
        console.log(number + animal);
    }
}
// pluralizeWord("sheep", 1);
// pluralizeWord("dog", 2);
// pluralizeWord("elephant", 34)
// pluralizeWord("goose", 2);
pluralizeWord("sheep", 3);

//ex4

function taxesFor(salary){
    if(salary >= 100000){
      console.log("tax is " + salary * 0.4);
    }
      else if(salary >= 50000){
      console.log("tax is " + salary * .35);
    }
    else if(salary < 50000){
      console.log("tax is " + salary * 0 );
    }
    else{
      console.log("");
  }}
  taxesFor("asd");

//   ex5.1

function tester(points){
  if(points > 90 ){
    return "AA";
  }
  else if(points > 80){
    return "AB";
  }
  
  else if(points > 70){
    return "BB";
  }
    else if(points > 60){
    return "BC";
  }
    else if(points > 50){
    return "CC";
  }
    else if(points > 40){
      return "CD";
  }
    else if(points > 30){
    return "DD";
  }
    else if(points <= 30){
    return "FF"
  }
}
console.log(tester(91))

//ex 5.2
function tester2(points){
    if(points > 90 ){
      return "AA";
    }
    else if(points >= 81){
      return "AB";
    }
    
    else if(points >= 71){
      return "BB";
    }
      else if(points >= 61){
      return "BC";
    }
      else if(points >= 51){
      return "CC";
    }
      else if(points >= 41){
        return "CD";
    }
      else if(points >= 31){
      return "DD";
    }
      else if(points < 31){
      return "FF"
    }
  }
  console.log(tester2(30))

//ex5.3 !!

function tester3(points){
    if(points <= 30){
      return "FF";
    }
    else if(points <= 40 ){
      return "DD";
    }
      else if(points <= 50 ){
      return "CD";
    }
      else if(points <= 60){
      return "CC";
    }
      else if(points <= 70 ){
      return "BC";
    }
      else if(points <= 80 ){
      return "BB";
    }
      else if(points <= 90){
      return "AB";
    }
      else if(points > 90){
      return "AA";
    }
  }
  console.log(tester3(90))
  
  //ex6.1

  function checkDate(date){
    var ziua = new Date(date);
    if (ziua.getDay() == 6 || ziua.getDay() == 0)
    {
    return "weekend";}
    else{
        return "not weekend";
    }
  }
  console.log(checkDate("mar 22, 2020"));

//ex6.2

var ziua = new Date("Mar 22, 2020");
if (ziua.getDay() == 6 || ziua.getDay() == 0){
console.log("weekend")}
else{
console.log("not weekend");
}


function example(){
  let a = 2;
  function example2(b){
   let result =  a*b;
   a++;
   return result;
  }
  return example2;
}
let fn2 = example();

console.log(fn2(1));
console.log(fn2(2));
console.log(fn2(3));

// function example(){
//     let a = 2;
//     function example2(b){
//     a++; 
//     return  a*b;
//     }
//     return example2;
//   }
  
//   console.log(example()(3));
// //   console.log(fn2(2));
// //   console.log(fn2(3));