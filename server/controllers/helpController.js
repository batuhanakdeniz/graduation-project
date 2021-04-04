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

