"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Rules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      ruleName: {
        type: Sequelize.STRING
      },
      searchRegex: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      displayText: {
        type: Sequelize.STRING
      },
      correctionAvailable: {
        type: Sequelize.BOOLEAN
      },
      correctionRegex: {
        type: Sequelize.STRING
      },
      ruleSource: {
        type: Sequelize.STRING
      },
      isEnabled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Rules");
  }
};
