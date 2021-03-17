const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const rulesRouter = require("./routes/rules");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', function(req, res, next) {
    console.log("Hit!");
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use("/rules", rulesRouter);

app.listen(9000);

module.exports = app;
