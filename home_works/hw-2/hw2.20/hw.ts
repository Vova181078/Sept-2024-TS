
// // створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// //
let listsArray1 = (text:string,items:number):void => {

    document.write(`<ul>`);
    for (let i:number = 0; i < +items; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listsArray1('okten', 5);
