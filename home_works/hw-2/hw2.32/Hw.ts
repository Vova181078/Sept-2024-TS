// // 32. #Rbr5kEQ
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers:number[] =  [10,8,-7,55,987,-1011,0,1050,0];

let arrMap:string[] = numbers.map(value => value.toString());
console.log(arrMap);
