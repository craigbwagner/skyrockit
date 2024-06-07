const User = require('../models/user');

async function index(req, res) {
	try {
        const currentUser = await User.findById(req.session.user._id);
		res.render('applications/index.ejs', { applications: currentUser.applications });
	} catch (err) {
		res.redirect('/');
	}
}

function newAppForm(req, res) {
	res.render('applications/new.ejs');
}

async function create(req, res) {
	try {
		const currentUser = await User.findById(req.session.user._id);
		currentUser.applications.push(req.body);
		await currentUser.save();
		res.redirect(`/users/${currentUser._id}/applications`);
	} catch (err) {
		console.log(err);
		res.redirect('/');
	}
}

module.exports = { index, new: newAppForm, create };
