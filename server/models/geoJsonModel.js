import mongoose from "mongoose"

const geoJsonSchema = mongoose.Schema({
    city: String, 
    lat: String, 
    lng: String, 
    country: String, 
    iso2: String, 
    admin_name: String, 
    capital: String
});


const GeoJson = mongoose.model("GeoJson", geoJsonSchema);

export default GeoJson;




