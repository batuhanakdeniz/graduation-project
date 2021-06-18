import mongoose from "mongoose";
import Image from "./imageModel.js";
import User from "./userModel.js";
import Comment from "./commentModel.js";


const helpSchema = mongoose.Schema({
	_creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	header: String,
	lng: String,
	lat: String,
	aidNo: {type: String, default: "0"},
	personName: String,
	personLastName: String,
	address: {
		province: {type: String},
		town: {type: String},
		buildingNo: {type: String},
		floor: {type: String},
		apartmentNo: {type: String},
	},
	emergencyLevel: String,
	typeofhelp: String,
	addressFull: String,
	img: [ Image.schema ],
	detail: String,
	phone: String,
	comment: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const Help = mongoose.model("Help", helpSchema);

export default Help;

/**
 * 	

 */