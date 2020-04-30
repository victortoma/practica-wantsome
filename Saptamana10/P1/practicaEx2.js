//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"
const btn = document.querySelector('#exButton');
const postTheGossip = () => {
    const name = document.querySelector('#name').value; 
    const adjective = document.querySelector("#adjective").value;       
    const randomWord  = document.querySelector("#random-word").value;
    alert (`sunt ${name} si am ${adjective} ${randomWord}`)
}
// btn.addEventListener('click', postTheGossip)
