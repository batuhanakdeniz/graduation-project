import mongoose from "mongoose";
import Image from "./imageModel.js";
import User from "./userModel.js";
import Comment from "./commentModel.js";
import mongoosastic from "mongoosastic";

const helpSchema = mongoose.Schema({
	_creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	header: String,
	lng: String,
	lat: String,
	aidNo: {type: String, default: "0"},
	personName: String,
	personLastName: String,
	province: String,
	town: String,
	address: String,
	buildingNo: String,
	floor: String,
	apartmentNo: String,
	emergencyLevel: String,
	typeofhelp: String,
	img: [ Image.schema ],
	detail: String,
	phone: String,
	comment: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

helpSchema.plugin(mongoosastic);

const Help = mongoose.model("Help", helpSchema);

export default Help;

/**
 * 	

 */