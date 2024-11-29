"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quiz_question: {
        type: Sequelize.STRING,
      },
      answer1: {
        type: Sequelize.STRING,
      },
      answer2: {
        type: Sequelize.STRING,
      },
      answer3: {
        type: Sequelize.STRING,
      },
      answer4: {
        type: Sequelize.STRING,
      },
      right_answer: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      topic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
