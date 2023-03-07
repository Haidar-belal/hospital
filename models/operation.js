'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Date, {
        foreignKey: 'date_id',
        as: 'date'
      })
    }
  }
  Operation.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Operation',
    tableName: 'operations'
  });
  return Operation;
};