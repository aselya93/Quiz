"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: "topic_id" });
    }
  }
  Topic.init(
    {
      title: DataTypes.STRING,
      img_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
