function isString(exam){
return (typeof exam === "string");
}
console.log(isString(4));



function isBlank(str) {
return (0 === str.length);
}
console.log(isBlank(""));


function array(ex){
  var result = ex.split("");
  return result;
}
console.log(array("sacadat"));


function abr(ex, dex){
  var result = ex + " " + dex.slice(0, 1) + ".";
  return result;
}
console.log(abr("John", "Mayer"));

function capitalize(ex){
    var result = ex[0].toUpperCase() + ex.slice(1);
    return result;
  }
  console.log(capitalize("capitala"));

function cut(par){
  var result = par.replace(par.substr(0, 4), "");
  return result;
}
console.log(cut("mancare"));

