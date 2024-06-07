const User = require('../models/user');

async function index(req, res) {
	try {
		res.render('applications/index.ejs');
	} catch (err) {
		res.redirect('/');
	}
}

function newAppForm(req, res) {
	res.render('applications/new.ejs');
}

module.exports = { index, new: newAppForm };
