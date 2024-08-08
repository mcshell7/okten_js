// ------------------task 1------------------
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(myArray);

// ------------------task 2------------------
const basicBook1 = {
    title: 'The Lord of the Rings',
    pageCount: 999,
    genre: 'Fantasy'
};

const basicBook2 = {
    title: 'Rich Dad, Poor Dad',
    pageCount: 359,
    genre: 'Financial'
};

const basicBook3 = {
    title: 'The Arabian Nights',
    pageCount: 700,
    genre: 'Fantasy'
};
console.log(basicBook1);
console.log(basicBook2);
console.log(basicBook3);


// ------------------task 3------------------
const book1 = {
    title: 'Atomic Habits',
    pageCount: 250,
    genre: 'Self-Help',
    author: ['James Clear', 56]
};
const book2 = {
    title: ' Pride and Prejudice',
    pageCount: 350,
    genre: 'Philosophy',
    author: ['Jane Austen', 56]
};
const book3 = {
    title: ' To Kill a Mockingbird',
    pageCount: 250,
    genre: 'Philosophy',
    author: ['Harper Lee', 56]
};
console.log(book1);
console.log(book2);
console.log(book3);

// ------------------task 4------------------
const users = [
    {name: 'Bogdan', username: 'bogdan777', password: 'easyPassword'},
    {name: 'Andriy', username: 'Andriy777', password: 'easyPassword2'},
    {name: 'Anton', username: 'Anton7r', password: 'easyPassword3'},
    {name: 'Andriy', username: 'Andriy777', password: 'easyPassword4'},
    {name: 'Evgenii', username: 'Evgenii777', password: 'easyPassword5'},
    {name: 'Olya', username: 'Olya777', password: 'easyPassword6'},
    {name: 'Alina', username: 'Alina777', password: 'easyPassword7'},
    {name: 'Nastya', username: 'Nastya777', password: 'easyPassword8'},
    {name: 'Masha', username: 'Masha777', password: 'easyPassword9'},
    {name: 'Vadim', username: 'Vadim777', password: 'easyPassword10'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// ------------------task 5------------------

const oneWeekWeather = [
    {morningTemp: 10, duringTheDayTemp: 20, eveningTemp: 16},
    {morningTemp: 14, duringTheDayTemp: 25, eveningTemp: 20},
    {morningTemp: 13, duringTheDayTemp: 23, eveningTemp: 15},
    {morningTemp: 12, duringTheDayTemp: 26, eveningTemp: 19},
    {morningTemp: 11, duringTheDayTemp: 22, eveningTemp: 16},
    {morningTemp: 9, duringTheDayTemp: 20, eveningTemp: 13},
    {morningTemp: 8, duringTheDayTemp: 17, eveningTemp: 14},
];
console.log(oneWeekWeather);

// ------------------task 5------------------
let x = 10;
x = -10;
x = 0;
if (x !== 0) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// -----------------task 6------------------
let time = 20;

if( time > 0 && time < 15 ){
    console.log(time + ' - перша четверть');
} else if (time > 15 && time <= 30){
    console.log(time + ' - друга четверть');
} else if (time > 30 && time <=45){
    console.log(time + ' - третя четверть');
} else if (time > 45 && time < 60){
    console.log(time + ' - четверта четверть');
}

// -----------------task 7------------------
let day = 21;
if( day > 0 && day <= 10 ){
    console.log(day + ' - перша декадa');
} else if (day > 10 && day <= 20){
    console.log(day + ' - друга декадa');
} else if (day > 20 && day <=31){
    console.log(day + ' - третя декадa');
}

// -----------------task 8------------------
// let schedule = prompt('Enter you day: '); uncomment to check this task
// switch (schedule){
//     case '1':
//         console.log('Today is Monday');
//         break;
//     case '2':
//         console.log('Today is Tuesday');
//         break;
//     case '3':
//         console.log('Today is Wednesday');
//         break;
//     case '4':
//         console.log('Today is Thursday');
//         break;
//     case '5':
//         console.log('Today is Friday');
//         break;
//     case '6':
//         console.log('Today is Saturday');
//         break;
//     case '7':
//         console.log('Today is Sunday');
//         break;
// }

// -----------------task 9------------------
// let someNumber1 = prompt('enter your number');
// let someNumber2 = prompt('enter your number');
//
// if (someNumber1 > someNumber2){
//     console.log('first number is higher : ' + someNumber1 + ' > ' + someNumber2);
// } else if(someNumber2 > someNumber1) {
//     console.log('second number is higher : ' + someNumber2 + ' > ' + someNumber1);
// } else if (someNumber2 === someNumber1){
//     console.log('these numbers are equals : ' + someNumber1 + ' = ' + someNumber2);
// }

// -----------------task 10------------------
let x1 = 0;
if (x1){
    console.log('x is : ' + x1);
}else {
    x1 = 'default';
    console.log('x is false: ' + x1);
}
// -----------------task 11------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5 ){
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5 ){
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5 ){
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5 ){
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5 ){
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5 ){
    console.log('Super');
}
