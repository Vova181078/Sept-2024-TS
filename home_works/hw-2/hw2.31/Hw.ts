

// // 31. #bfoJuse4ZzP
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr:string[] = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str:string = 'Ревуть воли як ясла повні';

function stringToarray(arr:string):string[] {
    let arrays:string[] = arr.split(',');
    return arrays;

}

let arr:string[] = (stringToarray('Ревуть воли як ясла повні'));
console.log(arr);

//