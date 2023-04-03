const asyncHandler=require('express-async-handler')
const Question=require('../models/questionModel')
const getQuestions=asyncHandler(async(req,res)=>{
 const questions = await Question.find();
 res.status(200).json(questions);
})