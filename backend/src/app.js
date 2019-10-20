  
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./configs/config");
const mongoose = require("mongoose");

const app = express();

//Middelware
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());

const category_router = require('./routers/category');

app.use('/api', category_router);

app.use((req, res, next) => res.status(404).send({ url: req.url, error: `route_not_found` }));
// Start server
mongoose.connect(config.database_url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) throw err;
    app.listen(config.port, () =>
        console.log("Server sanquanplus running on port " + config.port)
    );
});