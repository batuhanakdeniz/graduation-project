import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import {sendConfirmationEmail} from "../config/mailer.js";


//createUser is used to Register
export const createUser = async (req, res) => {
    try {
        const { userName, email, password, registrationType, firstName, lastName, phone } = req.body;
        const userType = registrationType;
        const existUserMail = await User.findOne({ email });
        if (existUserMail) {
            return res
                .status(400)
                .json({ errorMsg: "Bu mail kayıtlıdır." });
        }
        const existUserName = await User.findOne({ userName});
        if (existUserName){
            return res
                    .status(400)
                    .json({errorMsg: "Bu User Name kayıtlıdır."});
        }

        //Hashing password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        dotenv.config(); 
        const confirmationCode = jwt.sign({email: email}, process.env.JWT_SECRET );
        console.log(confirmationCode);
        const newUser = new User({
            userName, email, passwordHash, firstName, lastName, phone, userType, confirmationCode
        })

        newUser.save((err)=>{
            if(err){
                console.log(err);
                res.status(401).send({message: err});
                return;
            }
            res.send({message: "Hesabınız oluşturulmuştur. Lütfen doğrulama için emailinizi kontrol ediniz.",});
            sendConfirmationEmail(
                newUser.userName,
                newUser.email,
                newUser.confirmationCode
            )
        });
        //Sign the token
    }
    catch (err) {
        console.log("bok mu var buraya geldim.");
        res.status(409).json({
            message: err.message,
        });
    }
};
//Login 
export const loginUser = async (req, res,next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({  // todo error messagelarla alakalı bir geliştirme yapılmalı
                message: "Wrong Email or password",
            });
        }

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash
        )
        if (!passwordCorrect) {
            return res.status(401).json({
                message: "Wrong Email or password",
            });
        }
        if(existingUser.status != "Active"){
            return res.status(401).send({message: "Hesabınız henüz onaylanmamış. Lütfen emailinizi kontrol ediniz."});
        }
        const token = jwt.sign({
            User: existingUser._id,
            userType: existingUser.userType
        },
            process.env.JWT_SECRET,{
                expiresIn: 86400
            });
        //Cookie http-only send the token

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
//LoggedIn and Logut will be here...
export const verifyUser = async(req,res,next) =>{
    User.findOne({
        confirmationCode: req.params.confirmationCode
    }).then((user)=>{
        if(!user){
            res.status(404).send({message: "Kullanıcı bulunamadı."});
        }
        user.status = "Active";
        user.save((err)=>{
            if(err){
                res.status(500).send({message: err});
                return;
            }
            res.status(200).send({message: "Kullanıcınız onaylanmıştır."});
        })
    })
    .catch((err) => {
        console.log(err);
        })

}
export const getloggedIn = async (req, res,next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true);
    } catch (err) {
        res.json(false);
    }
};
export const getloggedOut = async (req, res,next) => {
    res
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: true,
            sameSite: "none",
        })
        .send();
};
