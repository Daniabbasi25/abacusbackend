const asyncHandler=require('express-async-handler')
const getExersise=asyncHandler(async(req, res)=>{
      res.status(200).json({ message: "get the exersises" });

})

const postExersise = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Plz add input of text field");
  }
  res.status(200).json({ message: "create exersises" });
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