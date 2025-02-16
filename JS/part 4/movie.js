// let favMovie="Chaava";

// do{
//     let userGuess=prompt("Enter my favorite movie");
//     if(userGuess===favMovie){
//         alert("Good job");
//         break;
        
//     }
//    else if(userGuess==="quit"){
//         alert("Better luck next time");
//         break;
        

//     }else{
//         alert("Try again");
//     }

// }while(1);
// let fruits=["Apple","Mango","Banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }
// let n="Manasswi Rane";
// for(let char of n){
//     console.log(char);
// }
// let fruits=[["apple","Banana"],["strawberry","kiwi"]];
// for(let list of fruits){
//     for(let fruit of list){
//         console.log(fruit);
//         for(let nm of fruit){
//             console.log(nm);
//         }
//     }
// }
let list=[];
let task=prompt("Enter an operation");
while(task!=="quit"){
  
switch(task){
    case "add":
        let x=prompt("Add a task");
        list.push(task);
        break;
    case "delete":

        if(list.length){
            list.pop();
           
        }else{
            alert("Invalid operation");
           
        }    
        break;
    case "view":
        console.log(list);
        break;
    case "quit":
        break;        
}
task=prompt("Enter an operation");
}