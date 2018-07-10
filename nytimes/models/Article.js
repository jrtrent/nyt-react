const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
 
  Topic: {
    type: String,
    required: true
  },

  startdate: {
      type: Date,
      required: false
  },

  enddate: {
      type: Date,
      required: false
    
  },

  link: {
    type: String,
    required: true
  },
  });
  
  
Article = mongoose.model("Article", ArticleSchema),


module.exports = Article;
