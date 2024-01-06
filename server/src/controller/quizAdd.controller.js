const express = require("express");
const router = express.Router();
const PostQuiz = require("../model/quizdata.model.js");

router.post("/", async (req, res) => {
  try {
    const data = await PostQuiz.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:value", async (req, res) => {
  try {
    var Data = await PostQuiz.find({ title: req.params.value });
    console.log(req.params.value)
    var result = [Data[0]]
    Data.forEach((item, index) => {
      if(index === 0) return
      result[0].questionArray = result[0].questionArray.concat(item.questionArray)
    })
    console.log(result)
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
