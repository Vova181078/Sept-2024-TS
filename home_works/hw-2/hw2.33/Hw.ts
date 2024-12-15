// / // 33. #5hqyKTfmc
// // - створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
let nums:number[] = [11,21,3];
let ascending:number[] = [11,21,3];
let descending:number[] = [11,21,3];

type SortArray = number[];

function sortNums (array:SortArray,direction:SortArray): any {
    if (+direction === +'ascending') return array.sort((a:number, b:number):number => a - b);
    if (+direction === +'descending') return array.sort((a:number, b:number):number => b - a);

}

console.log(sortNums(nums,ascending));
console.log(sortNums(nums,descending));
