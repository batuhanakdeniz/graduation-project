import mongoose from "mongoose";

const helpSchema = mongoose.Schema({
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
	address: String,
	img: [{
		fieldname: String,
		originalname: String,
		encoding: String,
		mimetype: String,
		destination: String,
		filename: String,
		path: String,
		size: Number
	}],
	detail: String,
	phone: String,
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const Help = mongoose.model("Help", helpSchema);

export default Help;