"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          quiz_question: "test quiz_question1",
          answer1: "testAnswer1",
          answer2: "testAnswer2",
          answer3: "testAnswer3",
          answer4: "testAnswer4",
          right_answer: "testAnswer4",
          img: "https://cdn3.iconfinder.com/data/icons/ecommerce-mix/1024/cross-1024.png",
          topic_id: 1,
        },
        {
          quiz_question: "test quiz_question",
          answer1: "testAnswer1",
          answer2: "testAnswer2",
          answer3: "testAnswer3",
          answer4: "testAnswer4",
          right_answer: "testAnswer2",
          img: "https://cdn3.iconfinder.com/data/icons/ecommerce-mix/1024/cross-1024.png",
          topic_id: 2,
        },
        {
          quiz_question: "test quiz_question",
          answer1: "testAnswer1",
          answer2: "testAnswer2",
          answer3: "testAnswer3",
          answer4: "testAnswer4",
          right_answer: "testAnswer1",
          img: "https://cdn3.iconfinder.com/data/icons/ecommerce-mix/1024/cross-1024.png",
          topic_id: 3,
        },
        {
          quiz_question: "test quiz_question2",
          answer1: "testAnswer1",
          answer2: "testAnswer2",
          answer3: "testAnswer3",
          answer4: "testAnswer4",
          right_answer: "testAnswer2",
          img: "https://cdn3.iconfinder.com/data/icons/ecommerce-mix/1024/cross-1024.png",
          topic_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
