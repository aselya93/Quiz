const { Question } = require('../db/models');

class QuestionService {
  //* Получить все задачи
  static async getAll() {
    return await Question.findAll();
  }

  //* Найти задачу по ID
  static async getById(id) {
    return await Question.findByPk(id);
  }

  //* Создать новую задачу
  static async create(data) {
    return await Question.create(data);
  }


}

module.exports = QuestionService;
