// - 18. створити функцію яка створює параграф з текстом. Текст задати через аргумент

let parElement1 = (description: string): void => {
    document.write(`<div>
                <p>${description}</p>
       </div>`)
}

console.log(parElement1('hello'));