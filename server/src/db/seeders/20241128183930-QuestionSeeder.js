"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          quiz_question: "Какой покемон является первым в покедексе?",
          answer1: "Бульбазавр",
          answer2: "Пикачу",
          answer3: "Чармандер",
          answer4: "Сквиртл",
          right_answer: "Бульбазавр",
          img: "https://masterpiecer-images.s3.yandex.net/b0a1dbba8d2111eeacd6e6d39d9a42a4:upscaled",
          topic_id: 1,
        },
        {
          quiz_question: "Кто является талисманом франшизы Покемон?",
          answer1: "Магикарп",
          answer2: "Иви",
          answer3: "Мяут",
          answer4: "Пикачу",
          right_answer: "Пикачу",
          img: "https://cdn.europosters.eu/image/750webp/71936.webp",
          topic_id: 1,
        },
        {
          quiz_question: "Какой тип наиболее эффективен против покемонов-драконов?",
          answer1: "Ледяной",
          answer2: "Травяной",
          answer3: "Электрический",
          answer4: "Боевой",
          right_answer: "Ледяной",
          img: "https://pokemonov.net/assets/images/pokemony/27-sandshrew-alola.png",
          topic_id: 1,
        },
        {
          quiz_question: "test quiz_question2",
          answer1: "testAnswer1",
          answer2: "testAnswer2",
          answer3: "testAnswer3",
          answer4: "testAnswer4",
          right_answer: "testAnswer2",
          img: "https://cdn3.iconfinder.com/data/icons/ecommerce-mix/1024/cross-1024.png",
          topic_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
