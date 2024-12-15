// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function listsArray(text:string,items:string | number):void {

    document.write(`<ul>`);
    for (let i:number = 0; i < +items; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listsArray('okten', 5);