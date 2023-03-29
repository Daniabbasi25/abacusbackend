const express=require('express')
const router=express.Router()
const {
  getExersise,
  deleteExersise,
  postExersise,
  updateExersise,
} = require("../controllers/exersiseController");
router.route("/").get( getExersise).post(postExersise);

router.route("/:id").put(updateExersise).delete(deleteExersise);

module.exports=router