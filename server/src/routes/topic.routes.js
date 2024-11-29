const router = require('express').Router()
const {Topic} = require('../db/models')
const {Question} = require('../db/models')
const formatResponse = require('../utils/formatResponse')


const randomQuestions = require('../utils/RandomQuestions')
router.route('/').get(async(req,res)=>{
    try {
      console.log(111111)
      const allTopic = await Topic.findAll()
      console.log(allTopic)
      res.status(200).json(formatResponse(200, 'success', allTopic));
    } catch ({message}) {
      res.status(500).json(formatResponse(500, 'Internal server error', null, message));
    }
  })

  router.route('/:id').get(async(req,res)=>{
    try {
      const {id} = req.params
      const oneTopic = await Topic.findByPk(id)
      res.status(200).json(formatResponse(200, 'success', oneTopic))
    } catch (error) {
      res.json({message:error.message})
    }
  })
  router.route('/:id/questions').get(async (req,res) => {
    try {
        const { id } = req.params;
        const data = await Question.findAll({ where: { topic_id: id } });
        console.log(data);
        const questions = randomQuestions(data)
        res.status(200).json(formatResponse(200, 'success', questions))
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Произошла ошибка при получении карточек', error: error.message });
    }
});
  
  module.exports=router