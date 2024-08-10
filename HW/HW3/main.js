//-----------------------1--------------------
for (let i = 0; i < 10; i++) {
    document.write("<p>Hello, World!</p>");
}

//-----------------------2--------------------
for (let i = 0; i < 10; i++) {
    document.write(`<p>Hello, World! ${i}</p>`);
}

//-----------------------3--------------------
let i = 0;
while (i < 20) {
    document.write(`<h1>Loop While</h1>`);
    i++;
}

//-----------------------4--------------------
i = 0;
while (i < 20) {
    document.write(`<h1>Loop While ${i}</h1>`);
    i++;
}

//-----------------------5--------------------
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul>");
for (const element of listOfItems) {
    document.write(`
            <li>${element}</li>
    `);
}
document.write("</ul>");

//-----------------------6--------------------
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FrDqxvPKQRqZLAFU4LVJw&w=3840&q=75'
    },
];
for (const element of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${element.title}. Price - ${element.price}</h3>
            <img src="${element.image}" alt="" class="product-image"/>
        </div>  
    `);
}

//-----------------------7--------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write("<br>користувачі зі статусом true:");

for (let i = 0; i < users.length; i++) {
    let element = users[i];
    if (element.status){
        document.write(`<div>Name: <b>${element.name }</b>  Age: <b>${element.age}</b>  Status: <b>${element.status}</b></div>`);
    }

}
document.write("<br>користувачі зі статусом false:");

for (let element of users) {
    if (!element.status){
        document.write(`<div>Name: <b>${element.name }</b>  Age: <b>${element.age}</b>  Status: <b>${element.status}</b></div>`);
    }
}
document.write("<br>користувачі які старші за 30 років:");
for (let element of users) {
    if (element.age>30){
        document.write(`<div>Name: <b>${element.name }</b>  Age: <b>${element.age}</b>  Status: <b>${element.status}</b></div>`);
    }
}
