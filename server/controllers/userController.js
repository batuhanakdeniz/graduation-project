import User from "../models/userModel.js";
import Help from "../models/helpModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import {sendConfirmationEmail} from "../config/mailer.js";

export const getloggedUser = async (req, res,next) => {
    try {
        const user = await User.findById(req.User);
        if (!user) return res.status(404).send({message: "Kullanıcı bulunamadı."});
        const sendInfos = {
            userName: user.userName,
            firstName: user.firstName,
			email: user.email,
            lastName: user.lastName,
            phone: user.phone,
            userType: user.userType
        }
        res.status(200).send(sendInfos);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

export const putUser = async (req, res, next) =>{
	try {
		User.findByIdAndUpdate(req.User,req.body,
			(err, user) => {
					if (err) return res.status(404).send(err);
					return res.status(200).send(user);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}
export const deleteUser = async (req, res, next) =>{
	try {
		User.remove({userName: req.params.userName},
			(err, user) => {
					if (err) return res.status(404).send(err);
					const message = {
						message: "Basarıyla silindi."}
					return res.status(200).send(message);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}
export const putUserStatusConfirmation = async (req, res, next) =>{
	try {
        const userName = req.params.userName;
		User.findOne({userName: userName},
			(err, user) => {
					if (err) return res.status(404).send(err);
					user.userType = user.statusUserType.applyUserType;
					user.statusUserType.isStatusPending = false;
					user.statusUserType.applyUserType = null;
					user.save();
					return res.status(200).send(user);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}

export const putUserStatusReject = async (req, res, next) =>{
	try {
        const userName = req.params.userName;
		User.findOne({userName: userName},
			(err, user) => {
					if (err) return res.status(404).send(err);
					user.statusUserType.isStatusPending = false;
					user.statusUserType.applyUserType = null;
					user.save();
					return res.status(200).send(user);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}

export const putUserStatus = async (req, res, next) =>{
	try {
        const userName = req.params.userName;
		User.findOneAndUpdate({userName: userName},{userType: req.body.userType},
			(err, user) => {
					if (err) return res.status(404).send(err);
					return res.status(200).send(user);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}

//getUser returns just a string
export const getAllUser = async (req, res) => {
    try {
		User.find(
			{},
			{
				_id: 1,
				userName: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                userType: 1
            },
			(err, users) => {
				if (err) throw err;
				res.send(users);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getAllPendingUserType = async (req, res) => {
    try {
		User.find(
			{'statusUserType.isStatusPending': true },
			{
				_id: 1,
				userName: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                userType: 1,
                'statusUserType.applyUserType': 1
            },
			(err, users) => {
				if (err) throw err;
				res.status(200).send(users);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};





