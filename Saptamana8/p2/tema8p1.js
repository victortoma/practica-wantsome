
// //Ex1
// //Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
// //ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
// const multiply = (a, b) => {
//     if (a === b) {
//         return (a + b) * 5
//     }
//     return a + b;
// }
// console.log(multiply(10, 10));

// // Ex2
// // Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
// // ex testFunction(30, 30) - true 
// // testFunction(15,15) - true
// // testFunction(10, 15) - false
// const checkThirty = (a, b) => a === 30 && b === 30 || a + b === 30;
// console.log(checkThirty(30, 30));

// //Ex3
// //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
// //checkString('JSisAwsome') - JSisAwsome
// //checkString('isEasy') - JSisEasy
// //checkString(null) - JS
// const checkJs = (string) => {
//     let index = string.toLowerCase().indexOf("js");
//     if (index === 0) {
//         return string;
//     } return `JS${string}`;
// }
// console.log(checkJs("JSring"));

// //Ex4
// //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
// //removeDuplicates('aabcdeef') - 'abcdef'
// //removeDuplicates(122334) - 1234
// const removeDuplicates = (string) => {
//     let noDuplicate = '';
//     for (let i = 0; i < string.length; i++) {
//         if (noDuplicate.indexOf(string[i]) !== -1) continue;
//         noDuplicate += string[i]
//     } console.log(noDuplicate);
// }
// removeDuplicates('Ana are mere');

// //Ex5
// // Gasiti cel mai lung string intr-o fraza
// //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
// const findLongestString = (string) => {
//     const oneArray = string.split(' ');
//     const longestString = [''];
//     for (let i = 0; i < oneArray.length; i++) {
//         if (longestString[0].length < oneArray[i].length) {
//             longestString[0] = oneArray[i]
//         }
//     }
//     console.log(longestString)
// }
// findLongestString("Wantsome is awesome everytime");

// //Ex6
// //Scrieti o functie care sa aiba output-ul asta
// // *  
// // * *  
// // * * *  
// // * * * *  
// // * * * * *  
// const star = () => {
//     let a = "*";
//     let result = "";
//     for (i = 0; i < 5; i++) {
//         console.log(result += a);
//     }
// }
// star();

// //ex7
// const negativeNumbers = [];
// const extractNegativeNumbers = (numbers) => {
//     // append any negative numbers found in the numbers array 
//     // into the negativeNumbers array constant variable above
//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             negativeNumbers.push(numbers[i]);
//         }
//     } console.log(negativeNumbers)
// }
// extractNegativeNumbers([1, 2, -5, 4, -6]);

// // ex8
// // Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
// // ex calculate(2, 5, "add") => 7
// // calculate(10, 8, "substract") => 2
// const substract = (a, b) => (a - b);
// const add = (a, b) => (a + b);
// const divide = (a, b) => (a / b);
// const multiPie = (a, b) => (a * b);
// const operators = (num1, num2, meth) => {
//     return meth(num1, num2);
// }
// console.log(operators(8, 2, multiPie));

// //Ex9
// // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// // isDiv(15) => "BOTH"
// // isDiv(9)=> "THREE"
// // isDiv(7)=> 7
// const checkDivide = (num) => {
//     if (num % 3 === 0 && num % 7 === 0) {
//         console.log("Both")
//     } else if (num % 7 === 0 || num % 3 === 0) {
//         console.log(num);
//     } else {
//         console.log("Not")
//     };
// }
// checkDivide(3);

// //Master exercises
// //Ex9 
// // Vreau sa pot afisa data si ziua sub urmatorul format:
// // Azi este : Luni. 
// // Ora este : 20 PM : 30 : 38
// const dayArray = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
// const showDate = () => {
//     let time = new Date();
//     if (time.getHours() < 13) {
//         return `Azi este: ${dayArray[time.getDay()]}
// Ora este: ${time.getHours()} AM : ${time.getMinutes()} : ${time.getSeconds()}`;
//     } return `Azi este: ${dayArray[time.getDay()]}
// Ora este: ${time.getHours()} PM : ${time.getMinutes()} : ${time.getSeconds()}`;
// }
// console.log(showDate());

// //ex10
// // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// // validPin("1234") => true
// // validPin("12345") => false
// // validPin("z23f") => false
// const checkPin = (pin) => (/^([0-9]{4}||\d{6})$/.test(pin));
// console.log(checkPin('123422'));

// // ex11 
// // Folosind regex vreau sa scot toate vocalele dintr-un string
// // removeVowels("Hey I am developer") => "Hy m dvlpr"
// const excludeVowels = (str) => str.match(/[bcdfghjklmnpqrstvwxys]/gi);
// console.log(excludeVowels('omelette du fromage'));

// // ex12
// // Vreau sa am o functie care sa verifice daca un numar este patrat
// // isSquareNumber(-1) => false
// // isSquareNumber(25) => true
// // isSquareNumber(3) => false
// const sqrt = (num) => {
//     let sqrtedNum = Math.sqrt(num);
//     console.log(sqrtedNum);
//     return sqrtedNum % 1 === 0;
// }
// console.log(sqrt(121));

// // ex13
// // Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// // isAnagram("School master", "The class room") => true
// // isAnagram("silent", "listen") => true
// let str1 = "this is one string";
// let str2 = "is this string one";
// const checkStr = (str1, str2) => {
//     let checked1 = str1.split('').sort().join('').trim();
//     let checked2 = str2.split('').sort().join('').trim();
//     return checked1 === checked2;
// }
// console.log(checkStr(str1, str2));

// //13.2
// function anagram(s1, s2){
//     return s1.split("").sort().join("").trim() === s2.split("").sort().join("").trim();
//   }
// console.log(anagram("are  dece", "cede are"));


//p2

//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

//1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
// const getSum = (num) => {
//     let sum = 0;
//     for (i = 1; i < num; i++) {
//         sum += i;
//     } console.log(sum)
// }
// getSum(5);

// //2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
// const longestString = (str) => {
//     const splitStr = str.split(' ');
//     let findLongest = [''];
//     for(i=0; i<splitStr.length; i++){
//         if(findLongest[0].length < splitStr[i].length){
//             findLongest[0]=splitStr[i];
//         }
//     }console.log(findLongest[0]);
// }
// longestString('would this be the longest string?');

// //3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
// const reverserStr = str =>{
//     return str.split('').reverse().join('');
// }
// console.log(reverserStr('Hanah has apples'));

// //4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet

// const replaceChar = str => {
//     for (i = 0; i < str.length; i++) {
//         if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123){
//         str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
//       }
//     }
//     return str;
// }
// console.log(replaceChar('despre'));

// //5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
// // Exemplu: input: 64  ->  output: 1:4
// const convertToTime = num =>{
//     let num1;
//     let num2;
//     num1 = Math.floor(num/60);
//     num2 = num%60;
//     console.log(`${num1} ore si ${num2} minute`)
// }
// convertToTime(250);

// //6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
// const sortStr = str => {
//     return str.split('').sort().join('').trim();
// }
// console.log(sortStr('hanah has many apples'));

//7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false

const checkPlus = str => {
    strSplit = str.split('');
    for (i = 1; i < strSplit.length; i++) {
     console.log(str[i] %2 === 0 && str.charCodeAt(i) == 43)
    }
}
console.log(checkPlus('+a+a'));
//Neterminata