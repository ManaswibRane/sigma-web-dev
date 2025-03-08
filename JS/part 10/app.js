let btn=document.querySelector("button")
// btn.onclick=function (){
//     console.log("Clicked");
// }
// btn.addEventListener("click",()=>{
//     console.log("Clicked me");
// })
// let ip=document.querySelector("input")
// btn.addEventListener("click",function(){
//      console.log(this.innerText);
// })
// ip.addEventListener("keydown",()=>{
//     console.log("Key was pressed");
// })
// ip.addEventListener("keyup",(e)=>{
//     console.log("Key was released",e.key,e.code);

// })
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    // alert("Submitted")
    e.preventDefault();
    let ip=this.elements[0];
    console.log(ip.value)
})
