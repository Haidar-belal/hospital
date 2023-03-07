'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('doctors');
  }
};