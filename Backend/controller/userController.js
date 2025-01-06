import user from "../model/userModel.js";


export const create=async(req,res)=>{
    try{
        let userData=new user(req.body);
        const {email}=userData;

        const userExist = await user.findOne({email});

        if(userExist){
            return res.status(400).json({error:"User already exits"});
        }
        const savedUser = await userData.save();
        res.status(200).json({savedUser});
    }catch{
        res.status(500).json({error:"Internal server errors"})
    }
}


export const update = async(req,res)=>{
    try{
        const id=req.params.id;
        let userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateUser)
    }catch{
        res.status(500).json({message:"Internal server error"});
    }
}

export const del = async(req,res)=>{
    try{
        const id =req.params.id;
        // let userExist = await user.findOne({_id:id}); // also works
        let userExist = await user.findByIdAndDelete(id);
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const deleteUser = await user.deleteOne({_id:id});
        return res.status(200).json({deleteUser});
    }catch{
        res.status(500).json({message:"Internal server error"})
    }
}

export const fetch =async(req,res)=>{
    try{
        // res.send("Hello world");
        const users = await user.find();
        if(users.length==0){
            return res.status(404).json({message:"No users found"});
        }
        res.status(200).json({users});
    }
    catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}
export const find = async(req,res)=>{
    try{
        let id = req.params.id;
        let userData = await user.findById(id);
        if(!userData)
            return res.status(404).json({error:"User not found"});
        console.log("Data found");
        return res.status(200).json({userData})
    }
    catch{
        res.status(500).json({message:"Internal server error"});
    }
}
