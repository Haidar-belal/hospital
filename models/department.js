'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Room, {
        foreignKey: 'department_id',
        as: 'rooms'
      });
      this.belongsTo(models.Photo, {
        foreignKey: 'photo_id',
        as: 'photo'
      });
    };
  }
  Department.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number_of_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments'
  });
  return Department;
};