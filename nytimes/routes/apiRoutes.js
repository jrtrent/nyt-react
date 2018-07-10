const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/articles", (req, res) => {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          "api-key": "9b8936ce2b1a44cf83ef4f5aa61b3418",
          "q": "cave",
          "begin_date": "12/01/2015",
          "end_date": "07/09/2018"
        }
      })
      .then(function(results) {
        console.log("Axios Results", results.data.response);
        return results.data.response;
      });
})

//9b8936ce2b1a44cf83ef4f5aa61b3418