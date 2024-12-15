
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



function sum(arr: number[]): number {
    let count:number = 0;
    for (const arrElement of arr) {
        count = count + arrElement;

    }
    return count;
}

console.log(sum([1,2,10]));
