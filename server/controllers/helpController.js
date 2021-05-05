import Help from "../models/helpModel.js";
import Image from "../models/imageModel.js";
import multer from "multer";
import fs from "fs";
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
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};


export const postHelpImageDENEME = async (req, res, next) =>{
    try {
        console.log(req.body);
        const {header ,langitude, latitude, firstName, lastName, 
            phone, address, detail
        } = req.body;
        //DB İşlemleri
        //Check is there any help near to 5m or 10m
        const existingHelp = await Help.findOne({
            lng: langitude,
            lat: latitude,
            createdAt:{
                $lte: Date.now()
            }
        })
        if(existingHelp){
            return res.status(401).json({
                message: "Bu bolgede bir yardim var!"
            })
        }
        //Base64 işlemleri yapılması gerekiyor
        const newHelpImagePath = req.file.path;
        const newHelp = new Help({
            header: header,
            lng: langitude,
            lat: latitude,
            aidNo: "default",
            personName: firstName,
            personLastName: lastName,
            phone: phone,
            address: address,
            emergencyLevel: "2",
            typeofhelp: "default",
            img: newHelpImagePath,
            detail: detail, 
        })

        const savedHelp = await newHelp.save();
        console.log(savedHelp);
        res.status(200).json("Yardım basarıyla yuklendi");
    }
    catch (err){
        res.status(409).json({
            message: err.message,
        });
    }  
};