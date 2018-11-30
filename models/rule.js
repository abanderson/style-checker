"use strict";
module.exports = (sequelize, DataTypes) => {
    const Rule = sequelize.define(
        "Rule",
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            ruleName: DataTypes.STRING,
            searchRegex: {
                DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            displayText: DataTypes.STRING,
            correctionAvailable: DataTypes.BOOLEAN,
            correctionRegex: DataTypes.STRING,
            ruleSource: DataTypes.STRING,
            isEnabled: DataTypes.BOOLEAN
        },
        {}
    );
    Rule.associate = function(models) {
        // associations can be defined here
    };
    return Rule;
};
