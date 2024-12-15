// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function parElement(description:string):void {
    document.write(`<div>
                <p>${description}</p>
       </div>`)
}

parElement('hello');