// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//-------------------------1----------------------
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
for (let i = 0; i < 10; i++) {
    users[i] = new User(i + 7, `user ${i}`, `surname ${i + 1}`, `email ${i + 1}`, `phone ${i + 1}`);
}
// console.log(users);
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//-------------------------2----------------------
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsersById = users.sort((user1, user2) => user1.id - user2.id);
console.log(sortedUsersById);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


let clinetsArr = [
    new Client(1, 'Taras', 'Shevchenko', 'email', 'phone', ['order1', 'order2']),
    new Client(2, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3']),
    new Client(3, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2']),
    new Client(4, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3', 'order6', 'order3', 'order6', 'order3', 'order6']),
    new Client(5, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3', 'order6', 'order3', 'order6']),
    new Client(6, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2']),
    new Client(7, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3', 'order6', 'order3', 'order6']),
    new Client(8, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3', 'order6']),
    new Client(9, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2', 'order3', 'order6']),
    new Client(10, 'Taras', 'Taras', 'email', 'phone', ['order1', 'order2']),
]


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
function orderSorting(first, second) {
    if (Array.isArray(first.order) && Array.isArray(second.order)) {
        if (first.order.length > 0 && second.order.length > 0) {
            return first.order.length - second.order.length;
        }
    }
}

let sortedByOrders = clinetsArr.sort(orderSorting);
console.log(sortedByOrders);


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, brand, year, speed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.speed = speed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    this.info = function () {
        for (const item in this) {
            console.log(item + ' : ' + this[item]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.speed = this.speed + newSpeed;
        }
    }
    this.changeYear = function (newValue) {
        if (newValue > 1870 && newValue < 2026)
            this.year = newValue;
    }
    this.addDriver = function (newObj) {
        if (newObj) {
            this.driver = newObj;
        }
    }

}

let newCar = new Car('Q7', 'Audi', 2020, 240, '3.0');
// console.log(newCar);
console.log(newCar.brand);
console.log(newCar.model);
console.log(newCar.year);
console.log(newCar.speed);
console.log(newCar.engineCapacity);

console.log(newCar.drive);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar {
    constructor(model, brand, year, speed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.speed = speed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };

    info() {
        for (const item in this) {
            console.log(item + ' : ' + this[item]);
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.speed = this.speed + newSpeed;
        }
    }

    changeYear(newValue) {
        if (newValue > 1870 && newValue < 2026)
            this.year = newValue;
    }

    addDriver = function (newObj) {
        if (newObj) {
            this.driver = newObj;
        }
    }

}

let classCarObj = new ClassCar('Q7', 'Audi', 2020, 240, '3.0');
console.log(classCarObj);
console.log(classCarObj.brand);
console.log(classCarObj.model);
console.log(classCarObj.year);
console.log(classCarObj.speed);
console.log(classCarObj.engineCapacity);


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }


}
let PopelushkaArray = [
    new Popelushka('Anastassia', 28, 7),
    new Popelushka('Olga', 21, 7),
    new Popelushka('Anna', 22, 8),
    new Popelushka('Alina', 23, 6),
    new Popelushka('Kristina', 22, 7),
    new Popelushka('Mila', 24, 9),
    new Popelushka('Victoria', 22, 6),
    new Popelushka('Sasha', 21, 7),
    new Popelushka('Milana', 20, 6),
    new Popelushka('Ivanka', 26, 8),
];


let prince = new Popelushka('Anna', 22, 8);
prince.shoeFound = 8;
console.log(prince);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const arr = this;
    for (const arrItem of arr) {
        callback(arrItem);
    }
};

[1,2,3].myForEach((item) => console.log(item));


Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const argument of this) {
        if (callback(argument)){
            arr.push(argument);
        }
    }
    return arr;
}


const myFilterRes = PopelushkaArray.myFilter((item) => item.age > 21);
console.log(myFilterRes);



