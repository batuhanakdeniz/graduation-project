import mongoose from "mongoose";
import Image from "./imageModel.js";
import User from "./userModel.js";
import Comment from "./commentModel.js";
import Category from "./categoryModel.js";
import SubCategory from "./subCategoryModel.js"


const helpSchema = mongoose.Schema({
	_creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	header: String,
	location: {
		lng: {type: String, required:true},
		lat: {type: String, required:true},	
	},
	aidCode: {type: String, required:true},
	personName: String,
	personLastName: String,
	address: {
		province: {type: String},
		town: {type: String},
		buildingNo: {type: String},
		floor: {type: String},
		apartmentNo: {type: String},
	},
	emergencyLevel: {
		level: Number,
		voteNumber: Number},
	typeofhelp: {
		category: {type: String},
		subcategory: {type: String}
	},
	HelpingUser:[
	{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
	],
	addressFull: String,
	img: [ Image.schema ],
	detail: String,
	phone: String,
	comment: [ Comment.schema],
	status: {
        type: String,
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
	statusForHelping:{
		type: Boolean,
		default: false
	},
	createdAt: {
		type: String	
	},
});

const Help = mongoose.model("Help", helpSchema);

export default Help;

