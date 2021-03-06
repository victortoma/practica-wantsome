
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

const multiply = (a, b) => {
   if (a === b) {
      return (a + b) * 5
   }
   return a + b;
}
console.log(multiply(10, 10));

// Ex2
// Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
// ex testFunction(30, 30) - true 
// testFunction(15,15) - true
// testFunction(10, 15) - false

const checkThirty = (a, b) => a === 30 && b === 30 || a + b === 30;
console.log(checkThirty(30, 30));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

const checkJs = (string) => {
   let index = string.toLowerCase().indexOf("js");
   if (index === 0) {
      return string;
   } return `JS${string}`;
}
console.log(checkJs("JSring"));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const removeDuplicates = (string) => {
   let noDuplicate = '';
   for (let i = 0; i < string.length; i++) {
      if (noDuplicate.indexOf(string[i]) !== -1) continue;
      noDuplicate += string[i]
   } console.log(noDuplicate);
}
removeDuplicates('Ana are mere');

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = (string) => {
   const oneArray = string.split(' ');
   const longestString = [''];
   for (let i = 0; i < oneArray.length; i++) {
      if (longestString[0].length < oneArray[i].length) {
         longestString[0] = oneArray[i]
      }
   }
   console.log(longestString)
}
findLongestString("Wantsome is awesome everytime");

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const star = () => {
   let a = "*";
   let result = "";
   for (i = 0; i < 5; i++) {
      console.log(result += a);
   }
}
star();

//ex7
const negativeNumbers = [];
const extractNegativeNumbers = (numbers) => {
   // append any negative numbers found in the numbers array 
   // into the negativeNumbers array constant variable above
   for (i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
         negativeNumbers.push(numbers[i]);
      }
   } console.log(negativeNumbers)
}
extractNegativeNumbers([1, 2, -5, 4, -6]);

// ex8
// Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
// ex calculate(2, 5, "add") => 7
// calculate(10, 8, "substract") => 2

const substract = (a, b) => (a - b);
const add = (a, b) => (a + b);
const divide = (a, b) => (a / b);
const multiPie = (a, b) => (a * b);
const operators = (num1, num2, meth) => {
   return meth(num1, num2);
}
console.log(operators(8, 2, multiPie));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const checkDivide = (num) => {
   if (num % 3 === 0 && num % 7 === 0) {
      console.log("Both")
   } else if (num % 7 === 0 || num % 3 === 0) {
      console.log(num);
   } else {
      console.log("Not")
   };
}
checkDivide(3);

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

const dayArray = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
const showDate = () => {
   let time = new Date();
   if (time.getHours() < 13) {
      return `Azi este: ${dayArray[time.getDay()]}
Ora este: ${time.getHours()} AM : ${time.getMinutes()} : ${time.getSeconds()}`;
   } return `Azi este: ${dayArray[time.getDay()]}
Ora este: ${time.getHours()} PM : ${time.getMinutes()} : ${time.getSeconds()}`;
}
console.log(showDate());

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const checkPin = (pin) => (/^([0-9]{4}||\d{6})$/.test(pin));
console.log(checkPin('123422'));

// ex11 
// Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

const excludeVowels = (str) => str.match(/[bcdfghjklmnpqrstvwxys]/gi);
console.log(excludeVowels('omelette du fromage'));

// ex12
// Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
const sqrt = (num) => {
   let sqrtedNum = Math.sqrt(num);
   console.log(sqrtedNum);
   return sqrtedNum % 1 === 0;
}
console.log(sqrt(121));

// ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

let str1 = "this is one string";
let str2 = "is this string one";
const checkStr = (str1, str2) => {
   let checked1 = str1.split('').sort().join('').trim();
   let checked2 = str2.split('').sort().join('').trim();
   return checked1 === checked2;
}
console.log(checkStr(str1, str2));

//13.2
function anagram(s1, s2) {
   return s1.split("").sort().join("").trim() === s2.split("").sort().join("").trim();
}
console.log(anagram("are  dece", "cede are"));


//p2

//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

//1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

