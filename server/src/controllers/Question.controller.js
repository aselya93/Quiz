const { getAll, getById } = require('../services/Question.services');
const isValidId = require('../utils/isValidId');
const formatResponse = require('../utils/formatResponse');



class QuestionController {
  
  static async getAllQuestions(req, res) {
    try {
      const questions = await getAll();

      if (questions.length === 0) {
        return res.status(200).json(formatResponse(200, 'No questions found', []));
      }

      res.status(200).json(formatResponse(200, 'success', questions));
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, error.message));
    }
  }

  static async getQuestionById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid question ID'));
    }

    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      return res.status(400).json(formatResponse(400, 'Invalid question ID'));
    }

    try {
      const question = await getById(numericId);

      if (!question) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, 'success', question));
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, error.message));
    }
  }
}

module.exports = QuestionController;
