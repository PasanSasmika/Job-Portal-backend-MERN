import bcrypt from 'bcrypt';
import User from '../Model/Usermodel.js';


export function signup(req,res){

  const newUserData = req.body
  
  
  if(newUserData.type == "admin"){
  
      if(req.user==null){
          res.json({
              message: "You are not loged in. plese log in as an admin to create admin account"
          })
          return
      }
  
      if(req.user.type !="admin"){
          res.json({
              message: "You are not an admin. plese log in as an admin"
          })
      }
  }
  
  
  
  newUserData.password = bcrypt.hashSync(newUserData.password, 10)
  
  
  const user  = new User(newUserData)
  
  user.save().then(()=>{
      res.json({
          message: "User created"
      })
  }).catch(()=>{
      res.json({
          message: "User not created"
      })
  })
  
  }


export function loginUser(req,res){

  User.find({email:req.body.email}).then(
    (users)=>{
      if(users.length == 0){
        res.json({
          message:"User not found"
        })

      }else{

        const user = users[0]

        const isPasswordCorrect =  bcrypt.compareSync(req.body.password, user.password)
        if(isPasswordCorrect){

          res.json({
            message:"userFound"
          })

        }else{
          res.json({
            message: "User Password incorrect..!"
          })
        }
      }
    }
  )
}