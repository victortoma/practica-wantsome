//1.
function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//2. Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
//argument
function doubleEachNumber(arr) {
    return arr.map(elem => elem === Number ? elem * 2 : elem)
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala'])); // [4, '5', 200, '100', 'blalblala']

//3.
function getPersonsNames(arr) {
    return arr.map(person => `${person.name}  ${person.surname}`);
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]));
["Angelina Jolie", "Eric Jones"]

//4.
function computeExamPass(arr) {
    return arr.map(student => student.grade > 4 ?
        `${student.name} ${student.surname} has passed the exam` :
        `${student.name} ${student.surname} did't passed the exam`)
}
console.log(computeExamPass([
    {
        name: "Angelina",
        surname: 'Jolie',
        grade: 7
    },
    {
        name: "Eric",
        surname: 'Jones',
        grade: 3
    },
]));
[
    "Angelina Jolie has passed the exam",
    "Eric Jones has not passed the exam"
]

// 5. Implementati functia de mai jos si utilizati
// rezultatul pentru a afisa elementele intr-o pagina
function getPersonsDomElements(arr) {
    arr.forEach(person => {
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.innerHTML = person.name + ' ' + person.surname

        document.body.appendChild(h1)
        h2.innerHTML = person.age
        document.body.appendChild(h2)
    });
}
getPersonsDomElements([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]);
