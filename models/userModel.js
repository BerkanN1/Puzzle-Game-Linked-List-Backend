import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    passwordHash:{type: String, required: true},
});



export const PuzzleUser = mongoose.model('PuzzleUser',userSchema);