'use strict';
const {
  Model
} = require('sequelize');
const consultation = require('./consultation');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Bill, {
        foreignKey: 'date_id',
        as: 'bill'
      })
      this.hasOne(models.Consultation, {
        foreignKey: 'date_id',
        as: 'consultation'
      })
      this.belongsTo(models.Employee, {
        foreignKey: 'employee_id',
        as: 'employee'
      })
      this.belongsTo(models.Patient, {
        foreignKey: 'patient_id',
        as: 'patient'
      })
      this.belongsTo(models.Room, {
        foreignKey: 'room_id',
        as: 'room'
      })
      this.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        as: 'doctor'
      })
      this.hasMany(models.Operation, {
        foreignKey: 'date_id',
        as: 'operation'
      })
    }
  }
  Date.init({
    date: {
      type: DataTypes.DATE
    },
    exit_date: {
      type: DataTypes.DATE
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Date',
    tableName: 'dates'
  });
  return Date;
};