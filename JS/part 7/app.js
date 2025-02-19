// let student={
//     name:"Manaswi Rane",
//     maths:40,
//     phy:60,
//     sci:80,
//     getAvg(){
//         let avg=(this.maths+this.phy+this.sci)/3;
//         console.log(`${this.name} average marks is ${avg}`);
//     },

// }
// student.getAvg();
//This object executing current piece of code
//ERROR HANDLING
// console.log("Hello");
// try{
//     console.log(a);
// }
// catch(e){
//     console.log("Error detected");
//     console.log(e);
// }
// console.log("Hello");
// console.log("Hello");
const sum = (a, b) => {
    console.log(a + b);
}
const square = x => {
    console.log(x ** 2);
}
const run=n=>n**3;
const cube = (n) => (n * n * n);
setTimeout(()=>{
    console.log("Hello World")
},4000);
let id=setInterval(()=>{ //executes after every 4 seconds
    console.log("Hello World",id)
},4000)   // clearInterva(id)
clearInterval(2)
//THIS KEYWORD
// arrow function-> lexographical Scope parent ko kisne call kiya hai
// function-> calling object