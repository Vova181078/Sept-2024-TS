// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // // // Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// // //

function exchange(sumUAN:number, currencyValues:string,exchangeCurrency:string ):number {
    let chooseCurency: string | number;
    for (let item of currencyValues) {
        if (item === exchangeCurrency) {
            chooseCurency = item;
        }
    }
        return sumUAN;



}
