import Help from "../models/helpModel.js";
import Image from "../models/imageModel.js";
import User from "../models/userModel.js";
import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";

import multer from "multer";
import shortid from "shortid";
export const getHelp = async (req, res) => {
	try {
		const helps = await Help.find();
		res.status(200).json(helps);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const createHelp = async (req, res) => {
	const newHelps = new Help(req.body);
	try {
		await newHelps.save();
		res.status(201).json(newHelps);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpLocations = async (req, res) => {
	try {
		Help.find(
			{status: 'Active'},
			{
				_id: 1,
				location:1,
				emergencyLevel: 1,
			},
			(err, helps) => {
				if (err) throw err;
				console.log(helps);
				res.send(helps);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpLocation = async (req, res) => {
	try {
		console.log(req.params);
		Help.findById(
			req.params.id,
			{
				_id: 1,
				location:1,
				emergencyLevel: 1,
			},
			(err, help) => {
				if (err) throw err;
				console.log(help);
				res.send(help);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpBasics = async (req, res) => {
	try {
		Help.find(
			{},
			{
				_id: 1,
				header: 1,
				location: 1,
				emergencyLevel: 1,
				aidCode: 1,
				personName: 1,
				typeofhelp: 1,
				personLastName: 1,
				img: { $slice: 1 },
				statusForHelping: 1
			},
			(err, helps) => {
				if (err) throw err;
				console.log(helps.img);
				res.send(helps);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpBasic = async (req, res) => {
	try {
		Help.findOne({_id: req.params.id}).populate('_creator').exec((err,help)=>{
			if (err) throw err;
			console.log(help);
			console.log("help._creator-----",help._creator);
			const sendHelp = {
				_id: help._id,
				header: help.header,
				location: help.location,
				emergencyLevel: help.emergencyLevel,
				aidNo: help.aidCode,
				personName: help.personName,
				personLastName: help.personLastName,
				img: help.img[0].filename,
				typeofhelp: help.typeofhelp,
				createdAt: help.createdAt,
				creatorUserName: help._creator.firstName,
				statusForHelping: help.statusForHelping,
				createrUserType: help._creator.userType
			};
			console.log(sendHelp);
			return res.status(200).send(sendHelp);
			});
	} catch (err) {
		console.log(err);
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpDetails = async (req, res) => {
	try {
		const helps = await Help.find();
		res.status(200).json(helps);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const getHelpDetail = async (req, res) => {
	try {
		//console.log("req.User: ", req.User);

		Help.findById(req.params.id)
			.populate("comment").populate("_creator")
			.exec((err, help) => {
				if (err) throw err;
				let activeComments = [];
				if(help.comment){
					help.comment.forEach((comment) => {
						if (comment.status == "Active") {
							activeComments.push(comment);
						}
					});
				}
				const sendHelp = {
					_id: help._id,
					header: help.header,
					location: {
						lat: help.lat,
						lng: help.lng},
					emergencyLevel: help.emergencyLevel,
					aidCode: help.aidCode,
					personName: help.personName,
					personLastName: help.personLastName,
					img: help.img,
					detail: help.detail,
					creatorUserName: help._creator.firstName,
					comment: activeComments,
					createrUserType: help._creator.userType
				};
				//console.log(sendHelp);
				return res.status(200).send(sendHelp);
			});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const postHelp = async (req, res, next) => {
	try {
		console.log("req.User: ", req.User);
		console.log("req.body.categoryName: ", req.body.categoryNo);
		console.log("req.body.subCategoryName: ", req.body.subCategoryNo);


		const {
			header,
			langitude,
			latitude,
			firstName,
			lastName,
			province,
			town,
			address,
			buildingNo,
			floor,
			apartmentNo,
			phone,
			detail,
			emergencyLevel,
			categoryNo,
			subCategoryNo
		} = req.body;
		console.log("categoryName",categoryNo);
		console.log("subCategoryName",subCategoryNo);
		console.log("emergencyLevel",emergencyLevel);


		//DB İşlemleri
		//Check is there any help near to 5m or 10m
		const existingHelp = await Help.findOne({
			location:{
			lng: langitude,
			lat: latitude
			}
		});
		if (existingHelp) {
			return res.status(401).json({
				message: "Bu bolgede bir yardim var!",
			});
		}
		//Base64 işlemleri yapılması gerekiyor
		const savedImages = [];
		req.files.forEach((newImage) => {
			const savedImage = new Image(newImage);
			savedImage.save().then((err) => {
				if (!err) return res.status(404).send(err);
				console.log("Save oldu resimler...");
			});
			savedImages.push(savedImage);
		});

		const aidCode = subCategoryNo + shortid.generate();
		const now = new Date().toLocaleString("tr-TR", {
			timeZone: "Asia/Istanbul",
		});
		const newHelp = new Help({
			_creator: req.User,
			aidCode: aidCode,
			header: header,
			location:{
				lng: langitude,
				lat: latitude},
			address: {
				province: province,
				town: town,
				buildingNo: buildingNo,
				floor: floor,
				apartmentNo: apartmentNo,
			},
			personName: firstName,
			personLastName: lastName,
			phone: phone,
			addressFull:
				address +
				" Apartman no: " +
				buildingNo +
				" Kat: " +
				floor +
				" Daire: " +
				apartmentNo,
			emergencyLevel: {
				level: Number(emergencyLevel),
				voteNumber: 1,
			},
			img: savedImages,
			detail: detail,
			typeofhelp: {
				category: categoryNo,
				subcategory: subCategoryNo
			},
			createdAt: now,
		});
		console.log(newHelp);
		const savedHelp = newHelp.save().then(() => {
			return res.status(201).send("Yardım başarıyla eklendi.");
		});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const putHelp = async (req, res, next) => {
	try {
		Help.findByIdAndUpdate(
			req.params.id,
			req.body,
			(err, help) => {
				if (err) return res.status(404).send(err);
				return res.status(200).send(help);
			}
		);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const putHelpEmergencyLevel = async (req, res, next) => {
	try {
		Help.findById({_id: req.params.id}, (err, help) => {
			if (err) return res.status(404).send(err);
			console.log("object:", help);
			var helpEmergencyLevel = help.emergencyLevel.level;
			var helpVoteNumber = help.emergencyLevel.voteNumber;
			var Total = helpEmergencyLevel * helpVoteNumber;
			Total = Total + req.body.value;
			help.emergencyLevel.voteNumber = help.emergencyLevel.voteNumber + 1;
			help.emergencyLevel.level = Total / help.emergencyLevel.voteNumber;
			help.save();
			return res.status(200).send(help);
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const deleteHelp = async (req, res, next) => {
	try {
		Help.findByIdAndDelete(req.params.id, (err, help) => {
			if (err) return res.status(404).send(err);
			const message = {
				message: "Basarıyla silindi.",
				id: help.id,
			};
			return res.status(200).send(message);
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getPendingHelpDetails = async (req, res) => {
	try {
		const Pending = "Pending";
		Help.find(
			{status: Pending },
			{
				_id: 1,
				header: 1,
				aidCode: 1,
				location: 1,
				emergencyLevel: 1,
				aidCode: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				typeofhelp: 1,
				createdAt: 1,
			},
			(err, help) => {
				if (err) throw err;
				console.log(help);
				res.status(200).send(help);
			});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};



export const getUserOwnHelps = async (req, res) => {
    try {
		Help.find(
			{_creator: req.User },
			{
				_id: 1,
				header: 1,
				aidCode: 1,
				location: 1,
				emergencyLevel: 1,
				aidCode: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				typeofhelp: 1,
				createdAt: 1,
			},
			(err, help) => {
				if (err) throw err;
				console.log(help);
				res.status(200).send(help);
			});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};


export const getUserOwnPendingHelps = async (req, res) => {
    try {
		Help.find(
			{_creator: req.User, status: 'Pending' },
			{
				_id: 1,
				header: 1,
				location: 1,
				aidCode: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				createdAt: 1,
				typeofhelp: 1,
			},
			(err, help) => {
				if (err) throw err;
				console.log(help);
				res.status(200).send(help);
			});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};


export const getUserOwnActiveHelps = async (req, res) => {
    try {
		Help.find(
			{_creator: req.User, status: 'Active' },
			{
				_id: 1,
				aidCode: 1,
				header: 1,
				location: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				addressFull: 1,
				img: 1,
				typeofhelp: 1,
				createdAt: 1,
			},
			(err, help) => {
				if (err) throw err;
				console.log(help);
				res.status(200).send(help);
			});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

