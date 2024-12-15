
// - 21. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let fooArray1  = (item: number[] | string[], array:number[] | string[]):void => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`);
}
fooArray1([654,65,69,7],['iuhud',';ook;l']);
