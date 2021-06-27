import express from "express";
import { getAllUser, getloggedUser, putUser, deleteUser, getAllPendingUserType,putUserStatus, putUserStatusConfirmation, putUserStatusReject  } from "../controllers/userController.js";
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
router.put('/api/admin/users/status/:userName', putUserStatus); //
router.delete('/api/admin/delete/:username', deleteUser);
router.get('/api/loggedUser', auth , getloggedUser);
router.put('/api/admin/users/status/confirmation', auth, putUserStatusConfirmation); 
router.put('/api/admin/users/status/reject', auth, putUserStatusReject); 
router.put('/api/loggedUser/update', auth, putUser); //statü başvurusunda kullandık
//router.get('/profile/:id', getUserProfile);
export default router;