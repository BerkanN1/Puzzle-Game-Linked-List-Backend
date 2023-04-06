import {PuzzleUser as User} from '../models/userModel.js'
import bcrypt from 'bcryptjs'



export const createUser = async(req, res) =>{
   try {
    const {userName,password,} = req.body;
    const userCheck = await User.findOne({userName:userName})
    if(userCheck) return res.status(404).send("user already exists")
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new User({userName, passwordHash})
    await newUser.save()
    res.status(200).send(newUser)
   } catch (err) {
    console.log(err)
    res.status(500).send("server error"+ err.message)
   }
}


   export const loginUser = async(req, res) =>{
    try {
     const {userName,password} = req.body;
     const validatedUser = await User.findOne({userName:userName})
     if(!validatedUser) return res.status(404).send("User doesn't exists")


     const correctPassword = bcrypt.compareSync(password, validatedUser.passwordHash)
     if(!correctPassword) return res.status(404).send("the password is incorrect")
     
     res.status(200).send(validatedUser)
     
    } catch (err) {
     console.log(err)
     res.status(500).send("server error"+ err.message)
    }
 
}