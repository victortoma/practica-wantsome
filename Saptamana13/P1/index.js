// 1
//Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const returnPromise = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num)
        } else {
            reject(num)
        }
    })
}

returnPromise(20)
    .then((result) => {
        console.log(`the ${result} is greater then 10 `)
    })
    .catch((result) => {
        console.log(`the ${result} is less then 10`)
    })

//2
// Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
//sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
//Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const returnPromise2 = (string) => {
    return new Promise((resolve, reject) => {
        if (string.toLowerCase().includes('promise')) {
            resolve(string);
        } else {
            reject(string);  
        }
    })
}

returnPromise2('Promise is ok')
    .then((result) => {
        console.log(`${result} it includes the word`)
    })
    .catch((result) => {
        console.log(`${result} it doesn't includes the word`)
    })
//3
// Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const returnPromise3 = function (string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (string) === 'string') {
                resolve(string);
            } reject(string);
        }, 3000)
    })
}

returnPromise3('string')
    .then((result) => {
        console.log(`${result.toUpperCase()}`)
    })
    .catch((result) => {
        console.log(`${result}`);
    })

 //4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.


const numArray = ['one', 'two', "three", 1]

const capitalize = function (array) {
    return new Promise((resolve, reject) => {
        if (array.map((item) => typeof (item) === 'string' ? item.toUpperCase() : item)) {
            resolve(array);
        }
        reject(array);
    })
}
console.log(capitalize(numArray))

const sort = function (array) {
    return new Promise((resolve, reject) => {

        array.sort((item) => {
            if (typeof (item) === 'string') {
                resolve(array);
            }
            reject(array)
        })
    })
}


console.log(sort(numArray)
    .then((result) => {
        return result;
    })
    .then((result) => capitalize(result))
    .catch((result) => {
        console.log(`${result}`);
    })
)

// 5
// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (
// cel putin 3 )

// un promise getdata, trebuie facut req catre server, si onload, status 200, daca nu error
// https://api.exchangeratesapi.io/latest?base=EUR


function get(url) {
    //return new promise
    return new Promise(function (resolve, reject) {
        //do the usual xhr stuff;
        var requestData = new XMLHttpRequest;
        requestData.open('GET', url);

        requestData.onload = function () {
            //This is called even on 404 etc;
            //so check the status;
            if (requestData.status == 200) {
                //resolve the promise with the response text;
                resolve(requestData.response);
            } else {
                //otherwise reject with the status text
                //which will hopefully be a meaningful error
                reject(Error(requestData.statusText));
            }
        }
        //Handle network errors
        requestData.onerror = function () {
            reject(Error('Network Error'))
        }
        //make the requestDatauest;
        requestData.send();
    })
}

get('https://api.exchangeratesapi.io/latest?base=EUR').then(function (response) {
    console.log('succes', response);
}, function (error) {
    console.log("failed", error)
})

get('https://m.guitarparty.com/developers/api-docs/api-resources/songs/').then(function (response) {
    console.log('succes', response);
    document.body.innerHTML = response

}, function (error) {
    console.log('failed', error)
})

get('https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json').then(function (response) {
    console.log('OK!', response)
    document.body.innerHTML = response
}, function (error) {
    console.log('failed', error)
}
);

get('https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search').then(function(respone){
    console.log("Succes", response)
}, function(error){
    console.log('ERROR!', error)
})




