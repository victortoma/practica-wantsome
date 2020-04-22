
// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

const theBody = document.querySelector('body');
theBody.style.fontFamily = 'Arial, sans-serif';
const spans = document.querySelectorAll('span');
// console.log(spans);   
spans[0].textContent = 'Vili';
spans[1].textContent = 'ApaDeIzvor';
spans[2].textContent = "Iasi";
for (let i = 0; i < spans.length; i++) {
    spans[i].classList.add('listItem');
}
const styling = document.createElement('style');
styling.setAttribute('type', 'text/css');
styling.innerHTML = '.listItem{color:red;}';
const theHead = document.querySelector('head');
theHead.appendChild(styling);
const image = document.createElement('img');
image.src = "https://www.cbdpriser.se/wp-content/uploads/2018/10/peaceful-pictures-of-nature-small-waterfall-in-peaceful-nature-4239411-1280x1024-all-for.jpg"
const theHeader = document.querySelector('h1');
theHeader.appendChild(image);
image.style.width = '400px';



