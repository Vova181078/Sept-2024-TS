// 19. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listArray1 = (items:string):void => {
    document.write(`<ul>
            <li>${items}</li>
            <li>${items}</li>
            <li>${items}</li>


         </ul>`)
}

listArray1('Olya');
