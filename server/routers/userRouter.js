import express from "express";
import { getAllUser, getloggedUser, putUser, deleteUser, getPendingUserType,putUserStatus  } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";
import {createUser,loginUser, getloggedIn, getloggedOut,verifyUser} from "../controllers/authController.js";
const router = express.Router();

//AUTH
router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/api/auth/verify/:confirmationCode',verifyUser);
router.get('/api/loggedIn', getloggedIn);
router.get('/api/loggedOut', getloggedOut);

//USER INFOS
router.get('/api/admin/users', getAllUser);
router.get('/api/admin/users/pending', getPendingUserType);
router.put('/api/admin/users/status/:id', putUserStatus);
router.get('/api/loggedUser', auth , getloggedUser);
router.get('/api/loggedUser/update/:id', putUser);
router.get('/api/loggedUser/delete/:id', deleteUser);
//router.get('/profile/:id', getUserProfile);
export default router;