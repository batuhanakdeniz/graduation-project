import Help from "../models/helpModel.js";
import Image from "../models/imageModel.js";
import User from "../models/userModel.js";
import Comment from "../models/commentModel.js";
import mongoose from "mongoose";
import multer from "multer";
export const putHelpComment = async (req, res) => {
	try {
		const {text} = req.body;
		console.log("text: ",text);
		const status = "Pending";
		if(req.userType=="Admin"){
			status = "Active";
		}
		const savedImages = [];
		console.log("req.files: ",req.files);
		req.files.forEach((newImage) =>{
			console.log("newImage: ",newImage);
			const savedImage = new Image(newImage);
			
			savedImage.save().then((err)=>{
				if(!err)	return res.status(404).send(err)
				console.log("Save oldu resimler...");
			});
			savedImages.push(savedImage);
		});
		const now = new Date().toLocaleString("tr-TR", {timeZone: "Asia/Istanbul"});
		const newComment = new Comment({
			_id: new mongoose.Types.ObjectId(),
			help_id: req.params.id,
			user_id: req.User,
			text: text,
			extraImages: savedImages,
			createdAt: now,
			status: status
		});
		const savedComment = newComment.save().then((err)=>{
			if(!err)	return res.status(404).send(err)
			console.log("Save oldu comment...",savedComment);
		});
		if(status === "Active"){
			 Help.findOneAndUpdate({_id: req.params.id},{$push: {comment: newComment}});
		}
		res.status(200).send({message: "Comment eklendi."});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};


export const putHelpCommentStatus = async (req, res) => {
	try {
		const { status } = req.body;
		console.log("status: ",status);
		Comment.findOneAndUpdate({_id: req.params.id},{$set: {status: status}},(err,comment)=>{
			if(err)	res.status(404).json({
				message: err.message,
			});
			Help.findOneAndUpdate({_id: comment.help_id},{$push: {comment: newComment}});
			console.log("status: ",status);
		});
		res.status(200).send({message: "Comment statusu değiştirildi."});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getAllActiveComment = async (req, res) => {
	try {
		const activeComments = await Comment.find({status: "Active"});
		console.log("status: ",activeComments);
		res.status(200).send(activeComments);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getAllPendingComment = async (req, res) => {
	try {
		const pendingComments = await Comment.find({status: "Pending"});
		console.log("status: ",pendingComments);
		res.status(200).send(pendingComments);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const getOwnPendingComment = async (req, res) => {
	try {
		const ownComments = await Comment.find({user_id: req.User, status: 'Pending'});
		res.status(200).send(ownComments);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const getOwnActiveComment = async (req, res) => {
	try {
		const activeComments = await Comment.find({user_id: req.User,status: "Active"});
		res.status(200).send(activeComments);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const deleteComment = async (req, res) => {
	try {
		Comment.findByIdAndDelete(req.params.id, (err, comment) => {
			if (err) return res.status(404).send(err);
			const message = {
				message: "Basarıyla silindi.",
				id: comment.id,
			};
			return res.status(200).send(message);
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};