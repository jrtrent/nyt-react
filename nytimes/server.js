const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



if(process.env.Node_env == 'production') {
app.use(express.static("client/build"));
}

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact');
mongoose.Promise = Promise;



app.listen(PORT, function() {
    console.log (`API Server now listening on Port ${PORT}!`);
});