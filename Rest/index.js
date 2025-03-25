const express=require("express")
const app=express()
const port=8080
const path=require("path")
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
let posts=[
    {
          id:1,
     username:"Manaswi Rane",
     content:"I love coding",
    },
    {
        id:2,
     username:"Magnus Carlsen",
     content:"I love coding",
    },
    {
        id:3,
     username:"Apna college",
     content:"I love coding",
    }
    
 
 ]
app.set("views",path.join(__dirname,"views") )
app.listen(8080,()=>{
    console.log("listening on port:8080");

})
app.get("/",(req,res)=>{
    res.send("port working well");
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {username,content}=req.body;
    posts.push({username,content});
    
    res.redirect("/posts")
    
})
app.get("/posts/new",(req,res)=>{
    res.render("newpostform.ejs");
})
app.get("/posts/:id",(req,res)=>{
    let id=parseInt(req.params.id)
    console.log(id);
    let post=posts.find((p)=>id===p.id)
    console.log(post)

    res.render("show.ejs",{post})
})