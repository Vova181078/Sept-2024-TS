// - 25.  створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// // // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// //
let swap1 = (arr:number[],iSwap1:number[],iSwap2:number[]):number => {
    let i1:number = arr[+iSwap1];
    let i2:number = arr[+iSwap2];
    arr[+iSwap1] = i2;
    arr[+iSwap2] = i1;
    return arr[+iSwap1] && arr[+iSwap2];
}
console.log(swap1([11,22,33,44],[0],[1]));



