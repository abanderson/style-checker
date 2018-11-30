"use strict";
const uuidv4 = require("uuid/v4");

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

        return queryInterface.bulkInsert(
            "Rules",
            [
                {
                    id: uuidv4(),
                    ruleName: "Rule 1",
                    searchRegex: "search regex 1",
                    displayText: "Display text 1",
                    correctionAvailable: true,
                    correctionRegex: "correction regex 1",
                    ruleSource: "AP Style",
                    isEnabled: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: uuidv4(),
                    ruleName: "Rule 2",
                    searchRegex: "search regex 2",
                    displayText: "Display text 2",
                    correctionAvailable: true,
                    correctionRegex: "correction regex 2",
                    ruleSource: "AP Style",
                    isEnabled: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: uuidv4(),
                    ruleName: "Rule 3",
                    searchRegex: "search regex 3",
                    displayText: "Display text 3",
                    correctionAvailable: false,
                    correctionRegex: "correction regex 3",
                    ruleSource: "AP Style",
                    isEnabled: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

        return queryInterface.bulkDelete("Rules", null, {});
    }
};
