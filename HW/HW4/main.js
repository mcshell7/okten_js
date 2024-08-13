const PI = 3.14;

// -створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// ----------------- 1 -----------------
function area(a, b) {
    if (a && b > 0) {
        return a*b;
    }
    return console.log('Enter correct value');
}
console.log(`площа прямокутника ${area(2,5)}`);

// створити функцію яка обчислює та повертає площу кола з радіусом r
// ----------------- 2 -----------------
function circleArea(r){
    return r > 0 ? r*r*PI : 0;
}
console.log(`площа кола: ${circleArea(3)}`)


// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// ----------------- 3 -----------------
function cylinderArea(h,r){
    if (h && r > 0){
        return (2*PI*r*r) + 2*PI*r*h;
    }
}
console.log(`Площа повної поверхні циліндра дорівнює: ${cylinderArea(15,6)}`)

// створити функцію яка приймає масив та виводить кожен його елемент
// ----------------- 4 -----------------
function arrayReturn (arr){
    for (const arrElement of arr) {
        console.log('arr elem : ' + arrElement);
    }
}
arrayReturn([1,2,4,5,68,9]);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// ----------------- 5 -----------------
function paragraph(text){
    if (text){
        document.write(`<p>${text}</p>`);
    }
}
paragraph('some text');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// ----------------- 6 -----------------
function li3times(text){
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}
li3times('some text for li elements');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// ----------------- 7 -----------------
function liAnyTimes (text, counter){
    if(counter > 0){
        document.write('<ul>');
        for (let i = 0; i < counter; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>');
    }
}
liAnyTimes('some text ', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// ----------------- 8 -----------------
function arrPrintList (arr){
    if (arr){
        document.write('<ul>');
        for (const arrElement of arr) {
            document.write(`<li>${arrElement}</li>`)
        }
        document.write('</ul>');
    }
}
arrPrintList([1,'string', 4,true]);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// ----------------- 9 -----------------
function arrPrintBlock (arr){
    if (arr){
        for (let i = 0; i < arr.length; i++) {
            document.write(`<hr>`);
            document.write(`<div>${arr[i].id}</div>`);
            document.write(`<div>${arr[i].name}</div>`);
            document.write(`<div>${arr[i].age}</div>`);

        }
    }
}
let arrBlocks = [
    {id: 2, name: 'Ivan', age: 30},
    {id: 3, name: 'Ruslan', age: 20}
]
arrPrintBlock(arrBlocks);

// створити функцію яка повертає найменьше число з масиву
// ----------------- 9 -----------------
function minNumberInArray (arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(`найменьше число з масиву: ${min}`);
}
minNumberInArray([111,22,10,11,12,14,12,11]);
// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// ----------------- 10 -----------------
function sum(arr){
    if(sum){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum +=arr[i];
        }
        console.log(`Sum = ${sum}`);
    }
}
sum([1,2,3,3,5,6]);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// ----------------- 11 -----------------
function swap (arr, index1, index2){
    if (swap){
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === index1){
                temp = arr[i];
                arr[i] = arr[index2];
                arr[index2] = temp;
            }
        }
        console.log(arr);
    }
}
swap([11,22,33,44],0,1);

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// ----------------- 12 -----------------
function exchange(sumUAH,arr){
    if (sumUAH && arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sumUAH / arr[i].value;
            console.log(`sum in UAH is : ${sum} in ${arr[i].currency}`);
        }
    }
}
exchange(10000, [{currency: 'USD', value: '25'},{currency: 'EUR', value: 42}]);