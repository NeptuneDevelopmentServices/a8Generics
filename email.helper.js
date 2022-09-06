//	You will need to create a password to use with applications, your normal gmail password will not work
//	https://myaccount.google.com/security >> Signing Into Google >> Setup App Passwords
var nodemailer = require('nodemailer')
const JSONResponse = require('./json.helper')

class Emailer {
	constructor(email, password) {
		this.transporter = nodemailer.createTransport({
			service: 'gmail', //Example
			auth: {
				user: email,
				pass: password,
			},
		})
		this.owner = email
	}
	/**
	 * Sends an email to the intended recipient.
	 * @param {*} to - The recipient or recipient array for the email
	 * @param {*} sub - The subject of the email
	 * @param {*} body - The body of the email
	 */
	sendMail(to, sub, body) {
		let mailOptions = {
			to: to,
			from: this.owner,
			subject: sub,
			text: body,
		}
		this.transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.error(error)
			} else {
				console.log('Email sent: ' + info.response)
			}
		})
	}
}

module.exports = new Emailer()
