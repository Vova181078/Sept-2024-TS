// // // // Взяти дз №4-6 з модуля по js та типізувати їх.
// // // // Зверніть особливу увагу на те,
// // // // що функції тепер щось повертають і це треба типізувати!
// // // // Завдання можна копіювати з виконаних дз по js
// // // // та впроваджувати типізацію безпосередньо в них,
// // // // замінивши розширення файлів.
// // //
// // // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// // //
// // // function square(a, b) {
// // //     return a * b
// // // }
// // //
// // // console.log(square(5, 4));
// // //
// // // // 2. #ETGAxbEn8l
// // // // - створити функцію яка обчислює та повертає площу кола з радіусом r
// // //
// // // function myRadius(radius) {
// // //     return Math.PI * radius * radius;
// // // }
// // //
// // // console.log(myRadius(5, 5));
// // //
// // // // 3. #Mbiz5K4yFe7
// // // // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// // //
// // // function cylindr(r, h) {
// // //     return 2 * Math.PI * r * h;
// // // }
// // //
// // // console.log(cylindr(8, 7));
// // //
// // // // 4. #SIdMd0hQ
// // // // - створити функцію яка приймає масив та виводить кожен його елемент
// // //
// // // function arrayElements(array) {
// // //     for (item of array) {
// // //         console.log(item);
// // //
// // //     }
// // // }
// // //
// // //
// // // // 5. #59g0IsA
// // // // - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// // //
// // // function parElement(description) {
// // //     document.write(`<div>
// // //                 <p>${description}</p>
// // //        </div>`)
// // // }
// // //
// // // parElement('hello');
// // //
// // // // 6. #hOL6126
// // // // - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// // //
// // // function listArray(items) {
// // //     document.write(`<ul>
// // //             <li>${items}</li>
// // //             <li>${items}</li>
// // //             <li>${items}</li>
// // //
// // //
// // //          </ul>`)
// // // }
// // //
// // // listArray('Olya');
// // //
// // // // 7. #0Kxco1edSN
// // // // - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// // //
// // // function listsArray(text,items) {
// // //
// // //     document.write(`<ul>`);
// // //     for (let i = 0; i < items; i++) {
// // //         document.write(`<li>${text}</li>`);
// // //     }
// // //     document.write(`</ul>`);
// // // }
// // //
// // // listsArray('okten', 5);
// // //
// // // // 8. #gEFoxMMO
// // // // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// // //
// // // function fooArray(array) {
// // //     document.write(`<ul>`);
// // //     for (const item of array) {
// // //         document.write(`<li>${item}</li>`)
// // //
// // //     }
// // //     document.write(`</ul>`);
// // // }
// // // fooArray([654,65,69,7,'iuhud',';ook;l']);
// // //
// // //
// // // // 9. #bovDJDTIjt
// // // // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// // //
// // // function arrayUsersKey(users) {
// // //     for (const user of users) {
// // //         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
// // //
// // //     }
// // // }
// // // arrayUsersKey([
// // //     {id:1, name:'okten',age:28},
// // //     {id:2, name:'okten',age:18},
// // //     {id:3, name:'okten',age:30},
// // //
// // // ]);
// // //
// // //
// // //
// // // //10. #pghbnSB
// // // // - створити функцію яка повертає найменьше число з масиву
// // //
// // // let f = [15,25,-6,4,78,0];
// // //
// // // function minArray(array) {
// // //     let min = array[0];
// // //     for (const arrayElement of array) {
// // //         if (arrayElement < min) {
// // //             min = arrayElement
// // //         }
// // //
// // //     }
// // //     return min;
// // // }
// // //
// // // console.log(minArray(f));
// // //
// // //
// // // // 11. #EKRNVPM
// // // // - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// // //
// // //
// // //
// // // function sum(arr) {
// // //     let count = 0;
// // //     for (const arrElement of arr) {
// // //         count = count + arrElement;
// // //
// // //     }
// // //     return count;
// // // }
// // //
// // // console.log(sum([1,2,10]));
// // //
// // // // 12. #kpsbSQCt2Lf
// // // // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // // // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// // //
// // // function swap(arr,iSwap1,iSwap2) {
// // //     let i1 = arr[iSwap1];
// // //     let i2 = arr[iSwap2];
// // //     arr[iSwap1] = i2;
// // //     arr[iSwap2] = i1;
// // //     return arr;
// // // }
// // // swap([11,22,33,44],0,1);
// // //
// // // // 13. #mkGDenYnNjn
// // // // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // // // Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// // //
// // // function exchange(sumUAN,currencyValues,exchangeCurrency ) {
// // //     let chooseCurency;
// // //     for (let item of currencyValues) {
// // //         if (item.currency === exchangeCurrency) {
// // //             chooseCurency = item;
// // //         }
// // //     }
// // //     result = sumUAN / chooseCurency.value;
// // //     return result;
// // //
// // // }
// // // console.log(exchange(10000, [{currency: 'USD', value: 25}, {
// // //     currency: 'EUR',
// // //     value: 42
// // // }], 'USD'));
// //
// //
// // // #I2XsG6f
// // // - 14. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// //
// // let square =(a,b) => a * b;
// //
// // console.log(square(5, 5));
// //
// //
// // // #ETGAxbEn8l
// // // - 15. створити функцію яка обчислює та повертає площу кола з радіусом r
// //
// // let myRadius = (radius) => Math.PI * radius * radius;
// //
// //
// // console.log(myRadius(5, 5));
// //
// // // #Mbiz5K4yFe7
// // // - 16. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// //
// // let cylindr = (r, h) => 2 * Math.PI * r * h;
// //
// // console.log(cylindr(4,8));
// //
// // // #SIdMd0hQ
// // // - 17. створити функцію яка приймає масив та виводить кожен його елемент
// //
// // let arrayElements =(array) => {
// //     for (item of array) {
// //         console.log(item);
// //
// //     }
// // }
// //
// //
// // // #59g0IsA
// // // - 18. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// //
// // let parElement = (description) => {
// //     document.write(`<div>
// //                 <p>${description}</p>
// //        </div>`)
// // }
// //
// // parElement('hello');
// //
// //
// // // #hOL6126
// // // - 19. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// //
// // let listArray = (items) => {
// //     document.write(`<ul>
// //             <li>${items}</li>
// //             <li>${items}</li>
// //             <li>${items}</li>
// //
// //
// //          </ul>`)
// // }
// //
// // listArray('Olya');
// //
// //
// // // #0Kxco1edSN
// // // - 20 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// //
// // let listsArray = (text,items) => {
// //
// //     document.write(`<ul>`);
// //     for (let i = 0; i < items; i++) {
// //         document.write(`<li>${text}</li>`);
// //     }
// //     document.write(`</ul>`);
// // }
// //
// // listsArray('okten', 5);
// //
// // // #gEFoxMMO
// // // - 21. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// //
// // let fooArray = (array) => {
// //     document.write(`<ul>`);
// //     for (const item of array) {
// //         document.write(`<li>${item}</li>`)
// //
// //     }
// //     document.write(`</ul>`);
// // }
// // fooArray([654,65,69,7,'iuhud',';ook;l']);
// //
// // // #bovDJDTIjt
// // // - 22. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// //
// // let arrayUsersKey = (users) => {
// //     for (const user of users) {
// //         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
// //
// //     }
// // }
// // arrayUsersKey([
// //     {id:1, name:'okten',age:28},
// //     {id:2, name:'okten',age:18},
// //     {id:3, name:'okten',age:30},
// //
// // ]);
// //
// //
// //
// // // #pghbnSB
// // // - 23. створити функцію яка повертає найменьше число з масиву
// //
// // let f = [15,25,-6,4,78,0];
// //
// // let minArray = (array) => {
// //     let min = array[0];
// //     for (const arrayElement of array) {
// //         if (arrayElement < min) {
// //             min = arrayElement
// //         }
// //
// //     }
// //     return min;
// // }
// //
// // console.log(minArray(f));
// //
// //
// // // #EKRNVPM
// // // - 24.  створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// //
// // let sum = (arr) => {
// //     let count = 0;
// //     for (const arrElement of arr) {
// //         count = count + arrElement;
// //
// //     }
// //     return count;
// // }
// //
// // console.log(sum([1,2,10]));
// //
// // // #kpsbSQCt2Lf
// // // - 25.  створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// // // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// //
// // let swap = (arr,iSwap1,iSwap2) => {
// //     let i1 = arr[iSwap1];
// //     let i2 = arr[iSwap2];
// //     arr[iSwap1] = i2;
// //     arr[iSwap2] = i1;
// //     return arr;
// // }
// // swap([11,22,33,44],0,1);
// //
// //
// //
// // // #mkGDenYnNjn
// // // - 26.  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// //
// // let exchange = (sumUAN,currencyValues,exchangeCurrency ) => {
// //     let chooseCurency;
// //     for (let item of currencyValues) {
// //         if (item.currency === exchangeCurrency) {
// //             chooseCurency = item;
// //         }
// //     }
// //     return sumUAN / chooseCurency.value;
// //
// //
// // }
// // console.log(exchange(10000, [{currency: 'USD', value: 25}, {
// //     currency: 'USD',
// //     value: 30
// // }], 'USD'));
//
//
// // 27. #dFeorS3m7u
// // - Знайти та вивести довижину настипних стрінгових значень
//
// let str1 = 'hello world';
// console.log(str1.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 =  'javascript is cool';
// console.log(str3.length);
//
// // 28. #8lld9HMxXWB
// // - Перевести до великого регістру наступні стрінгові значення
// let up1= 'hello world';
//
// let up2 = 'lorem ipsum';
//
// let up3 = 'javascript is cool';
//
// console.log(up1.toUpperCase(),up2.toUpperCase(),up3.toUpperCase());
//
// // 29. #ClDsAm7xba7
// // - Перевести до нижнього регістру настипні стрінгові значення
//
// let low1 = 'HELLO WORLD';
//
// let low2 = 'LOREM IPSUM';
//
// let low3 = 'JAVASCRIPT IS COOL';
//
// console.log(low1.toLowerCase(),low2.toLowerCase(),low3.toLowerCase());
//
// // 30. #0b89BkYZwu
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let strDirty = ' dirty string   ';
// console.log(strDirty.trim());
//
// // 31. #bfoJuse4ZzP
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray(arr) {
//     let arrays = arr.split(' ');
//     return arrays;
//
// }
//
// let arr = (stringToarray(str));
// console.log(arr);
//
//
// // 32. #Rbr5kEQ
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let numbers =  [10,8,-7,55,987,-1011,0,1050,0];
//
// let arrMap = numbers.map(value => {
//     return value.toString();
// });
// console.log(arrMap);
//
// // 33. #5hqyKTfmc
// // - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let ascending = [11,21,3];
// let descending = [11,21,3];
//
// function sortNums (array,direction) {
//     if (direction === 'ascending') return array.sort((a, b) => a - b);
//     if (direction === 'descending') return array.sort((a, b) => b - a);
//
// }
//
// console.log(sortNums(nums,ascending));
// console.log(sortNums(nums,descending));
//
// // 34. #yo06d74c1C
// // - є масив
// //  -- відсортувати його за спаданням за monthDuration
// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// })
// console.log(coursesAndDurationArray);
//
// let filterCourse = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// console.log(filterCourse);
//
// let mapCourse = coursesAndDurationArray.map((value, index) => {
//     value.id = index + 1;
//     return value;
//
// });
// console.log(mapCourse);
//
// // 35.  #bolvdlhP
// //  описати колоду карт (від 6 до туза без джокерів)
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //     value: '', // '6'-'10', 'ace','jack','queen','king'
// //     color:'', // 'red','black'
// // }
//
// let suits = ['spade', 'diamond','heart', 'clubs'];
// let values =  ['6','7','8','9','10', 'ace','jack','queen','king'];
//
// let cards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = ({cardSuit: suit, value: value});
//         if (suit === 'heart' || suit === 'diamont') {
//             card.color = 'red';
//         }else {
//             card.color = 'black';
//         }
//         cards.push(card);
//
//     }
//
// }
// console.log(cards);
//
// //  - знайти піковий туз
//
// // console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'))
//
// //  - всі червоні карти
//
// // console.log(cards.find(card => card.color === 'red'));
//
//
// //  - всі шістки
//
// // console.log(cards.find(card => card.value === '6'));
//
// //  - всі буби
//
// // console.log(cards.find(card => card.cardSuit === 'diamont'));
//
// //  - всі трефи від 9 та більше
//
//
//
// // console.log(cards.find(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));
//
// // 36. #EP5I1UUzAX
// // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//
// // cards.reduce(accum, card) => {
// //     switch (card,cardSuit) {
// //         case 'spade':
// //             accum.spades.push(card)
// //             break;
// //         case 'diamont':
// //             accum.diamonds.push(card)
// //             break;
// //         case 'heart':
// //             accum.hearts.push(card)
// //             break;
// //         case 'club':
// //             accum.clubs.push(card)
// //             break;
// //
// //     }
// //     return accum:
// //   {
// //
// //     spades:[],
// //     diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // };
// //
// // console.log(reduce);
//
// // 37. #4LJn7zBx
// // взяти з arrays.js масив coursesArray
// // --написати пошук всіх об'єктів, в яких в modules є sass
// // --написати пошук всіх об'єктів, в яких в modules є docker
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(course => {
//     return  course.modules.includes('saas')
// }));
//
// console.log(coursesArray.filter(course => {
//     return  course.modules.includes('docker')
// }));
//
//
//
