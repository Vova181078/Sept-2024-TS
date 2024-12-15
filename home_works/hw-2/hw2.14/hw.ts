// - 14. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

type AddSquare = (a: number,b: number) => number;

let square1: AddSquare = (a:number, b:number):number => a * b;

console.log(square1(5, 5));