// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylindr(r:number, h:number):number {
    return 2 * Math.PI * r * h;
}

console.log(cylindr(8, 7));