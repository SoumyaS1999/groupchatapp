const User= require('../models/users');

const bcrypt = require('bcrypt');

function isstringinvalid(string){
    if(string== undefined || string.length ===0){
        return true;
    }else{
        return false;
    }
}

const signup= async(req,res)=>{
    try{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    
    if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)){
        return res.status(400).json({err: "Bad parameters . Something is missing"});
    }
    const saltrounds=10;
    bcrypt.hash(password,saltrounds,async(err,hash)=>{
    await User.create({name: name, email: email, password: hash }).then(()=>{
        res.status(201).json({message: 'Successfully create new user'})
    })
    })
    }catch(err){
        res.status(403).json({error: err});
    }
}

module.exports={
    signup
};