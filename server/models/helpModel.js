import mongoose from "mongoose"

const helpSchema = mongoose.Schema({
    id: String,
    lng: Number,
    lat: Number,
    header: String,
    emergencyLevel: Number,
    personName: String,
    personLastName: String
});

const Help = mongoose.model("Help", helpSchema);

export default Help;