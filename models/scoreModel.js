import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    createdBy: String,
    score:Number,
    adım:Number  
})

export const Score = mongoose.model('Score', scoreSchema)