import mongoose from "mongoose"
import Image from "./imageModel.js"
import User from "./userModel.js"
import Help from "./helpModel.js"
const commentSchema = mongoose.Schema({
    help_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Help'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: String,
    avatar: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
    meta: String,
    summary: String,
    extraText: String,
    extraImages: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Image'} ],
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});


const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

