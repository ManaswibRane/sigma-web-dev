let btn=document.getElementById("taskadd")
let task=document.getElementById("tsk")
let ul=document.querySelector("ul")
task.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
    console.log(task.value);
    let list=document.createElement('li')
    list.innerText=task.value
    let button=document.createElement('button')
    button.innerText="delete"
    ul.appendChild(list)
    list.appendChild(button)
    button.classList.add("delete")
    let delbutton=document.querySelectorAll(".delete")
    for (let e of delbutton) {
        e.addEventListener("click",function(x){
                console.log(x);
              let parent=e.parentElement;
              parent.remove()
                })
    }
    
    task.value=""
}
})
function work(){
    console.log(task.value);
    let list=document.createElement('li')
    list.innerText=task.value
    let button=document.createElement('button')
    button.innerText="delete"
    ul.appendChild(list)
    list.appendChild(button)
    button.classList.add("delete")
    let delbutton=document.querySelectorAll(".delete")
    for (let e of delbutton) {
        e.addEventListener("click",function(x){
                console.log(x);
              let parent=e.parentElement;
              parent.remove()
                })
    }
    
    task.value=""
}
btn.addEventListener("click",work);


