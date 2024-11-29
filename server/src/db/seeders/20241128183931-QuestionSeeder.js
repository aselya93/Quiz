"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "Half-Life 2",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "Half-Life 2",
          img: "https://hl2-beta.ru/gallery/12091990840_gs-summer-200422.jpg",
          topic_id: 2,
        },
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "Mass Effect",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "Mass Effect",
          img: "https://cdn.mos.cms.futurecdn.net/E8n7CK2eRyVyinjJpTr7u9.jpg",
          topic_id: 2,
        },
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "Dishonored",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "Dishonored",
          img: "https://www.newgamenetwork.com/images/uploads/gallery/Dishonored/dishonored_01.jpg",
          topic_id: 2,
        },
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "The Elder Scrolls V: Skyrim",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "The Elder Scrolls V: Skyrim",
          img: "https://cdn.mobygames.com/screenshots/2490934-the-elder-scrolls-v-skyrim-playstation-3-close-combat-with-the-c.jpg",
          topic_id: 2,
        },
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "The Last of Us",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "The Last of Us",
          img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/The-Last-Of-Us-Part-1-Ellie-Joel.jpg",
          topic_id: 2,
        },
        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "Dark Souls II",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "Dark Souls II",
          img: "https://www.newgamenetwork.com/images/uploads/gallery/DarkSouls2/ds2_07.jpg",
          topic_id: 2,
        },        {
          quiz_question: "Какая игра изображена на скриншоте",
          answer1: "Life is Strange",
          answer2: "",
          answer3: "",
          answer4: "",
          right_answer: "Life is Strange",
          img: "https://etgeekera.com/wp-content/uploads/2016/01/life-is-strange-screenshot-03.jpg?w=848",
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
