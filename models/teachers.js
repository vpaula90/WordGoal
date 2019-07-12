module.exports = function(sequelize, DataTypes) {
    var Teachers = sequelize.define("teachers", {
      // Giving the Author model a name of type STRING
      homeroom_id: DataTypes.STRING
    });
  
    Teachers.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Teachers.hasMany(models.students, {
        onDelete: "cascade"
      });
    };
  
    return Teachers;
  };
  