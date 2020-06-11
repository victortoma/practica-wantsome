// function clos1(){
//     let a = 2;
//     function clos2(){
//          return a++;
//     }
//     return clos2;
// }

// const x = clos1();

const jsonArray = [
    {
        photo: "./images/iphone7Front.jpg",
        review: 679,
        name: "Samsung iPhone 7, 32GB, Black",
        memory: "32",
        price: 1540,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 279,
        name: "Samsung iPhone 7, 64GB, Black",
        memory: "64",
        price: 1640,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 379,
        name: "Samsung iPhone 7, 128GB, Black",
        memory: "128",
        price: 790,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 379,
        name: "Samsung iPhone 7, 256GB, Black",
        memory: "256",
        price: 890,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 479,
        name: "Samsung iPhone 7, 64GB, Black",
        memory: "64",
        price: 990,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 579,
        name: "Apple iPhone 7, 128GB, Black",
        memory: "128",
        price: 1090,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 679,
        name: "Apple iPhone 7, 32GB, Black",
        memory: "32",
        price: 1190,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 779,
        name: "Apple iPhone 7, 32GB, Black",
        memory: "32",
        price: 1290,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 879,
        name: "Huawei iPhone 7, 128GB, Black",
        memory: "128",
        price: 1390,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 979,
        name: "Huawei iPhone 7, 64GB, Black",
        memory: "64",
        price: 1490,

    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 1079,
        name: "Huawei iPhone 7, 32GB, Black",
        memory: "32",
        price: 1590,
    },
    {
        photo: "./images/iphone7Front.jpg",
        review: 1179,
        name: "Apple iPhone 7, 32GB, Black",
        memory: "32",
        price: 1690,
    },
]


const displayProducts = document.querySelector('#displayProducts');
const search = document.querySelector('#search')
const select = document.querySelector('#select')

const imgFn = (obj) => {
    const img = document.createElement('img');
    img.src = obj.photo;
    img.style.width = '90%';
    return img;
}

const ratingFn = (obj) => {
    let div = document.createElement('div');
    div.innerHTML = obj.review;
    div.classList.add("phoneRating");
    return div;
}

const descriptionFn = (obj) => {
    let div = document.createElement('div');
    div.innerHTML = obj.name;
    div.classList.add("phoneDescription");
    return div;
}

const priceFn = (obj) => {
    let div = document.createElement('div');
    div.innerHTML = obj.price;
    div.classList.add("phonePrice");
    return div;
}

const buttonFn = () => {
    let buttonDiv = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = "Add to Cart"
    buttonDiv.appendChild(button);
    buttonDiv.classList.add("buyPhone");
    button.addEventListener('click', (() => console.log('Added to cart')))
    return buttonDiv;
}

//filter

const filterPrice = (array) => {
    return array.sort((a, b) => a.price - b.price)
}
const filterPriceDescending = (array) => {
    return array.sort((a, b) => b.price - a.price)
}

const filterRating = (array) => {
    return array.filter((item) => item.price < 900)
}


let newArray = [] // array care preia itemele din jsonArray

const populateDataInDom = (array) => {
    
    newArray = []
    let productDiv;
    for (let product of array) {
        
        productDiv = document.createElement('div');
        productDiv.classList.add("productDiv");
        displayProducts.appendChild(productDiv);
        
        productDiv.appendChild(imgFn(product));
        productDiv.appendChild(ratingFn(product));
        productDiv.appendChild(descriptionFn(product));
        productDiv.appendChild(priceFn(product));
        productDiv.appendChild(buttonFn());
        newArray.push(product)
    }
    // newArray = populatedArray.map(item => item)
    return newArray;
};

populateDataInDom(jsonArray)

const removeDataFromDom = () => [...document.querySelectorAll(".productDiv")].forEach(product => product.remove())

const searchFunction = searchText => {

    let newArray = jsonArray.filter((item) => {
        // console.log(item)
        const regex = new RegExp(`^${searchText}`, 'gi')
        return item.name.match(regex)

    })
    console.log(newArray, "this is newArray")
    removeDataFromDom()
    if (newArray.length === 0) return populateDataInDom(jsonArray.map(item)) // modificat
     populateDataInDom(newArray)
    return newArray// adaugat
}

let memoryArray = []

const checkedFunction = () => {

    console.log(newArray, "inside Check" )

    // daca e checked fa / daca e unchecked
    // searchFunction("")
    if (memoryArray = []) { 
        //  newArray = [...jsonArray]
        removeDataFromDom()
        populateDataInDom(jsonArray)
    }

    memoryArray = []
    memoryInputSelector.forEach((item) => {
        if (item.checked) { //forEach
            memoryArray.push(item.name)
            console.log(memoryArray)
            removeDataFromDom()
        }
    })
     populateDataInDom(filterMemory(...memoryArray))
     
    return newArray
}

const filterMemory = (param1, param2, param3, param4, param5) => {
    return newArray.filter(item =>
        item.memory === param1
        || item.memory === param2
        || item.memory === param3
        || item.memory === param4
        || item.memory === param5
    )
}

const sortBy = () => {

    if (select.value === "priceAscending") {//switch
        removeDataFromDom()
        populateDataInDom(filterPrice(newArray))
    }

    else if (select.value === "priceDescending") {
        removeDataFromDom()
        populateDataInDom(filterPriceDescending(newArray))
    }

    else if (select.value === "relevance") {
        console.log('ho')
    }
}

select.addEventListener('change', sortBy)
search.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        searchFunction(search.value)
        search.value = ""
        return true;
    }
    return false;
})

const memoryInputSelector = document.querySelectorAll("#memoryFilter > label >  input[type=checkbox]")

console.log(newArray)
// console.log(memoryArray);

memory = document.querySelector("#memoryFilter");
memory.addEventListener('change', checkedFunction);

