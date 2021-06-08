import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";

//getUser returns just a string
export const getAllUser = async (req, res) => {
    try {
		User.find(
			{},
			{
				_id: 1,
				userName: 1,
				userName: 1,
                firstName: 1,
                lastName: 1,
                phone: 1,
                userType: 1
            },
			(err, users) => {
				if (err) throw err;
				res.send(users);
			}
		);
	} catch (err) {
		res.status(409).json({
			message: err.message,
		});
	}
};

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

        const newUser = new User({
            userName, email, passwordHash, firstName, lastName, phone, userType
        })

        const savedUser = await newUser.save();
        //Sign the token

        const token = jwt.sign({
            User: savedUser._id,
            userType: savedUser.userType
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
            userType: existingUser.userType
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
export const getloggedOut = async (req, res) => {
    res
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: true,
            sameSite: "none",
        })
        .send();
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


export const putUser = async (req, res, next) =>{
	try {
		User.findByIdAndUpdate(req.User,req.body,{new: true},
			(err, help) => {
					if (err) return res.status(404).send(err);
					return res.status(200).send(help);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}
export const deleteUser = async (req, res, next) =>{
	try {
		User.findByIdAndDelete(req.User,
			(err, user) => {
					if (err) return res.status(404).send(err);
					const message = {
						message: "Basarıyla silindi.",
						id: user.id
					}
					return res.status(200).send(message);
				});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
}