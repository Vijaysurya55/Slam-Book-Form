const express=require('express')
let router=express.Router();

router.get('/',(req,res)=>{
    res.send("User information")
});
router.get('/newuser',(req,res)=>{
    res.send("New user added");
});
// router.get('/:id',(req,res)=>{
//     res.send("Id value "+req.params.id);
// })
// router.put('/:id',(req,res)=>{
//     res.send("Update this id value "+req.params.id);
// })
// router.delete('/:id',(req,res)=>{
//     res.send("Delete this id value "+ req.params.id);
// })
router.get('/:id/:string',(req,res)=>{
    res.send("ID :"+req.params.id+"\nString:"+req.params.string);
})

router
.route('/:id')
.get((req,res)=>{
    res.send("Retrieve id value: "+ req.params.id);
    console.log(req.usery);
})
.put((req,res)=>{
    res.send("Update this id value "+req.params.id);
})
.delete((req,res)=>{
    res.send("Delete this id value "+ req.params.id);
})

const users=[{name:"Raja"},{name:"Rani"},{name:"Sepoy"}];

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id]
    next();
})
module.exports = router;