// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function listArray(items:string):void {
    document.write(`<ul>
            <li>${items}</li>
            <li>${items}</li>
            <li>${items}</li>


         </ul>`)
}

listArray('Olya');