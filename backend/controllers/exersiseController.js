const asyncHandler=require('express-async-handler')
const Exersise=require('../models/exersiseModel')

const getExersise=asyncHandler(async(req, res)=>{
  const exersices=await Exersise.find()
      res.status(200).json( exersices );

})

const postExersise = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.question && !req.body.answer) {
    res.status(400);
    throw new Error("Plz add input of question and answer field");
  }
  const exersice = await Exersise.create({
    question: req.body.question,
    answer: req.body.answer,
  });
  res.status(200).json(exersice);
})

const updateExersise = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update exersice with id ${req.params.id}` })}
)

const deleteExersise = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete exersice with id ${req.params.id}` });
})



module.exports={
    getExersise,
deleteExersise,
postExersise,
updateExersise
}