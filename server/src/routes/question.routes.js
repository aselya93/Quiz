// const router = require("express").Router();

// const QuestionController =
//   require("../controllers/Question.controller");

// router
//   .get("/", QuestionController.getAllQuestions)
//   .get("/:id", QuestionController.getQuestionById)


const router = require('express').Router()
const {Question} = require('../db/models')

router.route('/api/quiz').get(async(req,res)=>{
    try {
      const allQuestion = await Question.findAll()
      res.json(allQuestion)
    } catch (error) {
      res.json({message:error.message})
    }
  })


  
  
  module.exports=router