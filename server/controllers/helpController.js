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
		console.log("buraya geldim mi acaba");
		Help.find(
			{},
			{
				_id: 1,
				lat: 1,
				lng: 1,
				emergencyLevel: 1,
			},
			(err, helps) => {
				if (err) throw err;
				console.log(helps);
				res.send(helps);
			}
		);
	} catch (err) {
		console.log("fena hata var heee");
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
				lat: 1,
				lng: 1,
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
				lat: 1,
				lng: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				img: { $slice: 1},
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
		Help.findById(
			req.params.id,
			{
				_id: 1,
				header: 1,
				lat: 1,
				lng: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				createdAt: 1,
			},
			(err, help) => {
				if (err) throw err;
				const sendHelp = {
					_id: help._id,
					header: help.header,
					lat: help.lat,
					lng: help.lng,
					emergencyLevel: help.emergencyLevel,
					aidNo: help.aidNo,
					personName: help.personName,
					personLastName: help.personLastName,
					img: help.img[0].filename,
					createdAt: help.createdAt,
				};
				console.log(sendHelp);
				res.send(sendHelp);
			}
		);
	} catch (err) {
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
		console.log("req.User: ", req.User);
		console.log("req.userType: ", req.userType);

		const user = User.findById(req.User);
		Help.findById(
			req.params.id,
			{
				_id: 1,
				header: 1,
				lat: 1,
				lng: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				detail: 1,
				comment: 1,
			},
			(err, help) => {
				if (err) throw err;
				let activeComments = [];
				console.log("help comment: ",help.comment);
				help.comment.forEach((comment)=>{
					if(comment.status == "Active"){ activeComments.push(comment)}
				})
				const sendHelp = {
					_id: help._id,
					header: help.header,
					lat: help.lat,
					lng: help.lng,
					emergencyLevel: help.emergencyLevel,
					aidNo: help.aidNo,
					personName: help.personName,
					personLastName: help.personLastName,
					img: help.img,
					detail: help.detail,
					comment: activeComments
				};
				console.log(sendHelp);
				return res.status(200).send(sendHelp);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const postHelp = async (req, res, next) => {
	try {
		console.log("req.User: ", req.User);
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
			emergencyLevel
			//category,
			//subCategory
		} = req.body;

		//DB İşlemleri
		//Check is there any help near to 5m or 10m
		const existingHelp = await Help.findOne({
			lng: langitude,
			lat: latitude,
		});
		if (existingHelp) {
			return res.status(401).json({
				message: "Bu bolgede bir yardim var!",
			});
		}
		//Base64 işlemleri yapılması gerekiyor
		const savedImages = [];
		console.log("req.files: ",req.files);
        req.files.forEach((newImage) =>{
			console.log("Image: ",newImage);
			console.log("newImage: ",newImage);
            const savedImage = new Image(newImage);
            
			savedImage.save().then((err)=>{
				if(!err)	return res.status(404).send(err)
                console.log("Save oldu resimler...");
            });
            savedImages.push(savedImage);
        });
/*
		const categoryNo = 0;
		await Category.findOne({categoryName: category}, (err,category) =>{
			if(err)	return res.status(404).send({message: err})
			categoryNo = category.categoryCode;
		});
		const subCategoryNo = 0;
		await SubCategory.findOne({subCategoryName: subCategory}, (err,subCategory) =>{
			if(err)	return res.status(404).send({message: err})
			subCategoryNo = subCategory.subCategoryCode;
		});
		const aidCode = categoryNo + subCategoryNo + shortid.generate();
*/
		const now = new Date().toLocaleString("tr-TR", {timeZone: "Asia/Istanbul"});
		const newHelp = new Help({
			_creator: req.User,
			//aidCode: aidCode,
			header: header,
			lng: langitude,
			lat: latitude,
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
			addressFull: address + "Apartman no: " + buildingNo + "Kat: " + floor + "Daire: " + apartmentNo,
			emergencyLevel: {
				level:Number(emergencyLevel),
				voteNumber: 1},
			img: savedImages,
			detail: detail,
			createdAt: now,
		});

		const savedHelp = await newHelp.save().then(()=>{
			return res.status(201).send("Yardım başarıyla eklendi.");
		});
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

export const putHelp = async (req, res, next) =>{
	try {
		Help.findByIdAndUpdate(req.params.id,req.body,{new: true},
			(err, help) => {
					if (err) return res.status(404).send(err);
					return res.status(200).send(help);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}

export const putHelpEmergencyLevel = async (req, res, next) =>{
	try {
		Help.findByIdAndUpdate(req.params.id,
			(err, help) => {
					if (err) return res.status(404).send(err);
					console.log("object:",help);
					var helpEmergencyLevel = help.emergencyLevel.level;
					var helpVoteNumber = help.emergencyLevel.voteNumber;
					var Total = helpEmergencyLevel * helpVoteNumber;
					Total = Total + req.body.emergencyLevel;
					help.emergencyLevel.voteNumber = help.emergencyLevel.voteNumber +1;
					help.emergencyLevel.level = Total/ help.emergencyLevel.voteNumber;
					help.save();
					return res.status(200).send(help);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}


export const deleteHelp = async (req, res, next) =>{
	try {
		Help.findByIdAndDelete(req.params.id,
			(err, help) => {
					if (err) return res.status(404).send(err);
					const message = {
						message: "Basarıyla silindi.",
						id: help.id
					}
					return res.status(200).send(message);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}

/*
export const getHelpdeniyore = async (req, res) => {
	try {

		Help.findById(
			req.params.id,
			{
				_id: 1,
				header: 1,
				lat: 1,
				lng: 1,
				emergencyLevel: 1,
				aidNo: 1,
				personName: 1,
				personLastName: 1,
				img: 1,
				detail: 1,
				comment: 1,
			},
			(err, help) => {
				let activeComments = [];
				console.log("help comment: ",help.comment);
				help.comment.forEach((comment)=>{
					if(comment.status == "Active"){ activeComments.push(comment)}
				})
				if (err) throw err;
				const sendHelp = {
					_id: help._id,
					header: help.header,
					lat: help.lat,
					lng: help.lng,
					emergencyLevel: help.emergencyLevel,
					aidNo: help.aidNo,
					personName: help.personName,
					personLastName: help.personLastName,
					img: help.img,
					detail: help.detail,
					comment: activeComments
				};
				console.log(sendHelp);
				return res.status(200).send(sendHelp);
			}
		);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};*/