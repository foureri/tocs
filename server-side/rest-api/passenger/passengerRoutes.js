var express = require('express');
var router = express.Router();
var loginManager = require('./loginManager');
var homeManager = require('./homeManager');
var productManager = require('./productManager');
var bookManager = require('./bookManager');


router.route('/login')
	.post(function(req, res) {
		loginManager.loginWithPassenger(req, function(err, result) {
		//loginManager.login(req, function(err, result) {
			if(!err) {
				res.json(result);
			} else {
				res.json(err);
			}
		});
  	});

router.route('/home')
	.post(function(req, res) {
		homeManager.load(req, function(err, result) {
			if(!err) {
				res.json(result);
			} else {
				res.json(err);
			}
		});
  	});

router.route('/:category')
	.post(function(req, res) {
		productManager.getByCategories(req, function(err, results) {
			if(!err) {
				res.json(results);
			} else {
				res.json(err);
			}
		});
	});

router.route('/book/:product_id')
	.post(function(req, res) {
		bookManager.book(req, function(err, results) {
			if(!err) {
				res.json(results);
			} else {
				res.json(err);
			}
		});
	});

module.exports = router;
