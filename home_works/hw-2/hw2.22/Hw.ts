
// - 22. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

interface IUser1 {
    id: number;
    name: string;
    age: number;
}

let arrayUsersKey1 = (users:IUser1[]):void => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
arrayUsersKey1([
    {id: 1,name: 'okten', age: 28},
    {id: 2, name: 'okten', age: 18},
    {id: 3, name: 'okten', age: 30},

]);


