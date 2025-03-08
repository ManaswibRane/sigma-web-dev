let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let colours=["colour1","colour2","colour3","colour4"]
let h3=document.querySelector("h3")
document.addEventListener("click",function(e){
    // let lvl=document.getElementsByClassName("level")[0];
    // e.stopPropagation();
    if(started==false){
        started=true;
        console.log("document event");
    }
    levelup();
})
function btnflash(b){
    // b.stopPropagation(); 
    b.classList.add("flash");
    setTimeout(function(){
        b.classList.remove("flash")
    },150)
}
function levelup(){
      level++;
      h3.innerText=`level ${level}`;
      let b=Math.floor(Math.random()*3);
      let rancol=document.querySelector(`.${colours[b]}`);
      btnflash(rancol);

}