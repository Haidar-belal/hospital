'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsTo(models.Date,{
        constraints: true,
        foreignKey: 'date_id'
        });
    }
    }
    Bill.init({
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
    sequelize,
    modelName: 'Bill',
    });
    return Bill;
};