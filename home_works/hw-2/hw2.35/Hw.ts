//  // 35.  #bolvdlhP
// //  описати колоду карт (від 6 до туза без джокерів)
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //     value: '', // '6'-'10', 'ace','jack','queen','king'
// //     color:'', // 'red','black'
// // }
//
// let suits:string[] = ['spade', 'diamond','heart', 'clubs'];
// let values:string[] =  ['6','7','8','9','10', 'ace','jack','queen','king'];
// let color:string[] =  [ 'red','black'];
//
// let cards:string[] = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = ({cardSuit: suit, values: value});
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         }else {
//             card.color = 'black';
//         }
//         cards.push(card);
//
//     }
//
// }
// console.log(cards);

// //  - знайти піковий туз
//
// // console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'))
//
// //  - всі червоні карти
//
// // console.log(cards.find(card => card.color === 'red'));
//
//
// //  - всі шістки
//
// // console.log(cards.find(card => card.value === '6'));
//
// //  - всі буби
//
// // console.log(cards.find(card => card.cardSuit === 'diamond'));
//
// //  - всі трефи від 9 та більше
//
//
//
// // console.log(cards.find(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));
//