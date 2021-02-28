const express = require('express')
const Router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/userSchema')

Router.route('/')
.post( (req,res)=>{

  const {name,email,password} = req.body 
  if(!email || !password || !name){
     return res.status(422).json({error:"please add all the fields"})
  }
  User.findOne({email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,15)
      .then(hashedpassword =>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
    
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports = Router;