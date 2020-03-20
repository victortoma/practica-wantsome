// function greatestBetween(param1, param2){
//   if(param1 > param2){
//     console.log("Numarul mai mare este " + param1);
//   }
//   else{
//     console.log("Numarul mai mare este " + param2);
//   }
// }
// greatestBetween(5,6);

// var helloWorldLang = function(param1){
//   if(param1 === "en"){
//     console.log("Hellow");
//   }
//     else if(param1 === "ro"){
//       console.log("salut");
//     }
//   else if(param1 === "China"){
//     console.log("???");
//   }
//   else{
//     console.log("Hi");
//   }
//   }
  
// helloWorldLang("China");

function hello(lang){
    switch(lang){
      case "en": console.log("Hi");
        break;
      case "ro": console.log("salut");
        break;
      case "china": console.log("???");
        break;
      default: console.log("hello");
      
    }}
    hello("ads");

    function pluralizeWord(param1, param2){
        if (param1 === "sheep"){
          console.log(param2 + " " + param1);
          return;
        }
        
        if (param1 === "goose"){
          console.log(param2 + " geese");
          return;
        }
          if(param2>1){ 
          console.log(param2 + " " + param1 + "s");
        }
        
        else{
          console.log(param2 + param1);
        }
      }
      // pluralizeWord("sheep", 1);
      // pluralizeWord("dog", 2);
      // pluralizeWord("elephant", 34)
      // pluralizeWord("goose", 2);
      pluralizeWord("sheep", 3);
      