const getSum = (num) => {
   let sum = 0;
   for (i = 1; i < num; i++) {
      sum += i;
   } console.log(sum)
}
getSum(5);

// //2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

const longestString = (str) => {
   const splitStr = str.split(' ');
   let findLongest = [''];
   for (i = 0; i < splitStr.length; i++) {
      if (findLongest[0].length < splitStr[i].length) {
         findLongest[0] = splitStr[i];
      }
   } console.log(findLongest[0]);
}
longestString('would this be the longest word?');

//3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'

const reverserStr = str => {
   return str.split('').reverse().join('');
}
console.log(reverserStr('Hanah has apples'));

// //4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet

const replaceChar = str => {
   for (i = 0; i < str.length; i++) {
      if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
         str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
      }
   }
   return str;
}
console.log(replaceChar('despre'));

// //5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
// // Exemplu: input: 64  ->  output: 1:4

const convertToTime = num => {
   let hours = Math.floor(num / 60);
   let minutes = num % 60;
   console.log(`${hours} ore si ${minutes} minute`)
}
convertToTime(250);

// //6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic

const sortStr = str => {
   return str.split('').sort().join('').trim();
}
console.log(sortStr('hanah has many apples'));

   // 7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
   // Exemplu: input: "+a+b+c+"   ->   output: true
   // Exemply: input: "+ab+c+d+"  ->   output: false

let strOne = "+a+b+a+b+c+";
const checkPlus = str => {
   const strSplit = str.split('');
   console.log(strSplit.length)
   // console.log(strSplit)
   for (let i = 0; i < strSplit.length; i += 2) {
      console.log(i)
      let g = i+1;
      console.log(g)
         if (!strSplit[g].match(/[a-z]/i)) {
      return false;
   }
   if (str.charCodeAt(i) === 43) continue;
      else { return false }
   }
   return true;
}
console.log(checkPlus(strOne))


// let checkStringPlusFormat = str => {
//     const characters = str.split(""); // impart string-ul intr-un array litere ca sa il pot itera
//     for (let i = 1; i < characters.length - 1; i += 2) { // avand in vedere ca un string corect e de forma +a+a+a+, inseamna ca trebuie sa merg din 2 in 2 incepand cu pozitia 1 din array
//       console.log(`Ma aflu la pozitia ${i}, characters[i-1] este '${characters[i-1]}', characters[i] este '${characters[i]}',  characters[i+1] este '${characters[i+1]}'`);
  
//       if (!characters[i-1].match(/[a-z]/i)) { // daca pe pozitia curenta nu se afla o litera, oprim executia
//         return false;
//       }
  
//       if (characters[i - 1] === "+" && characters[i + 1] === "+") { // pentru fiecare pozitie, daca inainte si dupa avem +, mergem mai departe
//         console.log(`----> Caracterul '${characters[i]}' de pe pozitia ${i} a indeplinit conditia de a avea '+' inainte si dupa, deci continuam cu urmatorul caracter \n\n\n`);
//         continue;
//       } else {
//         console.log(`----> Caracterul '${characters[i]}' de pe pozitia ${i} nu a indeplinit conditia de a avea + inainte si dupa, deci oprim continuarea executiei \n\n\n`);
//         return false; // daca conditia anterioara nu s-a indeplinit, adica nu avem + inainte si dupa pozitia curenta, returnam direct fals si iesim din functie, nu mai are rost sa continuam 
//       } 
//     }
  
  
//     console.log(`Toate caracterele au indeplinit conditia de a avea '+' inainte si dupa, deci string-ul este formatat corect`)
//     // daca for-ul s-a terminat, inseamna ca toate caracterele au trecut conditia din for, inseamna ca string-ul e corect, deci putem returna true
//     return true;
//   }
  
//   // const firstTest = checkStringPlusFormat('++a+a+');
//   // console.log(firstTest);
  
//   // const secondTest = checkStringPlusFormat('+adsdsdsds+a+a+');
//   // console.log(secondTest);
  
//   const thirdTest = checkStringPlusFormat('+a+a+a+');
//   console.log(thirdTest);
