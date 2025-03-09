// function hello(){
//     console.log("Hello");
// }
//  Let h1=document.QuerySelector("h1")
// function changeColor(col,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=col;
//         if(nextColor) nextColor();
//     },delay)
   
  
    
// }
// changeColor("red",2000,() =>{
//     changeColor("green",2000,()=>{
//         changeColor("blue",2000);
//     });
// })
// function saveToDB(data,success,faliure){
//     let ispeed=Math.floor(Math.random()*10+1);
//     console.log(ispeed);
//     if(ispeed>4){
//         success();
       
//     }else{
//         faliure();
       
//     }
// }
// //callback hell
// saveToDB("data1",()=>{
//     console.log("sucess : Data saved");
//     saveToDB("data2",()=>{
//         console.log("sucess2 : Data2 saved");
//     },()=>{
//         console.log("faliure2 : Weak connection")
//     });
// },()=>{
//     console.log("faliure : Weak connection")
// })
//promises object complete faliure pending
//resolve and reject
// function saveToDB(data){
//     return new Promise( (resolve,reject)=>{
//         let ispeed=Math.floor( Math.random()*10+1);
//         if(ispeed>4){
//             resolve("success data was saved");
//             console.log(data);
//         }
//         else{
//             reject("faliure rejected");
//         }
//     })
// }
// saveToDB("Hello World").then((res)=>{
//     console.log(res)
//     return saveToDB("Hello World2")
// })
// .then((res2)=>{
//     console.log(res2)
// })
//   .catch((e)=>{
//     console.log(e)
// })
// let h1=document.querySelector("h1")
// function changeColor(col,delay){
  
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color=col;
//             resolve("Changed sucessfully")
//          },delay)
        
//     })
    
// }
// let request=changeColor("red",2000).then((r)=>{
//      console.log(r);
//      return changeColor("blue",2000);

// })
// .then((r)=>{
//     console.log(r);
//     return changeColor("green",2000);

// })
// .catch((e)=>{
//    console.log(e);
// })
// console.log(request)
// async function greet(greeting) {
//     console.log(greeting);
//     abc.abc();
//     // throw "some random error";
//     return greeting;
// }
// greet("Hello World")
// .then(()=>{
//     console.log("Promise was resolved")
// })
// .catch(()=>{
//     throw "some random error"
// })
// function random(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let x=Math.floor(Math.random()*10)/5;
//             if(x<3){
//                 reject("Promise rejected")
//             }
//             let n=Math.floor(Math.random()*10)+1;
//             console.log(n)
//             resolve("Number printed")
//         },1000)
       
//     })
   
   
// } 


// async function print(){
//    try{ await random();
//     await random();
//     await random();}
//     catch(e){
//         console.log(e);
//     }
   
   

// }
print()