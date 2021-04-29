import Help from "../models/helpModel.js";

import multer from "multer";
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
        Help.find({},{
                _id: 1,
                lat: 1,
                lng: 1,
                emergencyLevel: 1,
            },(err, helps)=>{
                    if(err) throw err;
                    console.log(helps);
                    res.send(helps);
                }
            );
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
        console.log(req.params);
        Help.findById(req.params.id,{
            _id: 1,
            lat: 1,
            lng: 1,
            emergencyLevel: 1,
        },(err, help)=>{
            if(err) throw err;
            console.log(help);
            res.send(help);
        });
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};

export const getHelpBasics = async (req, res) =>{
    try {
        Help.find({},{
            _id: 1,
            header: 1,
            lat: 1,
            lng: 1,
            emergencyLevel: 1,
            aidNo: 1,
            personName: 1,
            personLastName: 1,
        },(err, helps)=>{
                if(err) throw err;
                console.log(helps);
                res.send(helps);
            }
        );
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};

export const getHelpBasic = async (req, res) =>{
    try {
        Help.findById(req.params.id,{
            _id: 1,
            header: 1,
            lat: 1,
            lng: 1,
            emergencyLevel: 1,
            aidNo: 1,
            personName: 1,
            personLastName: 1,
        },(err, help)=>{
            if(err) throw err;
            console.log(help);
            res.send(help);
        });
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
        Help.findById(req.params.id,{
            _id: 1,
            header: 1,
            lat: 1,
            lng: 1,
            emergencyLevel: 1,
            aidNo: 1,
            personName: 1,
            personLastName: 1,
            img: 1,
            detail: 1,
        },(err, help)=>{
            if(err) throw err;
            console.log(help);
            res.send(help);
        });
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};


export const postHelpImage = async (req, res) =>{
    try {
        Help.findById(req.params.id,{
            _id: 1,
            header: 1,
            lat: 1,
            lng: 1,
            emergencyLevel: 1,
            aidNo: 1,
            personName: 1,
            personLastName: 1,
            img: 1,
            detail: 1,
        },(err, help)=>{
            if(err) throw err;
            console.log(help);
            res.send(help);
        });
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};


export const postHelpImageDENEME = async (err, req, res) =>{
    try {
        res.status(200).send();
    }
    catch{
        res.status(409).send({
            error: err.message,
        });
    }  
};