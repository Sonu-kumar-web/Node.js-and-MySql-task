"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         firstName: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         PanCard: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         DOB: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         gender: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         profileImage: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Users");
   },
};