const User = require('../models/user');

async function index(req, res) {
	try {
		res.render('application');
	} catch (err) {
		res.redirect('/');
	}
}

module.exports = { index };
