const router = require('express').Router(); 
const formatResponse = require('../utils/formatResponse'); 
const topicRoutes = require('./topic.routes')
// const questionRoutes = require('./question.routes')


router.use('/topic',topicRoutes)
//router.use('/question',questionRoutes)

router.use('*', (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, 'Not found', null, 'Resource not found'));
});

module.exports = router;
