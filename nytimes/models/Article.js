const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },

  date: {
      type: Date,
      required: false
  },


  url: {
    type: String,
    required: true
  }

  
  });
  
  
Article = mongoose.model("Article", ArticleSchema),


module.exports = Article;
