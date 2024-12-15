
// - 24.  створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum1 = (arr:number[]):number => {
    let count:number = 0;
    for (const arrElement of arr) {
        count = count + arrElement;

    }
    return count;
}

console.log(sum1([1,2,10]));
