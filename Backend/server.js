const express=require('express');
const app=express();

app.set('view engine', 'ejs'); //setting view engine and extension to run
app.get('/',(req,res)=>{
console.log("Yo");
// res.status(500).send("Error occured");
// res.json({express:"Learning express"});
// res.status(200).send("Success");
// res.send("Hello");
// res.render("index.ejs");
res.render("index",{text:{name:"Vijay",msg:"WORLD"}})
// res.render("index",{text:"Vijay"})
});


const userRouter=require('./routes/user.js');
app.use('/user',userRouter);
app.listen(3000);