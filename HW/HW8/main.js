// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//--------------------------1--------------------------
const myObject = {
    a: 2,
    b: 3,
    greet() {
        console.log("Hello!");
    },
    sum (a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
    sayGoodbye() {
        console.log("Goodbye!");
    }
};

function deepObjCopy(obj) {
    if (obj){
        let temp = [];
        let keys = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                const funcClone = obj[key].bind({});
                temp.push(funcClone);
                keys.push(key);
            }
        }
        console.log(keys);
        console.log(temp);
        let clone = JSON.parse(JSON.stringify(obj));

        for (let i = 0; i < temp.length; i++) {
            clone[keys[i]] = temp[i];
        }

        return clone;
    }
}
console.log(deepObjCopy(myObject))





// #iz6emEsP2BA
// - є масив

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let temp = [];
coursesAndDurationArray.map((item, i) => {
   temp.push({id: i, ...item});
});
coursesAndDurationArray = temp;
console.log(coursesAndDurationArray);
