module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("students", {
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      homeroom_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      grade_level: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      word_goal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      word_count: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Students.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Students.belongsTo(models.teachers, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Students;
  };
  