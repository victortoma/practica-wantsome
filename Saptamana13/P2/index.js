
//ex1
// PRE: create separate module to import fetch function(request) in index.js
//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"
const array = fetch(url)
    .then(response => response.json())
    .then(response => response.filter(data => data.id > 5)
        .map((data) => { return `{names : ${data.username}, city : ${data.address.city}}` }))

console.log(array)

//ex2

const array2 = fetch('https://www.googleapis.com/books/v1/volumes?q=horror')
    .then(response => response.json())
    .then(response => response.items.map(book => book.volumeInfo)
        .filter(book => book.pageCount > 230)
        .filter(book => book.authors.length > 1))

console.log(array2)


//ex1
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log
console.log(
    document.cookie = "name = Vili",
    document.cookie = "profession = developer",
    document.cookie = "age = 33",
    document.cookie = "cookiename1= firstCookie; expires = Mon, 1 Jun 2020 20:00:00 GMT",
    document.cookie = "cookiename2= secondCookie; expires = Mon, 1 Jun 2020 20:00:00 GMT")


//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
localStorage.setItem("background-color", "red");
localStorage.setItem("height", "100px");
const width = localStorage.getItem("width")
const background = localStorage.getItem("background-color");
const height = localStorage.getItem("height");
const div = document.createElement('div');
div.style.width = width
div.style.height = height
div.style.background = background;
document.body.appendChild(div)


//ex3
//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

const urls = "./world.json";
const obj = fetch(urls)
    .then(response => response.json())
    .then(response => JSON.stringify(response))
    .then(response => localStorage.setItem('object', response))

const localObj = localStorage.getItem("object")
const array = JSON.parse(localObj)
console.log(array)
const populateFn = (array) => {
    const body = document.querySelector('body')

    array.forEach(item => {
        const div = document.createElement('iframe')
        div.src = `${item.youtubeVideo}`
        body.appendChild(div);
        return div;
    })
}
populateFn(array)

// ex4

function setCookie(cookieName, cookieValue, daysToExpire) {
    // const date =  Mon, 1 Jun 2020 20:00:00 GMT
    let today = new Date();
    let expire = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + daysToExpire);
    // console.log(expire)  
    return document.cookie = `${cookieName} = ${cookieValue}; expires = ${expire}`;
    
}
function getCookie(cookieName) {
    // access cookie
}
function verifiyCookie() {
    // verify cookie
    // use prompt messages 
    // if cookie doesnt exist use prompt to show message "Hello, please insert your name"
    // if cookie exist show message "Hello {name}"
}
setCookie("oneCookie", "1 dollar", 5)   