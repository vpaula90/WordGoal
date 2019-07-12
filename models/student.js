'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    homeroom_id: DataTypes.STRING,
    grade_level: DataTypes.INTEGER,
    word_goal: DataTypes.INTEGER,
    word_count: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};