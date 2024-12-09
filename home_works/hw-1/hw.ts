// Взяти дз №1-3 з модуля по js та типізувати їх.
// Завдання можна копіювати з виконаних дз по js
// та впроваджувати типізацію безпосередньо в них,
// замінивши розширення файлів.


//// 1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  // Вивести кожну змінну за допомогою: console.log
 let x1:string = 'hello';
 let x2:string = 'owu';
 let x3:string = 'com';
 let x4:string = 'ua';
 let x5:number = 1;
 let x6:number = 10;
 let x7:number = -999;
 let x8:number = 123;
 let x9:number = 3.14;
 let x10:number = 2.7;
 let x11:number = 16;
 let x12:boolean = true;
 let x13:boolean = false;

 console.log(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13);
//
//  // 2  Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
 let firstName:string = 'Volodymyr';
 let middleName:string = 'Bohdanovych';
 let lastName:string = 'Frankiv';

 let person:string = firstName +' '+ middleName  +' '+  lastName;
 console.log(person);
//
// // 3  За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
 let a:number = 100;
 let b:string = '100';
 let c:boolean = true;
//
 console.log(typeof a);
 console.log(typeof b);
 console.log(typeof c);
//
//
// // 4 Додаткове для тих хто цікавився prompt`oм
// //  - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
//
let result1:string = prompt('name');
let result2:string = prompt('middlename');
let result3:string = prompt('age');
//
 console.log(result1);
 console.log(result2);
 console.log(result3);