import mongoose from "mongoose"

const ImageSchema = mongoose.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    },
    createdAt:{
        type: Date,
        default: Date(),
    }
});


const Image = mongoose.model("Image", ImageSchema);

export default Image;