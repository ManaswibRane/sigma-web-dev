//FUNCTIONS
// function print1to5(){
//     for(let i=1;i<6;i++){
//       console.log(i);
//     }
//   }
//   print1to5();
// let num=Math.ceil((Math.random()*100)/17);
// function dice(){
//     let num=Math.ceil((Math.random()*100)/17);
// //   console.log(n);
// return num;
// }
// console.log(dice());
//CONCATENATION OF ALL ELEMENTS OF ARRAY
// function concat(a,l){
//    if(l==0){
//     return;
//    }
//    return concat(a,l-1)+a[l-2];
// }
// let arr=["apple","mango","banana","strawberry"];
// console.log(concat(arr,4))
//SCOPE
/*
specificity important
 function--->local
 block
 global
 lexical--->inner outer function


HOISTING
*/
// function hoisting(){
//     function inner()
//     {console.log(x+y);}
       


//     let x=5,y=10;
//     inner();
// }
// hoisting();
// let sum=function (a,b){
//     return a+b;
// }
// sum(1,2);
/*
 HIGHER ORDER FUNCTIONS---->  DOES ONE/BOTH 1. TAKES FUNCTION AS AN ARGUMENT 2. RETURNS A FUNCTION
 let greetings=function(func,s){
    for(let i=0;i<5;i++){
      console.log(func(),s);
    }
}
function funct(){
    return "Hello";
}
greetings(funct," World".trim())
*/
// function oddOrEvenFactory(request){
//     if(request="odd"){
//         let odd=function(n){
//             console.log(!(n%2==0));
//         }
//         return  odd;
//     }
//     if(request="even"){
//         let even=function(n){
//             console.log(!(n%2==0));
//         }
//         return  even;
//     }
// }
/*
 let x="even"
undefined
let func=oddOrEvenFactory(x)
undefined
func
ƒ (n){
            console.log(!(n%2==0));
        }
func(3)
app.js:64 true
undefined
*/
/*
 
Methods
*/
// let obj={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     },
//     pow(a,b){
//         return a**b;
//     }
// }
//window.alert("Helloworld")
// const student={
//     name:"Manaswi Rane",
//     age:18,
//     isPass:true,
       

// }


