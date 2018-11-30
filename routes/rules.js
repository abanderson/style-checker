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

module.exports = router;
