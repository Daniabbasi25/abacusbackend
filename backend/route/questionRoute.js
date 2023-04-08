const express = require("express");
const router = express.Router();
const {
 getQuestions,
 postQuestion
} = require("../controllers/questionController");
router.route("/").get(getQuestions).post(postQuestion);

// router.route("/:id").put(updateExersise).delete(deleteExersise);

module.exports = router;
