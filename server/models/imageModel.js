import mongoose from "mongoose"

const ImageSchema = mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
    createdAt:{
        type: Date,
        default: Date(),
    }
});


const Image = mongoose.model("Image", ImageSchema);

export default Image;