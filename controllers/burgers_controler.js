var express = require('express');
var router = express.Router();

var burger = require("../models/burgers.js");


router.get("/", function(req,res){
	burger.selectAll(function (data){
		console.log (data);
		res.render("index", {data});
	})
})

router.put("/api/burgers", function(req,res){
	burger.updateOne(req.body.id, function(result){
		console.log(result);
		res.redirect("/");
	})
});

router.post("/api/burgers/create", function(req, res){
	burger.insertOne(req.body.burgerName, function(result){
		res.redirect("/")
	})
})
module.exports = router;