const asyncHandler=require('express-async-handler')
const Question=require('../models/questionModel')
const getQuestions=asyncHandler(async(req,res)=>{
 const questions = await Question.find();
 res.status(200).json(questions);
})



// post method
const postQuestion=asyncHandler(
    async(req,res)=>{

        console.log(req.body)
        if(!req.body.exercise_id){
             res.status(400);
    throw new Error("Plz Enter Excercise Id First");
  }
    const question = Question.create({
      exercise_id: req.body.exercise_id,
      question_type: req.body.question_type,
      question_text: req.body.question_text,
      options: req.body.options?.json(),
      correct_answer: req.body.correct_answer,
    });
     res.status(200).json(question);
    }
)
module.exports = {
 postQuestion,
 getQuestions
};