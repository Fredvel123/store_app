// this code is to send emails to users
import nodemailer from 'nodemailer';
import { SERVER_EMAIL, SERVER_PSSWD } from '../../../configs/var.env.js';

export const sendEmailToConfirmEmail = (user_email, key_email) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: SERVER_EMAIL,
			pass: SERVER_PSSWD,
		},
	});

	const mailOptions = {
		from: SERVER_EMAIL,
		to: user_email,
		subject: 'DENTAL COMPANY - EMAIL CONFIRM',
		text: `To confirm your email please click here: http://localhost:8000/api/users/confirmemail/${key_email}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
