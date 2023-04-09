const express = require("express");
const router = express.Router();
const {
  getQuestions,
  postQuestion,
  getAllQuestions,
} = require("../controllers/questionController");
router.route("/").post(postQuestion).get(getAllQuestions);
router.route("/:id").get(getQuestions);

// router.route("/:id").put(updateExersise).delete(deleteExersise);

module.exports = router;
