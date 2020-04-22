
// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false
    }];

// const bodyOne = document.getElementsByTagName('body');
// const header1 = document.querySelector('h1')
const paragraphOne = document.createElement('p');
const paragraphTwo = document.createElement('p');
const ul = document.createElement('ul');
document.body.appendChild(ul);
document.body.appendChild(paragraphOne);
document.body.appendChild(paragraphTwo);
let firstBook = [];
let secondBook = [];

const link1 = document.createElement('a');
const link2 = document.createElement('a');
link1.setAttribute('href', 'https://en.wikipedia.org/wiki/The_Power_of_Habit');
link2.setAttribute('href', 'https://www.goodreads.com/book/show/40745.Mindset');
books[0].linkTo = link1;
books[1].linkTo = link2;

const img1 = document.createElement('img');
img1.src = 'https://miro.medium.com/max/500/1*HBijN1xiDa6JFPT6BA4H3g.jpeg'

const img2 = document.createElement('img');
img2.src = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436227012i/40745._UY500_SS500_.jpg'

for (let pos in books[0]) {
    firstBook.push(books[0][pos]);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = books[0][pos];
    li.style.color='green';    
}
ul.lastChild.appendChild(link1);
link1.appendChild(img1);

for (let pos in books[1]) {
    secondBook.push(books[1][pos]);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = books[1][pos];
    li.style.color="red";
}
ul.lastChild.appendChild(link2);
link2.appendChild(img2);

firstBook.pop()
firstBook.pop()
secondBook.pop();
secondBook.pop();
paragraphOne.textContent = firstBook;
paragraphTwo.textContent = secondBook;
