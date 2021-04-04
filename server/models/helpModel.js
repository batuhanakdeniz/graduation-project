import mongoose from "mongoose"

const helpSchema = mongoose.Schema({
    name: String,
    surname: String,
    typeofhelp: String,
    image: String,
    createdAt:{
        type: Date,
        default: Date(),
    }
});

const Help = mongoose.model("Help", helpSchema);

export default Help;