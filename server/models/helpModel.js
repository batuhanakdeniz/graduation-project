import mongoose from "mongoose";

const helpSchema = mongoose.Schema({
	header: String,
	lng: String,
	lat: String,
	aidNo: String,
	personName: String,
	personLastName: String,
	emergencyLevel: String,
	typeofhelp: String,
	address: String,
	img: String,
	detail: String,
	phone: String,
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const Help = mongoose.model("Help", helpSchema);

export default Help;
