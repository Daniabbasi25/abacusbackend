const asyncHandler=require('express-async-handler')
const Exersise=require('../models/exersiseModel')

const getExersise=asyncHandler(async(req, res)=>{
  const exersices=await Exersise.find()
      res.status(200).json( exersices );

})

const postExersise = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.name && !req.body.description) {
    res.status(400);
    throw new Error("Plz add input of question and answer field");
  }
  const exersice = await Exersise.create({
    name: req.body.name,
    description: req.body.description,
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