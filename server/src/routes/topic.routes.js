const router = require('express').Router()
const {Topic} = require('../db/models')

router.route('/').get(async(req,res)=>{
    try {
      const allTopic = await Topic.findAll()
      res.status(200).json(formatResponse(200, 'success', allTopic));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Internal server error', null, message));
    }
  })
  
  
  module.exports=router