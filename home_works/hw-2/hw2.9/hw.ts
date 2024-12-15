class IUser {
    constructor(public id:number, public name:string, public age:number) {

    }
}

function arrayUsersKey(users: IUser[]):void {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
arrayUsersKey([
    {id:1, name:'okten',age:28},
    {id:2, name:'okten',age:18},
    {id:3, name:'okten',age:30},

]);
