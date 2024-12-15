// // 34. #yo06d74c1C
// // - є масив
//


interface ICourseDuration{title: string, monthDuration: number, id?:number}


let coursesAndDurationArray:ICourseDuration[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// //  -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a:ICourseDuration, b:ICourseDuration):number => {
    return b.monthDuration - a.monthDuration
})
console.log(coursesAndDurationArray);

// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCourse = coursesAndDurationArray.filter(value => value.monthDuration > 5);

console.log(filterCourse);

// //  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapCourse = coursesAndDurationArray.map((value:ICourseDuration, index:number):ICourseDuration => {
    value.id = index + 1;
    return value;

});
console.log(mapCourse);
