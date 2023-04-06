import  express  from "express";
import dotenv from "dotenv"
import cors from 'cors'


import Dbconnection from './config/index.js'
import userRoutes from "./routes/userRoutes.js"
import scoreRoutes from "./routes/scoreRoutes.js"

dotenv.config()

const app = express()
const PORT =process.env.PORT || 8000
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/user", userRoutes)
app.use("/score", scoreRoutes)



Dbconnection()

app.listen(PORT, (err, res)=>{
    if(err) throw err
    console.log(`app is running on port ${PORT}`)
})
