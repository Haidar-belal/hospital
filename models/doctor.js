'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Room, {
        foreignKey: 'room_id',
        as: 'room'
      })
      this.hasMany(models.Date, {
        foreignKey: 'doctor_id',
        as: 'date'
      })
    }
  }
  Doctor.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    specialize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    starting_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finishing_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Doctor',
    tableName: 'doctors'
  });
  return Doctor;
};