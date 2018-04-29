const Person = require('../../models/Person');
const nodemailer = require('nodemailer');

const mailProperties = {
	user: 'dadaboommail@gmail.com',
	pass: 'Dadaboom123'
};
const mailTo = "boomtah@gmail.com";

module.exports = (app) => {
	app.get('/api/contactus', (req, res, next) => {
		Person.find()
			.exec()
			.then((counter) => res.json(counter))
			.catch((err) => next(err));
	});

	app.post('/api/contactus', function (req, res, next) {
		let person = new Person({
			name: req.body.name,
			phone: req.body.phone,
		});
		if(req.body.email)
			person.email = req.body.email;
		if (req.body.message)
			person.message = req.body.message;
		person.save().then(() => {
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: mailProperties
			});
			let textString = "Name: " + req.body.name + "\n";
			textString += "Phone: " + req.body.phone + "\n";
			if (req.body.email)
				textString += "Email: " + req.body.email + "\n";
			if (req.body.message)
				textString += "Message: " + req.body.message + "\n";
			textString += "Source: " + req.body.source;

			const mailOptions = {
				from: mailProperties.user,
				to: mailTo,
				subject: 'New contact was made from dadaboom.com',
				text: textString
			};

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					res.send(error);
				} else {
					res.send(info);
				}
			});
		});


	});

	app.delete('/api/contactus/:id', function (req, res, next) {
		Person.findOneAndRemove({ _id: req.params.id })
			.exec()
			.then((counter) => res.json())
			.catch((err) => next(err));
	});

	app.put('/api/contactus/:id/increment', (req, res, next) => {
		Person.findById(req.params.id)
			.exec()
			.then((counter) => {
				counter.count++;

				counter.save()
					.then(() => res.json(counter))
					.catch((err) => next(err));
			})
			.catch((err) => next(err));
	});

	app.put('/api/contactus/:id/decrement', (req, res, next) => {
		Person.findById(req.params.id)
			.exec()
			.then((counter) => {
				counter.count--;

				counter.save()
					.then(() => res.json(counter))
					.catch((err) => next(err));
			})
			.catch((err) => next(err));
	});
};
