// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//-----------------------------1-------------------------------




function addElement () {
    let block = document.createElement('div');

    block.classList.add('wrap','collapse','alpha','beta');
    block.style.backgroundColor = 'green';
    block.style.color = 'white';
    block.innerHTML = '<h1>Header </h1>';
    document.body.appendChild(block);
    document.body.appendChild(block.cloneNode(true));
}
addElement();


//     #OPLI89c9G
// - Є масив:
//     
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//---------------------------------2------------------------------

let arr = ['Main','Products','About us','Contacts'];
const createUl = (arr) => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.innerText = arr[i];
        ul.appendChild(li);
    }
}
createUl(arr);

// #jeBqHV525U5
// - Є масив

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//---------------------3----------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const createBlock = (arr) => {
    const wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('wrap');

    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement('div');
        const title = document.createElement('div');
        const monthDuration = document.createElement('div');
        title.innerText = arr[i].title;
        monthDuration.innerText = arr[i].monthDuration;

        item.classList.add('item');
        title.classList.add('title');
        monthDuration.classList.add('monthDuration');

        wrap.appendChild(item);
        item.append(title,monthDuration);
    }
}
createBlock(coursesAndDurationArray);

//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//-------------------------4---------------------------------


const courseDuration = (arr) => {
    const items = document.createElement('div');
    document.body.appendChild(items);
    items.classList.add('items');

    for (const arrItem of arr) {
        const itemElement = document.createElement('div');
        const heading = document.createElement('h2');
        const description = document.createElement('p');
        itemElement.classList.add('item');
        heading.classList.add('heading');
        description.classList.add('description');

        heading.innerText = arrItem.title;
        description.innerText = arrItem.monthDuration;

        itemElement.append(heading,description);
        items.appendChild(itemElement);
    }
}
courseDuration(coursesAndDurationArray);