let btn=document.getElementById("btn")
let generator=()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
   let color=`rgb(${red},${green},${blue})`
   return color;
}
btn.addEventListener("click",()=>{
    let h=document.querySelector("h1");
  let rn=generator();
    h.innerText=rn;
    let box=document.getElementById("box");
    box.style.backgroundColor=rn;

})