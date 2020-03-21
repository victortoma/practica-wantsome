//1
function isString(exam){
return (typeof exam === "string");
}
console.log(isString(4));


//2
function isBlank(str) {
return (0 === str.length);
}
console.log(isBlank(""));

//3
function array(ex){
  var result = ex.split("");
  return result;
}
console.log(array("sacadat"));

//4
function abr(ex, dex){
  var result = ex + " " + dex.slice(0, 1) + ".";
  return result;
}
console.log(abr("John", "Mayer"));

//5
function capitalize(ex){
    var result = ex[0].toUpperCase() + ex.slice(1);
    return result;
  }
  console.log(capitalize("capitala"));

//6

function cut(par){
  var result = par.replace(par.substr(0, 4), "");
  return result;
}
console.log(cut("mancare"));

//7

function upper(str, position){
    return str[position] === str[position].toUpperCase();
  }
  console.log(upper("DaasSooS", 5));
  
//8
  
function insert(str, value, index){
    return str.substr(0, index) + value + str.substr(index);
  }
  console.log(insert("am sa merg munte ", " la", 10))

//9 
function replaceFirst(string1, str2){
    return string1.replace(str2, "");
    
  }
  console.log(replaceFirst("Ana are mere, dar ana are si pere", "ana"));  

//10

function compare(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase();
    
  }
  console.log(compare("ABC", "Abc"));

  //12

  function uncapitalize(str1){
    return str1[0].toLowerCase() + str1.substr(1);
  }
  console.log(uncapitalize("Daca merge, e ok"));

