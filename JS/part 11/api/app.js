// let js=`{
//     "fact": "Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.",
//     "length": 96
//   }`
//   let fact=JSON.parse(js);
//   console.log(fact.fact)
//   let student={
//     name: "Manaswi Rane",
//     age:18,
//   }
//   let str=JSON.stringify(student);
//   console.log(str)
  //ajax == asynchronous javascript and xml     Verbs get post delete
  /* Status code
  200 -Ok  
  404-not found
  400- bad request
  500 internal server error
  ADD INFORMATION IN URL
     querystrings
     ?q= &x=   harry+potter

  
  
  
  */
//  let url="https://catfact.ninja/fact"
// fetch(url)
// .then((res)=>{
//    console.log(res);
//    return res.json();
// })
// .then((data)=>{
//    console.log(data);
//    return fetch(url);
// })
// .then((res2)=>{
//    console.log(res2);
//    return res2.json();
// })
// .then((data2)=>{
//    console.log(data2);
//    return fetch(url);
// })
// .then((res3)=>{
//    console.log(res3);
//    return res3.json();
// })
// .then((data3)=>{
//    console.log(data3);
   
// })
// .catch((e)=>{
//    console.log(e);
// })
// let p=document.querySelector("p")
// let url="https://catfact.ninja/fact"
// async function getfacts(){
//    let res=await fetch(url);
//    let data=await res.json();
//    console.log(data.fact);
//    p.innerText=data.fact;
// }
// getfacts();
// let p=document.querySelector("p")
// let url="https://catfact.ninja/fact"
// let url2="https://dog.ceo/api/breeds/image/random"
// let img=document.querySelector("img")
// async function getfacts(){
//    let res=await axios.get(url)
//    let res2=await axios.get(url2)
//    // let data=await res.json();
//    console.log(res.data.fact);
//    p.innerText=res.data.fact;
//    img.src=res2.data.message;
//    console.log(res2)
// }
// getfacts();

// let p=document.querySelector("p")
// let url="https://icanhazdadjoke.com/"
// async function getjokes(){
//    try{
//       const config={headers:{Accept: "application/json"}}
//       let joke=await axios.get(url,config)
//       console.log(joke.data.joke)
//       p.innerText=joke.data.joke;
//    }
//    catch(e){
//       console.warn(e);
//    }

// }
// getjokes()
let url="http://universities.hipolabs.com/search?name="
let ip=document.querySelector("input")
let button=document.querySelector("button")
let ul=document.querySelector("ul")
async function srch(){
 try{let res=await axios.get(url+encodeURIComponent(ip.value) )
   if (res.data.length === 0) {
      let li = document.createElement("li");
      li.innerText = "No universities found.";
      ul.appendChild(li);
      return;
  }
    let random=Math.floor(Math.random()*res.data.length)
    console.log(random);
   console.log(res.data[random].name)
   let list=document.createElement("li");
   list.innerText=res.data[random].name;
   ul.appendChild(list)
}  
   catch (error) {
      console.error(error);
      ul.innerHTML = "<li>Failed to fetch data. Try again.</li>";
  }
}

button.addEventListener("click",srch)
