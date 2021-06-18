import nodemailer from "nodemailer";

const user = "socialaidplatform@gmail.com";
const pass = "Batu!1234";

const transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: user,
		pass: pass,
	},
	tls: {
		rejectUnauthorized: false,
	},
	secure: false,
});

export const sendConfirmationEmail = (name, email, confirmationCode) => {
	transport
		.sendMail({
			from: user,
			to: email,
			subject: "Hesap doğrulama",
			html: `<h1> Email Onaylama</h1>
        <h2> Merhaba ${name} </h2>
        <p> Onaylamak için lütfen butona tıklayın.</p>
        <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
        `,
		})
		.catch((err) => console.log("sendConfirmaiton error: ", err));
};
