import GeoJson from "../models/geoJsonModel.js";
import mongoose from "mongoose";

export const PostGeoJson = async (req, res) => {
	try {
		const geo = {
			city: req.body.city,
            lat: req.body.lat , 
            lng: req.body.lng , 
            country: req.body.country , 
            iso2: req.body.iso2, 
            admin_name: req.body.admin_name, 
            capital: req.body.capital
		};
		const newGeoJson = new GeoJson(geo);
		const savedSubCateggory = await newGeoJson.save();
		return res.status(200).json(savedSubCateggory);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};