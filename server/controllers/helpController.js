import Help from "../models/helpModel.js";
export const getHelp = async (req, res) =>{
    try {
        const helps = await Help.find();
        res.status(200).json(helps);
    }
    catch (err){
        res.status(404).json({
            message: err.message,
        });
    }  
};
export const createHelp = async (req, res) =>{
    const newHelps = new Help(req.body);
    try {
        await newHelps.save();
        res.status(200).json(newHelps);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};


export const getHelpLocations = async (req, res) =>{
    try {
        const helps = Help.find();
        const HelpLocations = {
            id: helps.id,
            lng: helps.lng,
            lat: helps.lat,
        }
        console.log(helps);
        res.status(200).json(HelpLocations);
    }
    catch (err){
        console.log("fena hata var heee");
        res.status(409).json({
            message: err.message,
        });
    }  
};

export const getHelpLocation = async (req, res) =>{
    
    try {
        const help = await Help.findById(req.body.id);
        const HelpLocation = {
            id: help.id,
            lng: help.lng,
            lat: help.lat,
        }
        res.status(200).json(HelpLocation);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};

export const getHelpBasics = async (req, res) =>{
    try {
        res.status(200);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};

export const getHelpBasic = async (req, res) =>{
    try {
        res.status(200);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};


export const getHelpDetails = async (req, res) =>{
    try {
        res.status(200);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};




export const getHelpDetail = async (req, res) =>{
    try {
        res.status(200);
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};

