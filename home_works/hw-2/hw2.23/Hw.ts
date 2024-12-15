// - 23. створити функцію яка повертає найменьше число з масиву

let f1:number[] = [15,25,-6,4,78,0];

let minArray1 = (array:number[]):number => {
    let min:number = array[0];
    for (const arrayElement of array) {
        if (arrayElement < min) {
            min = arrayElement
        }

    }
    return min;
}

console.log(minArray1(f1));
