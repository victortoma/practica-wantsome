let quote = document.querySelector('#quote');
let button = document.querySelector('#xhr')
const reqResponse = function () {
    const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
    let request = new XMLHttpRequest();
    request.open('GET', url)
    request.send();
    request.responseType = 'json'

    request.onload = () =>{
        quote.innerHTML = request.response
    }
}

button.addEventListener('click', reqResponse)


// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'