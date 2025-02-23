// let arr=[1,2,3,4];
// arr.forEach((el)=>{
//     console.log(el);
// });
// let print=function(el){
//        console.log(el);
// }
// arr.forEach(print)
// let arr=[
//     {name:"Manaswi Rane",age:10,}
//     , {name:"Manaswi",age:12,}
//     , {name:" Rane",age:18,}
// ]
// arr.forEach((el)=>{
//    console.log(el);
//    console.log(el.name);
//    console.log(el.age);
// });
// 
// let arr=[1,2,3,4];
// let double=arr.map((el)=>{
//     return 2*el;
// })
// console.log(double);
// let brr=[1,2,3,4,5,7,6];
// let x=brr.filter(function(el){
//     return el%2==0;
// })
// //logical and
// let all=[2,4,6];
// let isAllEven=all.every(
//     function(el){
//         return el%2==0;
//     }
// )
// console.log(x);
// console.log(isAllEven)
// let arr=[1,3,5];
// let x=arr.some((ele)=>{
//     return ele%2==0;
// })
// console.log(x)
//arr.reduce(accumulator,element)
// let arr=[1,2,3,4,5];
// let ans=arr.reduce(function(acc,ele){
//     console.log(acc);
//      return acc*ele;
    
// });
// console.log(arr,ans);
//max using reduce
// let arr=[1,234,3,4,55,6,7];
// let max=arr.reduce((max,el)=>{
//      if(el>max){
//         return el;

//      }
//      else{
//         return max;
//      }
// })
// console.log(max);\
//spread
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let x=Math.max(...arr)
// let y=Math.min(...arr)
// console.log(x,y)
// console.log(..."Apna college")
// console.log(...arr)
// let char=[..."Hello"];
// let even=[2,4,6,8];
// let odd=[1,3,5,7];
// let all=[...odd,...even];
// console.log(all)
// console.log(char)
// let data={
//     name:"Manaswi Rane",
//     pass:"Word",

// }
// let obj={...odd};
// console.log(obj)
// let newData={...data}
// console.log(newData)
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("You gave us ",args[i]);
//     }
// }
// sum(1,2,3,4,5);
// let names=["Manaswi","Nihira","Maitry"];
// let [winner,runnerup,...others]=names;
// console.log(winner,runnerup,others)
let user1={
    name:"Manaswi Rane",
    age:18,
    isAdult:true,
}
let {name,age:hidden=0}=user1;
console.log(name,hidden)