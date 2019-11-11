const express = require("express");
const rootRoute = require("./routes/rootRoute");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/", rootRoute);





module.exports = { app }