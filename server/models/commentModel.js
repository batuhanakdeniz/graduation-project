import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    help_id: String,
    user_id: String,
    date: String,
    avatar: String,
    meta: String,
    summary: String,
    extraText: String,
    extraImages: [],
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});


const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

