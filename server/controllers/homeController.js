import Help from "../models/helpModel.js";
import User from "../models/userModel.js";

export const getHelpNumber = async (req, res) => {
	try {
		const helpNumber = await Help.estimatedDocumentCount();
		res.status(200).json(helpNumber);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const getUserNumber = async (req, res) => {
	try {
		const userNumber = await User.estimatedDocumentCount();
		res.status(200).json(userNumber);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const getHelpedNumber = async (req, res) => {
	try {
		const helpedNumber = await Help.estimatedDocumentCount();
		res.status(200).json(helpedNumber);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};