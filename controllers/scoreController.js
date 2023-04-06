import{Score} from "../models/scoreModel.js"

//post score and adım

export const createScore = async(req, res) =>{
    try {
     const {score,adım,createdBy} = req.body;
     const newUser = new Score({ score,adım,createdBy})
     await newUser.save()
     res.status(200).send(newUser)
    } catch (err) {
     console.log(err)
     res.status(500).send("server error"+ err.message)
    }
 }