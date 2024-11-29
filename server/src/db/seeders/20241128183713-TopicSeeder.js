"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "John Doe",
          img_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Twemoji12_2716.svg/768px-Twemoji12_2716.svg.png"
        },
        {
          title: "John Doe",
          img_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Twemoji12_2716.svg/768px-Twemoji12_2716.svg.png"
        },
        {
          title: "John Doe",
          img_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Twemoji12_2716.svg/768px-Twemoji12_2716.svg.png"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
