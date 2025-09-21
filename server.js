const express=require('express');
const path=require('path');
const app=express();

app.use(express.json());

app.use(express.static(__dirname));

const users={"arpan": "1234"};

app.post('/login', (req,res)=>{
    const {username,password}=req.body;
    if(users[username] && users[username]==password){
        res.json("Login success");
    }
    else{
        res.json("Invalid cred");
    }
})

app.listen(3000, ()=>(console.log("server running on http://localhost:3000")));