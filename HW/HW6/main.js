const HL = 'hello world';
const LI = 'lorem ipsum';
const JIC = 'javascript is cool';
let stringsArray = [HL, LI, JIC];


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// -----------------------1---------------------------------

const printStringLength = arr => {
    let lengthArray = [];
    for (const arrElement of arr) {
        if (typeof arrElement === 'string') {
            lengthArray.push(arrElement.length);
        }
    }
    return lengthArray;
}
console.log(`length : ${printStringLength(stringsArray)}`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// -----------------------2---------------------------------
let toUppercase = arr => {
    let tempArray = [];
    for (const arrElement of arr) {
        if (typeof arrElement === 'string') {
            tempArray.push(arrElement.toUpperCase());
        }
    }
    return tempArray;
}
console.log(toUppercase(stringsArray));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// -----------------------3---------------------------------

const UpperHW = 'HELLO WORLD';
const UpperLI = 'LOREM IPSUM';
const UpperJIC = 'JAVASCRIPT IS COOL';
const lowerCaseHW = UpperHW.toLowerCase();
const lowerCaseLI = UpperLI.toLowerCase();
const lowerCaseJIC = UpperJIC.toLowerCase();
console.log(`Lower case : ${lowerCaseHW}`);
console.log(`Lower case : ${lowerCaseLI}`);
console.log(`Lower case : ${lowerCaseJIC}`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// -----------------------4---------------------------------

let strDirty = ' dirty string   ';
let strClean = strDirty.trim();
console.log(strClean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// -----------------------4---------------------------------

let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    if (str) {
        let newArr = str.split(' ');
        return newArr;
    }
}
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// -----------------------5---------------------------------
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numbersToString = numbers.map(toStr = item => item.toString());
console.log(numbersToString);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// -----------------------6---------------------------------
let nums = [11, 21, 3];

let sortNums = (array, direction) => {

}

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// -----------------------7---------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((item1, item2) => {
    return item2.monthDuration - item1.monthDuration;
});
console.log(coursesAndDurationArray);


let arrFiltered = coursesAndDurationArray.filter(function (item) {
    return item.monthDuration > 5;
})


console.log(arrFiltered);

let addId = coursesAndDurationArray.map((item, index) => {
    item.id = index + 1;
    return item;
})
console.log(addId);


// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// -----------------------7---------------------------------

let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']
let cardColors = ['red', 'black'];
let cards = [];

for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        cards.push({cardSuit: cardSuit, cardValue: cardValue})
    }
}
for (const card of cards) {
    if (card.cardSuit === 'spade' || card.cardSuit === 'clubs') {
        card.color = 'black';
    }
    if (card.cardSuit === 'diamond' || card.cardSuit === 'heart') {
        card.color = 'red';
    }
}

let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace');
console.log(spadeAce);

let allSix = cards.filter(card => card.cardValue === '6');
console.log(allSix);

let allRed = cards.filter(card => card.color === 'red');
console.log(allRed);

let allDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log(allDiamond);

let allClubs = cards.filter(card => (card.cardValue !== '6'
    && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9') && card.cardSuit === 'clubs');
console.log(allClubs);


console.log(cards);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceTest = cards.reduce((accumulator, card) => {
    switch (card) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduceTest);

// #4LJn7zBxx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sassSearch = (arr, name) => {
    let found = [];
    for (const item of arr) {
        item.modules.map(moduleItem => {
            if (moduleItem === name){
                found.push(item);
            }
        })
    }
    return found;
}
console.log(sassSearch(coursesArray, 'sass'));
console.log(sassSearch(coursesArray, 'docker'));






