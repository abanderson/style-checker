const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET users listing. */
router.get("/", function(req, res, next) {
    models.Rule.findAll()
        .then(rules => {
            res.json(rules);
        })
        .catch(error => {
            console.error(error);
            next(error);
        });
});

router.post("/", function(req, res, next) {
    models.Rule.create({
        ruleName: req.body.ruleName,
        searchRegex: req.body.searchRegex,
        displayText: req.body.displayText,
        correctionRegex: req.body.correctionRegex,
        ruleSource: req.body.ruleSource,
        isEnabled: req.body.isEnabled
    })
        .then(rule => {
            res.json(rule);
        })
        .catch(error => {
            console.error(error);
            next(error);
        });
});

router.delete("/:ruleId", function(req, res, next) {
    models.Rule.destroy({ where: { id: req.params.ruleId } })
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error(error);
            next(error);
        });
});

module.exports = router;
