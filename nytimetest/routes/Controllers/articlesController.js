const db =require("../models");

module.exports = {
    findall: function(req,res) {
        db.article:function(
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
};