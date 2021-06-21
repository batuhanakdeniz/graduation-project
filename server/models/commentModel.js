import mongoose from "mongoose"
import Image from "./imageModel.js"
import User from "./userModel.js"
import Help from "./helpModel.js"
const commentSchema = mongoose.Schema({
    help_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Help'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    status: {
        type: String,
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    extraImages: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Image'} ],
    createdAt:{
        type: String,
    }
});


const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

