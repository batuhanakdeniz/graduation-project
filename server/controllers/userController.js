import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//getUser returns just a string
export const getUser = async (req, res) => {
    try {
        //const users = await user.find();
        res.status(200).json("Batu yazıyore");
    }
    catch (err) {
        res.status(404).json({
            message: err.message,
        });
    }
};

//createUser is used to Register
export const createUser = async (req, res) => {
    try {
        const { userName, email, password, passwordVerify, firstName, lastName, modeOfContact, phone } = req.body;
        const userType = req.params.userType;
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

        const newUser = new User({
            userName, email, passwordHash, firstName, lastName, modeOfContact, phone, userType
        })

        const savedUser = await newUser.save();
        //Sign the token

        const token = jwt.sign({
            User: savedUser._id,
        },
            process.env.JWT_SECRET);
        //Cookie http-only send the token

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();

        //res.status(200).json("Kayıt basarıyla gerceklesti.");
    }
    catch (err) {
        res.status(409).json({
            message: err.message,
        });
    }
};
//Login 
export const loginUser = async (req, res) => {
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

        const token = jwt.sign({
            User: existingUser._id,
        },
            process.env.JWT_SECRET);
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

export const getloggedIn = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true);
    } catch (err) {
        res.json(false);
    }
};

export const getloggedUser = async (req, res) => {
    try {
        const user = await User.findById(req.User);
        if (!user) return res.json(false);
        const sendInfos = {
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            userType: user.userType
        }
        res.json(sendInfos)
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}
