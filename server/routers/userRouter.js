import express from "express";
import { getAllUser, getloggedUser, putUser, deleteUser, getAllPendingUserType,putUserStatus  } from "../controllers/userController.js";
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
router.get('/api/admin/users/pending', getAllPendingUserType);
router.put('/api/admin/users/status/:userName', putUserStatus);
router.get('/api/loggedUser', auth , getloggedUser);
router.put('/api/loggedUser/update', auth, putUser); 
router.delete('/api/loggedUser/delete/:username', deleteUser);
//router.get('/profile/:id', getUserProfile);
export default router;