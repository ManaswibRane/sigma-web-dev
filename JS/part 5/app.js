/*  Object literals
  used to store keyed collections and complex entities
  property->(key,value) pair
  object are a collection of properties

*/
// let student={
//     names: "Manaswi Rane",
//     rollNo: 61,
//     isEmployed:false,
//     favColors: ["red","blue"],
//     1:"num",
// }
// let accDetails={
//    username:"Manaswi Rane"

// }
// delete student.favColors;
//  syntax for accessing 
//  student[names] / student.name
//not ordered
// student
// {names: 'Manaswi Rane', rollNo: 61, isEmployed: false}
// student.name
// undefined
//delete obj.key
//NESTED OBJECT
// let info={
//     aman:{
//         grade:"AA",
//         rollNo: 51

//     },
//     shradha:{
//         grade:"AA",
//         rollNo: 51

//     },
//     nihira:{
//         grade:"AA",
//         rollNo: 51

//     }
// }
/*info
{aman: {…}, shradha: {…}, nihira: {…}}aman: {grade: 'AA', rollNo: 51}nihira: {grade: 'AA', rollNo: 51}shradha: {grade: 'AA', rollNo: 51}[[Prototype]]: Object
info.aman
{grade: 'AA', rollNo: 51}
info.aman.grade="BB"
'BB'
info.aman]
VM529:1 Uncaught SyntaxError: Unexpected token ']'Understand this errorAI
info.aman

{grade: 'BB', rollNo: 51  
 */
//ARRAY OF OBJECTS
// let arr = [
//     {
//        name:"Aman",
//        grade:"AA",
//        isPass:true,
//     },
//     {
//         name:"Shraddha",
//         grade:"DD",
//         isPass:false,
//     }


// ]
//MATH OBJECT
/* 
Math.PI 
Math.E 
Math.abs(n)
Math.power(a,b)
Math.floor()
Math.random()
*/
//generate a randomnumber between 1 and 100 and between 1 and 5
// let a=Math.random()*100;
// let b=Math.random()*5;
// console.log(a,b);


